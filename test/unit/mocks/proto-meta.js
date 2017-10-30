// Size summary
// JSON with numeric fields: 1086 bytes
// JSON: 1556
// Protobuf base64: 800 bytes
// Probobuf ByteArray: 600 bytes


export const metaNulls = () => ({
    schema: `syntax = "proto3";
       
       option saxobank_root = "Main";
       
       message Description {
         repeated int32 __meta_nulls = 1;
         repeated int32 __meta_empty = 2;
         
         int32 id  = 3;
         string body = 4;
         repeated int32 logs = 5;
         
       }
       
       message Main {
          repeated int32 __meta_nulls = 1;
          int32 count = 2;
          string message = 3;
          Description description = 4;
        
          optional int32 ext_0 = 126;
       }
    `,
    payloadMessageNull: () => ({
        count: 1,
        message: null,
        description: {
            id: 5,
            __meta_nulls: [4],
            __meta_empty: [5],
        },
        __meta_nulls: [3],
    }),
    payloadAllNull: () => ({
        __meta_nulls: [2, 3],
    }),
});


export const metaCollectionEnvelope = () => ({
    schema: `syntax = "proto3";
        
        option saxobank_root = "CollectionEnvelope";
    
        message MyDomainObjectWithKey {
           repeated int32 __meta_nulls = 1;
           repeated int32 __meta_empty = 2;
           bool __meta_deleted = 3;
           int32 count = 4;
           int32 key = 5;
           string message = 6;
           repeated int32 logs = 7;
        }
        message CollectionEnvelope {
           repeated int32 __meta_nulls = 1;
           repeated int32 __meta_empty = 2;
           repeated MyDomainObjectWithKey collection = 3;
        }
    `,
    payloadAll: () => ({
        collection:
            [
                { key: 1, count: 1, message: "Message one." },
                { key: 2, count: 1, message: "Message two." },
                { key: 3, count: 1, message: "Message three." }
            ]
    }),
    payloadDeletedRow: () => ({
        collection:
            [
                { key: 1, count: 1, message: "Message one." },
                { key: 2, __meta_deleted: true },
                { key: 3, count: 1, message: "Message three." }
            ]
    }),
    payloadEmptyLogs: () => ({
        collection:
            [
                { key: 1, count: 1, message: "Message one." },
                { key: 2, __meta_empty: [7] },
                { key: 3, count: 1, message: "Message three." }
            ]
    }),
    payloadNullMessage: () => ({
        collection:
            [
                { key: 1, count: 1, message: "Message one." },
                { key: 2, __meta_nulls: [6] },
                { key: 3, count: 1, message: "Message three." }
            ]
    }),
});
