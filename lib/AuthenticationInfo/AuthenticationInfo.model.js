"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationInfoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.authenticationInfoSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    email: String,
    requestToken: String,
    accessToken: String,
    identifier: {
        type: mongoose_1.Types.ObjectId,
        ref: "Identifier",
    },
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {},
});
