// Size summary
// JSON with numeric fields: 1086 bytes
// JSON: 1556
// Protobuf base64: 800 bytes
// Probobuf ByteArray: 600 bytes

export const schema = `syntax = "proto3"; 
import "google/protobuf/timestamp.proto"; 
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
    'assetType': {
        'type': 'string',
        'id': 1,
    },
    'greeks': {
        'type': 'Greeks',
        'id': 2,
    },
    'historicalChanges': {
        'type': 'HistoricalChanges',
        'id': 3,
    },
    'instrumentPriceDetails': {
        'type': 'InstrumentPriceDetails',
        'id': 4,
    },
    'lastUpdated': {
        'type': 'google.protobuf.Timestamp',
        'id': 5,
    },
    'marginImpact': {
        'type': 'MarginImpact',
        'id': 6,
    },
    'marketDepth': {
        'type': 'MarketDepth',
        'id': 7,
    },
    'priceInfo': {
        'type': 'PriceInfo',
        'id': 8,
    },
    'priceSource': {
        'type': 'string',
        'id': 9,
    },
    'quote': {
        'type': 'TradableQuote',
        'id': 10,
    },
    'uic': {
        'type': 'int32',
        'id': 11,
    },
};

// 1588 bytes raw JSON.
// 1118 bytes JSON with schema.
export const objectMessage = {
    'assetType': 'FxOption',
    'greeks': {
        'delta': 10.323,
        'gamma': 11.32132,
        'midVol': 1000,
        'phi': 0.00123,
        'rho': 0.321,
        'theta': 0.32,
        'vega': 0.11,
    },
    'historicalChanges': {
        'percentChange1Month': 1,
        'percentChange1Year': 2022,
        'percentChange2Months': 3,
        'percentChange2Years': 2012,
        'percentChange3Months': 5,
        'percentChange5Years': 2019,
        'percentChange6Months': 7,
        'percentChangeWeekly': 8,
    },
    'instrumentPriceDetails': {
        'accruedInterest': 1,
        'askSwap': 2,
        'bidSwap': 3,
        'cfdBorrowingCost': 4,
        'cfdHardToFinanceRate': 5,
        'cfdPriceAdjustment': true,
        'dma': true,
        'estPriceBuy': 8,
        'estPriceSell': 9,
        'expiryDate': {
            'nanos': 321303210,
        },
        'isMarketOpen': true,
        'lowerBarrier': 1.3213,
        'midForwardPrice': 1.1123,
        'midSpotPrice': 1.3231,
        'midYield': 1.2323,
        'noticeDate': {
            'seconds': '123132131',
        },
        'openInterest': 0.123,
        'paidCfdInterest': 0.321,
        'receivedCfdInterest': 0.11112,
        'shortTradeDisabled': true,
        'spotAsk': 1.11,
        'spotBid': 1.32,
        'spotDate': {
            'nanos': 111203010,
        },
        'strikePrice': 1.3212,
        'upperBarrier': 1.3331,
        'valueDate': {
            'seconds': '1312902',
        },
    },
    'lastUpdated': {
        'nanos': 19383821,
    },
    'marginImpact': {
        'impactBuy': 1.32,
        'impactSell': 2.13,
        'initialMargin': 1.11,
        'maintenanceMargin': 1.321,
    },
    'marketDepth': {
        'ask': [1.321, 1.11],
        'askOrders': [3.12, 3.11],
        'askSize': [1000, 2000],
        'bid': [1.421, 1.321],
        'bidOrders': [1.521, 1.451],
        'bidSize': [2000, 1200],
        'noOfBids': 32,
        'noOfOffers': 72,
        'usingOrders': true,
    },
    'priceInfo': {
        'high': 1.23,
        'low': 1.12,
        'netChange': 11,
        'percentChange': 0.12,
    },
    'priceSource': 'NASDAQ',
    'quote': {
        'amount': 1230,
        'ask': 1.23,
        'bid': 1.11,
        'delayedByMinutes': 23,
        'errorCode': '1235',
        'mid': 1.15,
        'priceTypeAsk': 'asktype',
        'priceTypeBid': 'bidtype',
        'quoteId': '12313cdadad',
        'rFQState': 'idle',
    },
    'uic': 12332,
};

// 864 bytes
export const encodedMessage = 'CghGeE9wdGlvbhI/CUw3iUFgpSRAEfgZFw6EpCZAGQAAAAAAQI9AIdeGinH+JlQ/KSUGgZVDi9Q/MXsUrkfhetQ/OSlcj8L1KLw/GkgJAAAAAAAA8D8RAAAAAACYn0AZAAAAAAAACEAhAAAAAABwn0ApAAAAAAAAFEAxAAAAAACMn0A5AAAAAAAAHEBBAAAAAAAAIEAi0QEJAAAAAAAA8D8RAAAAAAAAAEAZAAAAAAAACEAhAAAAAAAAEEApAAAAAAAAFEAwATgBQQAAAAAAACBASQAAAAAAACJAUgYQquWamQFYAWHcRgN4CyT1P2nrc7UV+8vxP3HPZtXnaiv1P3nWxW00gLfzP4IBBQjjsds6iQGwcmiR7Xy/P5EBJQaBlUOL1D+ZARh47j1ccrw/oAEBqQHD9Shcj8LxP7EBH4XrUbge9T+6AQUQwqWDNcEBa5p3nKIj9T/JAfjCZKpgVPU/0gEECIaRUCoFEI2MnwkyJAkfhetRuB71PxEK16NwPQoBQBnD9Shcj8LxPyGJQWDl0CL1PzpyChCJQWDl0CL1P8P1KFyPwvE/EhD2KFyPwvUIQOF6FK5H4QhAGhAAAAAAAECPQAAAAAAAQJ9AIhAj2/l+arz2P4lBYOXQIvU/KhC8dJMYBFb4P57vp8ZLN/c/MhAAAAAAAECfQAAAAAAAwJJAOCBASEgBQiQJrkfhehSu8z8R7FG4HoXr8T8ZAAAAAAAAJkAhuB6F61G4vj9KBk5BU0RBUVJLCM4JEa5H4XoUrvM/GcP1KFyPwvE/IBcqBDEyMzUxZmZmZmZm8j86B2Fza3R5cGVCB2JpZHR5cGVKCzEyMzEzY2RhZGFkUgRpZGxlWKxg';

export function getJSONBytes() {
    return JSON.stringify(objectMessage).length;
}

export function getJSONSchemaBytes() {
    let i = 0;
    const jsonWithSchema = JSON.stringify(objectMessage).replace(/"[a-zA-Z]+":/g, (v, index, a) => `"${i++}":`);
    return jsonWithSchema.length;
}
