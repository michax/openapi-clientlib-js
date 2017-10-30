import SerializeJson from './serializer/serializer-json';
import SerializeProtobuf from './serializer/serializer-protobuf';

/**
 * Serialization facade for multiple serialization solution.
 * @constructor
 */
function SerializerFacade() {}

SerializerFacade.serializerCreators = {
    [SerializeJson.FORMAT_NAME]: SerializeJson,
    [SerializeProtobuf.FORMAT_NAME]: SerializeProtobuf,
};

SerializerFacade.serializersMap = {};

SerializerFacade.defaultSerializer = SerializeJson;

SerializerFacade.getId = (name, serviceGroup, url) => `${name}.${serviceGroup}.${url}`;

/**
 * Get serializer for given format name, service group and url.
 * Serialized are mapped per name, service and url, to keep schemas per endpoints.
 * Such approach is needed due current protobuf limitation that disallows openapi to send root message name for given endpoint.
 * If openapi finds a way to inform us which message is root one for given schema, we could use shared one.
 *
 * @param {String} name - The format name. ie. "application/json"
 * @param {String} serviceGroup - The service group
 * @param {String} url - The url for given endpoint
 * @return {Object} Serializer
 */
SerializerFacade.getSerializer = function(name, serviceGroup, url) {
    const id = SerializerFacade.getId(name, serviceGroup, url);

    if (SerializerFacade.serializersMap[id]) {
        return SerializerFacade.serializersMap[id];
    } else {
        const Serializer = SerializerFacade.serializerCreators[name] || SerializerFacade.defaultSerializer;
        SerializerFacade.serializersMap[id] = new Serializer();
    }

    return SerializerFacade.serializersMap[id];
};

window.$SerializerFacade = SerializerFacade;
export default SerializerFacade;
