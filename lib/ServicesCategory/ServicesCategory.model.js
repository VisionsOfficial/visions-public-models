"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesCategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.servicesCategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    services: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "Service",
        },
    ],
    icon: {
        type: String,
        default: "",
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
