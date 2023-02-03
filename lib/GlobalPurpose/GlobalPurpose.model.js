"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalPurposeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.globalPurposeSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    globalDatatypes: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "GlobalDataType",
        },
    ],
    servicesCategories: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "ServicesCategory",
        },
    ],
    subGlobalPurposes: {
        type: [String],
        default: [],
    },
    icon: {
        type: String,
        default: "",
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
