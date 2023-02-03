"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testImportDataSchema = void 0;
const mongoose_1 = require("mongoose");
exports.testImportDataSchema = new mongoose_1.Schema({
    testService: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    flow: { type: Number, default: 1 },
    isInteropProtocol: { type: Boolean, default: false },
    consentExchange: { type: mongoose_1.Types.ObjectId, ref: "ConsentExchange" },
    data: {},
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {},
});
