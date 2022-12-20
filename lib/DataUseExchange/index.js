"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataUseExchange = void 0;
var mongoose_1 = require("mongoose");
var DataUseExchange_model_1 = require("./DataUseExchange.model");
exports.DataUseExchange = (0, mongoose_1.model)("DataUseExchange", DataUseExchange_model_1.dataUseExchangeSchema);
