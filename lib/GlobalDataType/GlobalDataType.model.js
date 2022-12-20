"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalDataTypeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.globalDataTypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    icon: {
        type: String,
        default: "",
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
