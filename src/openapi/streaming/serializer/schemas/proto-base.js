// Stores core schemas used by all schemas received from openapi.

export const protoBclBase = `package bcl;
message TimeSpan {
  optional sint64 value = 1; // the size of the timespan (in units of the selected scale)
  optional TimeSpanScale scale = 2 [default = DAYS]; // the scale of the timespan
  enum TimeSpanScale {
    DAYS = 0;
    HOURS = 1;
    MINUTES = 2;
    SECONDS = 3;
    MILLISECONDS = 4;
    TICKS = 5;

    MINMAX = 15; // dubious
  }
}

message DateTime {
  optional sint64 value = 1; // the offset (in units of the selected scale) from 1970/01/01
  optional TimeSpanScale scale = 2 [default = DAYS]; // the scale of the timespan
  enum TimeSpanScale {
    DAYS = 0;
    HOURS = 1;
    MINUTES = 2;
    SECONDS = 3;
    MILLISECONDS = 4;
    TICKS = 5;

    MINMAX = 15; // dubious
  }
}

message NetObjectProxy {
  optional int32 existingObjectKey = 1; // for a tracked object, the key of the **first** time this object was seen
  optional int32 newObjectKey = 2; // for a tracked object, a **new** key, the first time this object is seen
  optional int32 existingTypeKey = 3; // for dynamic typing, the key of the **first** time this type was seen
  optional int32 newTypeKey = 4; // for dynamic typing, a **new** key, the first time this type is seen
  optional string typeName = 8; // for dynamic typing, the name of the type (only present along with newTypeKey)
  optional bytes payload = 10; // the new string/value (only present along with newObjectKey)
}

message Guid {
  optional fixed64 lo = 1; // the first 8 bytes of the guid
  optional fixed64 hi = 2; // the second 8 bytes of the guid
}

message Decimal {
  optional uint64 lo = 1; // the first 64 bits of the underlying value
  optional uint32 hi = 2; // the last 32 bis of the underlying value
  optional uint32 signScale = 3; // the number of decimal digits (bits 1-16), and the sign (bit 0)
}`;

export const protoGoogleBase = `
syntax = "proto3";

package google.protobuf;

option csharp_namespace = "Google.Protobuf.WellKnownTypes";
option cc_enable_arenas = true;
option go_package = "github.com/golang/protobuf/ptypes/timestamp";
option java_package = "com.google.protobuf";
option java_outer_classname = "TimestampProto";
option java_multiple_files = true;
option objc_class_prefix = "GPB";

message Timestamp {
  int64 seconds = 1;
  int32 nanos = 2;
}`;