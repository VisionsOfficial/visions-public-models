"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = void 0;
const mongoose_1 = require("mongoose");
const Dataset_model_1 = require("./Dataset.model");
/**
 * Defines the data that a Data provider makes available to the network
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.Dataset = (0, mongoose_1.model)("Dataset", Dataset_model_1.datasetSchema);
