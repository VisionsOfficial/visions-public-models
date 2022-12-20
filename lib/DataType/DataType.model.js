"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTypeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.dataTypeSchema = new mongoose_1.Schema({
    name: String,
    nameInService: String,
    dataTypeField: {
        type: mongoose_1.Types.ObjectId,
        ref: "DataTypeField",
    },
    description: String,
    category: String,
    provenance: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    time: {
        type: Date,
        default: Date.now,
    },
    globalDatatype: {
        type: mongoose_1.Types.ObjectId,
        ref: "GlobalDataType",
    },
    conservations: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "DataTypeDetails",
        },
    ],
    conservationType: String,
    conservationUnit: String,
    conservationLength: String,
    conservationDescription: String,
    frequency: {
        unit: String,
        value: String,
        repeats: {
            type: Boolean,
            default: false,
        },
    },
    privacyIcon: String,
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
