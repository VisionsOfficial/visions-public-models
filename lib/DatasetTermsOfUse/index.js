"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetTermsOfUse = void 0;
var mongoose_1 = require("mongoose");
var DatasetTermsOfUse_model_1 = require("./DatasetTermsOfUse.model");
exports.DatasetTermsOfUse = (0, mongoose_1.model)("DatasetTermsOfUse", DatasetTermsOfUse_model_1.datasetTermsOfUseSchema);
