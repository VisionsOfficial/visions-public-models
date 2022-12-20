"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDataType = void 0;
var mongoose_1 = require("mongoose");
var GlobalDataType_model_1 = require("./GlobalDataType.model");
exports.GlobalDataType = (0, mongoose_1.model)("GlobalDataType", GlobalDataType_model_1.globalDataTypeSchema);
