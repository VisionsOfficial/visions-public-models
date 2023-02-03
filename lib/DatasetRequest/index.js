"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetRequest = void 0;
const mongoose_1 = require("mongoose");
const DatasetRequest_model_1 = require("./DatasetRequest.model");
/**
 * Represents a request made on a specific Dataset
 * @author Felix Bole <felix@visionspol.eu>
 * @unused
 * @todo Verify relevance
 */
exports.DatasetRequest = (0, mongoose_1.model)("DatasetRequest", DatasetRequest_model_1.datasetRequestSchema);
