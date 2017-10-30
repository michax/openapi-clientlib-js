import MetaProcessor from './meta-protobuf';
import protobuf from 'protobufjs/dist/protobuf';
// eslint-disable-next-line import/no-extraneous-dependencies
import base64 from '@protobufjs/base64';
import log from '../../../log';

const LOG_AREA = 'SerializerProtobuf';

console.log('[debug] Global protobuf instance. ONLY FOR DEBUG purpose!');
window.$protobuf = protobuf;

/**
 * Protobuf Serialization
 * @constructor
 */
function SerializerProtobuf() {
    try {
        this.schemas = protobuf.Root.fromJSON(protobuf.common['google/protobuf/wrappers.proto'], protobuf.root);
        this.schemas = protobuf.Root.fromJSON(protobuf.common['google/protobuf/timestamp.proto'], this.schemas);
    } catch (e) {
        log.error(LOG_AREA, 'Parsing of global schemas failed.', e.message);
    }

    /**
     * Url to schema name map.
     */
    this.schemasUrlMap = {};

    /**
     * Processed all meta fields of decoded message type.
     * @type {MetaProtobuf}
     */
    this.metaProcessor = new MetaProcessor();
}

SerializerProtobuf.prototype.getSchema = function(name) {
    return this.schemas.root.lookup(name);
};

SerializerProtobuf.prototype.getSchemas = function() {
    return this.schemas;
};

SerializerProtobuf.prototype.getUrlSchemaName = function(serviceGroup, url) {
    return this.schemasUrlMap[`${serviceGroup}/${url}`];
};

SerializerProtobuf.prototype.getSchemaNames = function() {
    const values = [];
    for (const key in this.schemasUrlMap) {
        if (this.schemasUrlMap.hasOwnProperty(key)) {
            values.push(values[key]);
        }
    }
    return values;
};

SerializerProtobuf.prototype.addSchema = function(schema, name, serviceGroup, url) {
    let nextSchemas;

    try {
        nextSchemas = protobuf.parse(schema, this.schemas.root, { keepCase: true });
    } catch (e) {
        log.error(LOG_AREA, 'Schema parsing failed', {
            error: e.message,
            name,
        });

        return false;
    }

    // TODO: Implement removal of existing schema with previous version for the same endpoint.
    // TODO: It can't be removed for now, as we keep schemas per endpoint, until we get namespaced schemas from server.
    this.schemasUrlMap[`${serviceGroup}/${url}`] = name;
    this.schemas = nextSchemas;

    return true;
};

// TODO(xmiku): TOREMOVE!!!! Temporary override to allow correct root message schema mapping.
const DEBUG_SCHEMA_MAPPING = {
    Balances: 'BalanceResponse',
    Orders: 'CollectionEnvelope',
};

SerializerProtobuf.prototype.parse = function(data, schemaName) {
    let rootTypeName = this.schemas.root.getOption('saxobank_root');

    // TODO(xmiku): TOREMOVE!!!! Temporary override to allow correct root message schema mapping.
    rootTypeName = DEBUG_SCHEMA_MAPPING[rootTypeName] || rootTypeName;

    console.log('[debug][SerializerProtobuf.parse] data: ', data, ' schemaName: ', schemaName, ' rootTypeName: ', rootTypeName);

    if (!data) {
        return null;
    }

    if (!rootTypeName) {
        log.error('Parsing failed. Missing root message name', rootTypeName);
        return null;
    }

    const rootType = this.schemas.root.lookupType(rootTypeName);

    console.log('[debug][parse] this.schemas.root: ', this.schemas);

    if (!rootType) {
        log.error('Parsing failed. Missing root type name', rootTypeName);
        return null;
    }

    // Uint8Array is supported from IE 10+ (and in all other browsers).
    // http://caniuse.com/#feat=typedarrays
    // If we plan to support IE 9, we should use polify.
    // TODO: Sadly, looking at the code, it seems like we will need to support 9.
    const byteArray = new Uint8Array(base64.length(data));

    try {
        base64.decode(data, byteArray, 0);
    } catch (e) {
        log.error('Parsing failed. Conversion to byteArray from base64 failed', e.message);
        return null;
    }

    let message = null;

    // TODO(xmiku): Try/catch can impact performance significantly. Maybe one will be enough.
    try {
        message = rootType.decode(byteArray);
    } catch (e) {
        log.error('Parsing failed. Protobuf Decoding of byteArray failed', e.message);
        return null;
    }

    const jsonData = message ? message.toJSON() : null;
    const processedData = this.metaProcessor.process(message, jsonData);

    console.log('[debug][SerializerProtobuf.parse] rootTypeName: ', rootTypeName,
        '\nparsedMessage: ', message,
        '\njsonData: ', jsonData,
        '\nprocessedData: ', processedData,
    );

    return processedData;
};

SerializerProtobuf.prototype.stringify = function(data, schemaName) {
    const bytes = this.encode(data, schemaName);
    if (!bytes) {
        return null;
    }
    return base64.encode(bytes, 0, bytes.length);
};

SerializerProtobuf.prototype.encode = function(data, schemaName) {
    const schema = this.getSchema(schemaName);
    if (!schema) {
        return null;
    }

    return schema.encode(data).finish();
};

SerializerProtobuf.prototype.getFormatName = function() {
    return SerializerProtobuf.FORMAT_NAME;
};

SerializerProtobuf.FORMAT_NAME = 'application/x-protobuf';

export default SerializerProtobuf;
