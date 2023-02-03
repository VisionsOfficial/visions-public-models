"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSharingContract = void 0;
const mongoose_1 = require("mongoose");
const DataSharingContract_model_1 = require("./DataSharingContract.model");
const methods_1 = require("./methods");
(0, methods_1.methods)(DataSharingContract_model_1.dataSharingContractSchema);
/**
 * Data sharing contract
 * @author Felix Bole <felix@visionspol.eu>
 * @experimental Used only experimentally for now
 * @todo Verify relevance and precise function
 */
exports.DataSharingContract = (0, mongoose_1.model)("DataSharingContract", DataSharingContract_model_1.dataSharingContractSchema);
