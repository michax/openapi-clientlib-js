// Size summary
// JSON with numeric fields: 1086 bytes
// JSON: 1556
// Protobuf base64: 800 bytes
// Probobuf ByteArray: 600 bytes

export const schema = `syntax = "proto3"; 
import "google/protobuf/timestamp.proto"; 

option saxobank_root = "PriceResponse";

message PriceResponse {
   message Greeks {
      double delta = 1;
      double gamma = 2;
      double mid_vol = 3;
      double phi = 4;
      double rho = 5;
      double theta = 6;
      double vega = 7;
   }

   message HistoricalChanges {
      double percent_change1_month = 1;
      double percent_change1_year = 2;
      double percent_change2_months = 3;
      double percent_change2_years = 4;
      double percent_change3_months = 5;
      double percent_change5_years = 6;
      double percent_change6_months = 7;
      double percent_change_weekly = 8;
   }

   message InstrumentPriceDetails {
      double accrued_interest = 1;
      double ask_swap = 2;
      double bid_swap = 3;
      double cfd_borrowing_cost = 4;
      double cfd_hard_to_finance_rate = 5;
      bool cfd_price_adjustment = 6;
      bool dma = 7;
      double est_price_buy = 8;
      double est_price_sell = 9;
      google.protobuf.Timestamp expiry_date = 10;
      bool is_market_open = 11;
      double lower_barrier = 12;
      double mid_forward_price = 13;
      double mid_spot_price = 14;
      double mid_yield = 15;
      google.protobuf.Timestamp notice_date = 16;
      double open_interest = 17;
      double paid_cfd_interest = 18;
      double received_cfd_interest = 19;
      bool short_trade_disabled = 20;
      double spot_ask = 21;
      double spot_bid = 22;
      google.protobuf.Timestamp spot_date = 23;
      double strike_price = 24;
      double upper_barrier = 25;
      google.protobuf.Timestamp value_date = 26;
   }

   message MarginImpact {
      double impact_buy = 1;
      double impact_sell = 2;
      double initial_margin = 3;
      double maintenance_margin = 4;
   }

   message MarketDepth {
      repeated double ask = 1;
      repeated double ask_orders = 2;
      repeated double ask_size = 3;
      repeated double bid = 4;
      repeated double bid_orders = 5;
      repeated double bid_size = 6;
      int32 no_of_bids = 7;
      int32 no_of_offers = 8;
      bool using_orders = 9;
   }

   message PriceInfo {
      double high = 1;
      double low = 2;
      double net_change = 3;
      double percent_change = 4;
   }

   message TradableQuote {
      int32 amount = 1;
      double ask = 2;
      double bid = 3;
      int32 delayed_by_minutes = 4;
      string error_code = 5;
      double mid = 6;
      string price_type_ask = 7;
      string price_type_bid = 8;
      string quote_id = 9;
      string r_f_q_state = 10;
   }

   string asset_type = 1;
   Greeks greeks = 2;
   HistoricalChanges historical_changes = 3;
   InstrumentPriceDetails instrument_price_details = 4;
   google.protobuf.Timestamp last_updated = 5;
   MarginImpact margin_impact = 6;
   MarketDepth market_depth = 7;
   PriceInfo price_info = 8;
   string price_source = 9;
   TradableQuote quote = 10;
   int32 uic = 11;
}`;

export const fields = {
    "asset_type": {
        "type": "string",
        "id": 1
    },
    "greeks": {
        "type": "Greeks",
        "id": 2
    },
    "historical_changes": {
        "type": "HistoricalChanges",
        "id": 3
    },
    "instrument_price_details": {
        "type": "InstrumentPriceDetails",
        "id": 4
    },
    "last_updated": {
        "type": "google.protobuf.Timestamp",
        "id": 5
    },
    "margin_impact": {
        "type": "MarginImpact",
        "id": 6
    },
    "market_depth": {
        "type": "MarketDepth",
        "id": 7
    },
    "price_info": {
        "type": "PriceInfo",
        "id": 8
    },
    "price_source": {
        "type": "string",
        "id": 9
    },
    "quote": {
        "type": "TradableQuote",
        "id": 10
    },
    "uic": {
        "type": "int32",
        "id": 11
    }
}

// 1588 bytes raw JSON.
// 1118 bytes JSON with schema.
export const objectMessage = {
    "asset_type": "FxOption",
    "greeks": {
        "delta": 10.323,
        "gamma": 11.32132,
        "mid_vol": 1000,
        "phi": 0.00123,
        "rho": 0.321,
        "theta": 0.32,
        "vega": 0.11
    },
    "historical_changes": {
        "percent_change1_month": 1,
        "percent_change1_year": 2022,
        "percent_change2_months": 3,
        "percent_change2_years": 2012,
        "percent_change3_months": 5,
        "percent_change5_years": 2019,
        "percent_change6_months": 7,
        "percent_change_weekly": 8
    },
    "instrument_price_details": {
        "accrued_interest": 1,
        "ask_swap": 2,
        "bid_swap": 3,
        "cfd_borrowing_cost": 4,
        "cfd_hard_to_finance_rate": 5,
        "cfd_price_adjustment": true,
        "dma": true,
        "est_price_buy": 8,
        "est_price_sell": 9,
        "expiry_date": {
            "nanos": 321303210
        },
        "is_market_open": true,
        "lower_barrier": 1.3213,
        "mid_forward_price": 1.1123,
        "mid_spot_price": 1.3231,
        "mid_yield": 1.2323,
        "notice_date": {
            "seconds": "123132131"
        },
        "open_interest": 0.123,
        "paid_cfd_interest": 0.321,
        "received_cfd_interest": 0.11112,
        "short_trade_disabled": true,
        "spot_ask": 1.11,
        "spot_bid": 1.32,
        "spot_date": {
            "nanos": 111203010
        },
        "strike_price": 1.3212,
        "upper_barrier": 1.3331,
        "value_date": {
            "seconds": "1312902"
        }
    },
    "last_updated": {
        "nanos": 19383821
    },
    "margin_impact": {
        "impact_buy": 1.32,
        "impact_sell": 2.13,
        "initial_margin": 1.11,
        "maintenance_margin": 1.321
    },
    "market_depth": {
        "ask": [
            1.321,
            1.11
        ],
        "ask_orders": [
            3.12,
            3.11
        ],
        "ask_size": [
            1000,
            2000
        ],
        "bid": [
            1.421,
            1.321
        ],
        "bid_orders": [
            1.521,
            1.451
        ],
        "bid_size": [
            2000,
            1200
        ],
        "no_of_bids": 32,
        "no_of_offers": 72,
        "using_orders": true
    },
    "price_info": {
        "high": 1.23,
        "low": 1.12,
        "net_change": 11,
        "percent_change": 0.12
    },
    "price_source": "NASDAQ",
    "quote": {
        "amount": 1230,
        "ask": 1.23,
        "bid": 1.11,
        "delayed_by_minutes": 23,
        "error_code": "1235",
        "mid": 1.15,
        "price_type_ask": "asktype",
        "price_type_bid": "bidtype",
        "quote_id": "12313cdadad",
        "r_f_q_state": "idle"
    },
    "uic": 12332
};

