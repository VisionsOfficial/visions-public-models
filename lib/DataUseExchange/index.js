"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataUseExchange = void 0;
const mongoose_1 = require("mongoose");
const DataUseExchange_model_1 = require("./DataUseExchange.model");
const statics_1 = require("./statics");
(0, statics_1.statics)(DataUseExchange_model_1.dataUseExchangeSchema);
/**
 * Represents a data exchange configuration between a data consumer
 * and one or more data providers
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.DataUseExchange = (0, mongoose_1.model)("DataUseExchange", DataUseExchange_model_1.dataUseExchangeSchema);
