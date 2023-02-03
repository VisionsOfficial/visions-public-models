"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasetSchema = void 0;
const mongoose_1 = require("mongoose");
exports.datasetSchema = new mongoose_1.Schema({
    dataProvider: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    datatypes: [{ type: mongoose_1.Types.ObjectId, ref: "DataType" }],
    description: String,
    termsOfUse: { type: mongoose_1.Types.ObjectId, ref: "TermsOfUse" },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
