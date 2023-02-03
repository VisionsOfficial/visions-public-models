"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetTermsOfUse = void 0;
const mongoose_1 = require("mongoose");
const DatasetTermsOfUse_model_1 = require("./DatasetTermsOfUse.model");
/**
 * Defines the data that the data provider makes available through the network
 * as well as setting out the terms and conditions for the use of such data.
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.DatasetTermsOfUse = (0, mongoose_1.model)("DatasetTermsOfUse", DatasetTermsOfUse_model_1.datasetTermsOfUseSchema);
