import * as baseProtos from './schemas/proto-base';
import protobuf from 'protobufjs/dist/protobuf';
// eslint-disable-next-line import/no-extraneous-dependencies
import base64 from '@protobufjs/base64';
import log from '../../../log';

const LOG_AREA = 'SerializerProtobuf';

/**
 * Protobuf Serialization
 * @constructor
 */
function SerializerProtobuf() {
    try {
        this.schemas = protobuf.parse(baseProtos.protoGoogleBase, {});
    } catch (e) {
        log.error(LOG_AREA, 'Parsing of global schemas failed.', e.message);
    }

    /**
     * Url to schema name map.
     */
    this.schemasUrlMap = {};
}

SerializerProtobuf.prototype.getSchema = function(name) {
    return this.schemas.root.lookup(name);
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
        nextSchemas = protobuf.parse(schema, this.schemas.root);
    } catch (e) {
        log.error(LOG_AREA, 'Schema parsing failed', {
            error: e.message,
            name,
        });

        return false;
    }

    // TODO: Implement removal of existing schema with previous version for the same endpoint.
    this.schemasUrlMap[`${serviceGroup}/${url}`] = name;
    this.schemas = nextSchemas;

    return true;
};

SerializerProtobuf.prototype.parse = function(data, schemaName) {
    if (!data || !schemaName) {
        return data;
    }

    const schema = this.schemas.root.lookupType(schemaName);

    if (!schema) {
        log.error('Parsing failed. Missing schema', schemaName);
        return null;
    }

    // Uint8Array is supported from IE 10+ (and in all other browsers).
    // http://caniuse.com/#feat=typedarrays
    // If we plan to support IE 9, we should use polify.
    const byteArray = new Uint8Array(base64.length(data));

    try {
        base64.decode(data, byteArray, 0);
    } catch (e) {
        log.error('Parsing failed. Conversion to byteArray from base64 failed', e.message);
        return null;
    }

    let parsedData = null;

    // TODO(xmiku): Try/catch can impact performance significantly. Maybe one will be enough.
    try {
        parsedData = schema.decode(byteArray);
    } catch (e) {
        log.error('Parsing failed. Protobuf Decoding of byteArray failed', e.message);
        return null;
    }

    return parsedData;
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
