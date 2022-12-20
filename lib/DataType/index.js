"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
var mongoose_1 = require("mongoose");
var DataType_model_1 = require("./DataType.model");
exports.DataType = (0, mongoose_1.model)("DataType", DataType_model_1.dataTypeSchema);
