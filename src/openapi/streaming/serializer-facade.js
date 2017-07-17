import SerializeJson from './serializer/serializer-json';
import SerializeProtobuf from './serializer/serializer-protobuf';

/**
 * Serialization facade for multiple serialization solution.
 * @constructor
 */
function SerializerFacade() {}

SerializerFacade.serializers = {
    [SerializeJson.FORMAT_NAME]: new SerializeJson(),
    [SerializeProtobuf.FORMAT_NAME]: new SerializeProtobuf(),
};

SerializerFacade.defaultSerializerName = SerializeJson.FORMAT_NAME;

SerializerFacade.getSerializer = function(name) {
    return SerializerFacade.serializers[name] || SerializerFacade.serializers[SerializerFacade.defaultSerializerName];
};

export default SerializerFacade;
