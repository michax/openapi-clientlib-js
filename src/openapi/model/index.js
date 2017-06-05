/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const comments = $root.comments = (() => {

    const comments = {};

    comments.Test1 = (function() {

        function Test1(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Test1.prototype.field1 = "";
        Test1.prototype.field2 = 0;
        Test1.prototype.field3 = false;

        Test1.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.field1 != null && m.hasOwnProperty("field1"))
                w.uint32(10).string(m.field1);
            if (m.field2 != null && m.hasOwnProperty("field2"))
                w.uint32(16).uint32(m.field2);
            if (m.field3 != null && m.hasOwnProperty("field3"))
                w.uint32(24).bool(m.field3);
            return w;
        };

        Test1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Test1.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.comments.Test1();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.field1 = r.string();
                    break;
                case 2:
                    m.field2 = r.uint32();
                    break;
                case 3:
                    m.field3 = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Test1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        return Test1;
    })();

    comments.Test2 = (function() {

        function Test2(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Test2.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        Test2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Test2.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.comments.Test2();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Test2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        return Test2;
    })();

    comments.Test3 = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ONE"] = 1;
        values[valuesById[2] = "TWO"] = 2;
        values[valuesById[3] = "THREE"] = 3;
        values[valuesById[4] = "FOUR"] = 4;
        return values;
    })();

    return comments;
})();

export const vector_tile = $root.vector_tile = (() => {

    const vector_tile = {};

    vector_tile.Tile = (function() {

        function Tile(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Tile.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        Tile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Tile.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.vector_tile.Tile();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        Tile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Tile.GeomType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "POINT"] = 1;
            values[valuesById[2] = "LINESTRING"] = 2;
            values[valuesById[3] = "POLYGON"] = 3;
            return values;
        })();

        Tile.Value = (function() {

            function Value(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Value.prototype.stringValue = "";
            Value.prototype.floatValue = 0;
            Value.prototype.doubleValue = 0;
            Value.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Value.prototype.uintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Value.prototype.sintValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Value.prototype.boolValue = false;

            Value.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.stringValue != null && m.hasOwnProperty("stringValue"))
                    w.uint32(10).string(m.stringValue);
                if (m.floatValue != null && m.hasOwnProperty("floatValue"))
                    w.uint32(21).float(m.floatValue);
                if (m.doubleValue != null && m.hasOwnProperty("doubleValue"))
                    w.uint32(25).double(m.doubleValue);
                if (m.intValue != null && m.hasOwnProperty("intValue"))
                    w.uint32(32).int64(m.intValue);
                if (m.uintValue != null && m.hasOwnProperty("uintValue"))
                    w.uint32(40).uint64(m.uintValue);
                if (m.sintValue != null && m.hasOwnProperty("sintValue"))
                    w.uint32(48).sint64(m.sintValue);
                if (m.boolValue != null && m.hasOwnProperty("boolValue"))
                    w.uint32(56).bool(m.boolValue);
                return w;
            };

            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Value.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vector_tile.Tile.Value();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.stringValue = r.string();
                        break;
                    case 2:
                        m.floatValue = r.float();
                        break;
                    case 3:
                        m.doubleValue = r.double();
                        break;
                    case 4:
                        m.intValue = r.int64();
                        break;
                    case 5:
                        m.uintValue = r.uint64();
                        break;
                    case 6:
                        m.sintValue = r.sint64();
                        break;
                    case 7:
                        m.boolValue = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            return Value;
        })();

        Tile.Feature = (function() {

            function Feature(p) {
                this.tags = [];
                this.geometry = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Feature.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Feature.prototype.tags = $util.emptyArray;
            Feature.prototype.type = 0;
            Feature.prototype.geometry = $util.emptyArray;

            Feature.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.id != null && m.hasOwnProperty("id"))
                    w.uint32(8).uint64(m.id);
                if (m.tags != null && m.tags.length) {
                    w.uint32(18).fork();
                    for (var i = 0; i < m.tags.length; ++i)
                        w.uint32(m.tags[i]);
                    w.ldelim();
                }
                if (m.type != null && m.hasOwnProperty("type"))
                    w.uint32(24).uint32(m.type);
                if (m.geometry != null && m.geometry.length) {
                    w.uint32(34).fork();
                    for (var i = 0; i < m.geometry.length; ++i)
                        w.uint32(m.geometry[i]);
                    w.ldelim();
                }
                return w;
            };

            Feature.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Feature.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vector_tile.Tile.Feature();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.uint64();
                        break;
                    case 2:
                        if (!(m.tags && m.tags.length))
                            m.tags = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.tags.push(r.uint32());
                        } else
                            m.tags.push(r.uint32());
                        break;
                    case 3:
                        m.type = r.uint32();
                        break;
                    case 4:
                        if (!(m.geometry && m.geometry.length))
                            m.geometry = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.geometry.push(r.uint32());
                        } else
                            m.geometry.push(r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            Feature.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            return Feature;
        })();

        Tile.Layer = (function() {

            function Layer(p) {
                this.features = [];
                this.keys = [];
                this.values = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Layer.prototype.version = 1;
            Layer.prototype.name = "";
            Layer.prototype.features = $util.emptyArray;
            Layer.prototype.keys = $util.emptyArray;
            Layer.prototype.values = $util.emptyArray;
            Layer.prototype.extent = 4096;

            Layer.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(10).string(m.name);
                if (m.features != null && m.features.length) {
                    for (var i = 0; i < m.features.length; ++i)
                        $root.vector_tile.Tile.Feature.encode(m.features[i], w.uint32(18).fork()).ldelim();
                }
                if (m.keys != null && m.keys.length) {
                    for (var i = 0; i < m.keys.length; ++i)
                        w.uint32(26).string(m.keys[i]);
                }
                if (m.values != null && m.values.length) {
                    for (var i = 0; i < m.values.length; ++i)
                        $root.vector_tile.Tile.Value.encode(m.values[i], w.uint32(34).fork()).ldelim();
                }
                if (m.extent != null && m.hasOwnProperty("extent"))
                    w.uint32(40).uint32(m.extent);
                w.uint32(120).uint32(m.version);
                return w;
            };

            Layer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Layer.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.vector_tile.Tile.Layer();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 15:
                        m.version = r.uint32();
                        break;
                    case 1:
                        m.name = r.string();
                        break;
                    case 2:
                        if (!(m.features && m.features.length))
                            m.features = [];
                        m.features.push($root.vector_tile.Tile.Feature.decode(r, r.uint32()));
                        break;
                    case 3:
                        if (!(m.keys && m.keys.length))
                            m.keys = [];
                        m.keys.push(r.string());
                        break;
                    case 4:
                        if (!(m.values && m.values.length))
                            m.values = [];
                        m.values.push($root.vector_tile.Tile.Value.decode(r, r.uint32()));
                        break;
                    case 5:
                        m.extent = r.uint32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("version"))
                    throw $util.ProtocolError("missing required 'version'", { instance: m });
                if (!m.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: m });
                return m;
            };

            Layer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            return Layer;
        })();

        return Tile;
    })();

    return vector_tile;
})();

export { $root as default };
