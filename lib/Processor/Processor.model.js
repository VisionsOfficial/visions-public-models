"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.processorSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    subcontractorService: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    data: [
        {
            purpose: { type: mongoose_1.Types.ObjectId, ref: "Purpose" },
            datatypes: [{ type: mongoose_1.Types.ObjectId, ref: "DataType" }],
        },
    ],
    user: {
        name: String,
        address: String,
        email: String,
        phone: String,
    },
    description: String,
    registerToken: String,
    isTokenUsed: {
        type: Boolean,
        default: false,
    },
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
});
