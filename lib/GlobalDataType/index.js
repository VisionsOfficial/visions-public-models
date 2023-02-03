"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDataType = void 0;
const mongoose_1 = require("mongoose");
const GlobalDataType_model_1 = require("./GlobalDataType.model");
/**
 * Represents a category a DataType can belong to
 * @author Yanick Kifack
 */
exports.GlobalDataType = (0, mongoose_1.model)("GlobalDataType", GlobalDataType_model_1.globalDataTypeSchema);
