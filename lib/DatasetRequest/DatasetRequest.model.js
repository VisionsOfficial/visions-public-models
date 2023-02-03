"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasetRequestSchema = void 0;
const mongoose_1 = require("mongoose");
exports.datasetRequestSchema = new mongoose_1.Schema({
    dataProvider: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    dataUser: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    dataset: { type: mongoose_1.Types.ObjectId, ref: "Dataset" },
    purpose: { type: mongoose_1.Types.ObjectId, ref: "Purpose" },
    authorized: { type: Boolean, default: false },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
