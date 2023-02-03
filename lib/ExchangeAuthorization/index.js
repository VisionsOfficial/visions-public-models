"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeAuthorization = void 0;
const mongoose_1 = require("mongoose");
const ExchangeAuthorization_model_1 = require("./ExchangeAuthorization.model");
const statics_1 = require("./statics");
const methods_1 = require("./methods");
(0, methods_1.methods)(ExchangeAuthorization_model_1.exchangeAuthorizationSchema);
(0, statics_1.statics)(ExchangeAuthorization_model_1.exchangeAuthorizationSchema);
/**
 * The General Exchange Authorization between 2 services
 *
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.ExchangeAuthorization = (0, mongoose_1.model)("ExchangeAuthorization", ExchangeAuthorization_model_1.exchangeAuthorizationSchema);
