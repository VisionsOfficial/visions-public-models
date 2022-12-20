"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypeField = void 0;
var mongoose_1 = require("mongoose");
var DataTypeField_model_1 = require("./DataTypeField.model");
exports.DataTypeField = (0, mongoose_1.model)("DataTypeField", DataTypeField_model_1.dataTypeFieldSchema);
