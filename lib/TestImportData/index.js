"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestImportData = void 0;
const mongoose_1 = require("mongoose");
const TestImportData_model_1 = require("./TestImportData.model");
/**
 * Data received when doing tests
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.TestImportData = (0, mongoose_1.model)("TestImportData", TestImportData_model_1.testImportDataSchema);
