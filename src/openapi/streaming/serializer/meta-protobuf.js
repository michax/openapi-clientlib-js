const LOG_AREA = 'MetaProtobuf';

const META_NULLS = "__meta_nulls";
const META_EMPTY = "__meta_empty";

/**
 * Map of custom global envelopes
 */
const CUSTOM_ENVELOPES = {
    'CollectionEnvelope': (data) => {
        return data.collection;
    },
};

const META_TYPES = {
    [META_NULLS]: true,
    [META_EMPTY]: true
};

function iterateTree(message, data, process) {
    for(let key in data) {
        if (data.hasOwnProperty(key) && !META_TYPES[key]) {
            const nextData = data[key];
            if (typeof nextData === 'object') {
                process(message[key], data[key]);
                iterateTree.call(this, message[key], nextData, process);
            }
        }
    }
    return data;
}

function processNull(message, data, ids) {
    for(let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const field = message.$type.fieldsById[id];
        if (!field) {
            continue;
        }
        data[field.name] = null;
    }

    // TODO(xmiku): Remove delete as soon as we move metadata to extensions.
    delete data[META_NULLS];

}

function processEmpty(message, data, ids) {
    for(let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const field = message.$type.fieldsById[id];
        if (!field) {
            continue;
        }
        data[field.name] = [];
    }

    // TODO(xmiku): Remove delete as soon as we move metadata to extensions.
    delete data[META_EMPTY];
}

function processChild(message, data) {
    if (!message) {
        return data;
    }

    if (message[META_NULLS] && message[META_NULLS].length) {
        processNull(message, data, message[META_NULLS]);
    }
    if (message[META_EMPTY] && message[META_EMPTY].length) {
        processEmpty(message, data, message[META_EMPTY]);
    }

    return data;
}

/**
 * Processed all meta fields of decoded message type.
 * More info: https://wiki/display/OpenAPI/Delta+compression+implementation+of+ProtoBuffers
 * @constructor
 */
function MetaProtobuf() {}

/**
 * Process data using message metadata. Iterate through each field and process metadata, if found.
 *
 * @param {Object} message - Protobuf Message Type object.
 * @param {Object} data - JSON object. Object get's mutated.
 * @return {*}
 */
MetaProtobuf.prototype.process = function(message, data) {
    if (!message || !data) {
        return;
    }

    iterateTree.call(this, [message], [data], processChild.bind(this));

    for(let key in CUSTOM_ENVELOPES)  {
        if (message.$type.name === key) {
            data = CUSTOM_ENVELOPES[key](data);
        }
    }

    return data;
};

export default MetaProtobuf;
