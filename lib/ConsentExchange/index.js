"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentExchange = void 0;
const mongoose_1 = require("mongoose");
const ConsentExchange_model_1 = require("./ConsentExchange.model");
/**
 * Created when a user gives his consent for a service to
 * use or import his data from another service to that service
 * @author Felix Bole <felix@visionspol.eu>
 * @author Yanick Kifack
 */
exports.ConsentExchange = (0, mongoose_1.model)("ConsentExchange", ConsentExchange_model_1.consentExchangeSchema);
