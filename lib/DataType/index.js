"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
const mongoose_1 = require("mongoose");
const DataType_model_1 = require("./DataType.model");
/**
 * A Public way of representing a service's type of data
 * that it makes available to all other services
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole
 */
exports.DataType = (0, mongoose_1.model)("DataType", DataType_model_1.dataTypeSchema);
