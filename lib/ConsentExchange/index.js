"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentExchange = void 0;
var mongoose_1 = require("mongoose");
var ConsentExchange_model_1 = require("./ConsentExchange.model");
exports.ConsentExchange = (0, mongoose_1.model)("ConsentExchange", ConsentExchange_model_1.consentExchangeSchema);
