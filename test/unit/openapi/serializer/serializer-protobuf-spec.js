import * as mockProtoPrice from './../../mocks/proto-price';

const SerializerProtobuf = saxo.openapi._SerializerProtobuf;

describe('Serializer Protobuf', () => {

    describe('addSchemas', () => {
        it('should add new price schema', () => {
            const serializer = new SerializerProtobuf();
            serializer.addSchema(mockProtoPrice.schema, 'PriceResponse', 'trade', 'v1/prices');
            const schemaObject = serializer.getSchema('PriceResponse');

            expect(schemaObject).not.toBeFalsy();
            expect(serializer.getUrlSchemaName('trade', 'v1/prices')).toBe('PriceResponse');
            expect(
                JSON.parse(JSON.stringify(schemaObject.fields))
            ).toEqual(
                jasmine.objectContaining(mockProtoPrice.fields)
            );
        });

        it('should skip adding invalid schema', () => {
            const serializer = new SerializerProtobuf();
            const done = serializer.addSchema('invlaid schema: 123', 'InvalidSchema', 'trade', 'v1/prices');
            expect(done).toBe(false);
            expect(serializer.getUrlSchemaName('trade', 'v1/prices')).toBeFalsy();
            expect(serializer.getSchema('InvalidSchema')).toBeFalsy();
        });
    });

    describe('parse', () => {
        it('should parse encoded base64 price response', () => {
            const serializer = new SerializerProtobuf();
            serializer.addSchema(mockProtoPrice.schema, 'PriceResponse', 'trade', 'v1/prices');
            const price = serializer.parse(mockProtoPrice.encodedMessage, 'PriceResponse');
            const jsonPrice = JSON.parse(JSON.stringify(price));
            expect(jsonPrice).toEqual(jasmine.objectContaining(mockProtoPrice.objectMessage));
        });
    });

    describe('stringify', () => {
        it('should stringify price response', () => {
            const serializer = new SerializerProtobuf();
            serializer.addSchema(mockProtoPrice.schema, 'PriceResponse', 'trade', 'v1/prices');

            const encoded = serializer.stringify(mockProtoPrice.objectMessage, 'PriceResponse');
            expect(encoded).toBe(mockProtoPrice.encodedMessage);
        });
    });

    // TODO(xmiku): Remove size reporting! Used during development for reviewing of serialization results.
    /* eslint-disable no-console */
    describe('size reporting', () => {
        it('should report price sizes', () => {
            const serializer = new SerializerProtobuf();
            serializer.addSchema(mockProtoPrice.schema, 'PriceResponse', 'trade', 'v1/prices');

            const encoded = serializer.encode(mockProtoPrice.objectMessage, 'PriceResponse');
            const base64encoded = serializer.stringify(mockProtoPrice.objectMessage, 'PriceResponse');

            // eslint-ignore
            console.log('[debug][report.size]');
            console.table({
                'protobuf': { size: encoded.length },
                'protobuf-base64-size': { size: base64encoded.length },
                'json-schema-size': { size: mockProtoPrice.getJSONSchemaBytes() },
                'json-size': { size: mockProtoPrice.getJSONBytes() },
            });

            console.log('[debug][report.values]',
                '\nprotobuf: ', encoded,
                '\nprotobuf-base64: ', base64encoded
            );

            expect(encoded.length).toBe(648);
            expect(base64encoded.length).toBe(864);
            expect(mockProtoPrice.getJSONBytes()).toBe(1588);
            expect(mockProtoPrice.getJSONSchemaBytes()).toBe(1007);
        });
    });
});
