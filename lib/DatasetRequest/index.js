"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetRequest = void 0;
var mongoose_1 = require("mongoose");
var DatasetRequest_model_1 = require("./DatasetRequest.model");
exports.DatasetRequest = (0, mongoose_1.model)("DatasetTermsOfUse", DatasetRequest_model_1.datasetRequestSchema);
