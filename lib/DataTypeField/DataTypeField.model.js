"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTypeFieldSchema = void 0;
const mongoose_1 = require("mongoose");
exports.dataTypeFieldSchema = new mongoose_1.Schema({
    datatype: {
        type: mongoose_1.Types.ObjectId,
        ref: "DataType",
    },
    service: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    parent: {
        type: mongoose_1.Types.ObjectId,
        ref: "DataTypeField",
    },
    fields: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "DataTypeField",
        },
    ],
    name: String,
    type: String,
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
});
