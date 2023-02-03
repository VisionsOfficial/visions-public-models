"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypeField = void 0;
const mongoose_1 = require("mongoose");
const DataTypeField_model_1 = require("./DataTypeField.model");
/**
 * Represents a field in a datatype details schema
 * @author Felix Bole
 * @todo Verify relevance now that third party services will handle interoperability
 * @deprecated Aim for deprecation
 */
exports.DataTypeField = (0, mongoose_1.model)("DataTypeField", DataTypeField_model_1.dataTypeFieldSchema);
