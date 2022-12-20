"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = void 0;
var mongoose_1 = require("mongoose");
var Dataset_model_1 = require("./Dataset.model");
exports.Dataset = (0, mongoose_1.model)("Dataset", Dataset_model_1.datasetSchema);