export const schemaOption = `syntax = "proto3";
    option saxobank_root = "InstrumentPriceDetails";
    
    message Greeks {
      double delta = 1;
      double gamma = 2;
      double mid_vol = 3;
      double phi = 4;
      double rho = 5;
      double theta = 6;
      double vega = 7;
   }

   message HistoricalChanges {
      double percent_change1_month = 1;
      double percent_change1_year = 2;
      double percent_change2_months = 3;
      double percent_change2_years = 4;
      double percent_change3_months = 5;
      double percent_change5_years = 6;
      double percent_change6_months = 7;
      double percent_change_weekly = 8;
   }

   message InstrumentPriceDetails {
      double accrued_interest = 1;
      double ask_swap = 2;
      double bid_swap = 3;
      double cfd_borrowing_cost = 4;
      double cfd_hard_to_finance_rate = 5;
      bool cfd_price_adjustment = 6;
      bool dma = 7;
      double est_price_buy = 8;
      double est_price_sell = 9;
      google.protobuf.Timestamp expiry_date = 10;
      bool is_market_open = 11;
      double lower_barrier = 12;
      double mid_forward_price = 13;
      double mid_spot_price = 14;
      double mid_yield = 15;
      google.protobuf.Timestamp notice_date = 16;
      double open_interest = 17;
      double paid_cfd_interest = 18;
      double received_cfd_interest = 19;
      bool short_trade_disabled = 20;
      double spot_ask = 21;
      double spot_bid = 22;
      google.protobuf.Timestamp spot_date = 23;
      double strike_price = 24;
      double upper_barrier = 25;
      google.protobuf.Timestamp value_date = 26;
      HistoricalChanges historical_change = 27;
      Greeks greeks = 28;
   }
`;

// 864 bytes
export const encodedMessage = 'CghGeE9wdGlvbhI/CUw3iUFgpSRAEfgZFw6EpCZAGQAAAAAAQI9AIdeGinH+JlQ/KSUGgZVDi9Q/MXsUrkfhetQ/OSlcj8L1KLw/GkgJAAAAAAAA8D8RAAAAAACYn0AZAAAAAAAACEAhAAAAAABwn0ApAAAAAAAAFEAxAAAAAACMn0A5AAAAAAAAHEBBAAAAAAAAIEAi0QEJAAAAAAAA8D8RAAAAAAAAAEAZAAAAAAAACEAhAAAAAAAAEEApAAAAAAAAFEAwATgBQQAAAAAAACBASQAAAAAAACJAUgYQquWamQFYAWHcRgN4CyT1P2nrc7UV+8vxP3HPZtXnaiv1P3nWxW00gLfzP4IBBQjjsds6iQGwcmiR7Xy/P5EBJQaBlUOL1D+ZARh47j1ccrw/oAEBqQHD9Shcj8LxP7EBH4XrUbge9T+6AQUQwqWDNcEBa5p3nKIj9T/JAfjCZKpgVPU/0gEECIaRUCoFEI2MnwkyJAkfhetRuB71PxEK16NwPQoBQBnD9Shcj8LxPyGJQWDl0CL1PzpyChCJQWDl0CL1P8P1KFyPwvE/EhD2KFyPwvUIQOF6FK5H4QhAGhAAAAAAAECPQAAAAAAAQJ9AIhAj2/l+arz2P4lBYOXQIvU/KhC8dJMYBFb4P57vp8ZLN/c/MhAAAAAAAECfQAAAAAAAwJJAOCBASEgBQiQJrkfhehSu8z8R7FG4HoXr8T8ZAAAAAAAAJkAhuB6F61G4vj9KBk5BU0RBUVJLCM4JEa5H4XoUrvM/GcP1KFyPwvE/IBcqBDEyMzUxZmZmZmZm8j86B2Fza3R5cGVCB2JpZHR5cGVKCzEyMzEzY2RhZGFkUgRpZGxlWKxg';

export function getJSONBytes() {
    return JSON.stringify(objectMessage).length;
}

export function getJSONSchemaBytes() {
    let i = 0;
    const jsonWithSchema = JSON.stringify(objectMessage).replace(/"[a-zA-Z _]+":/g, (v, index, a) => `"${i++}":`);
    return jsonWithSchema.length;
}
