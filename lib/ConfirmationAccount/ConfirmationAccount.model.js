"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmationAccountSchema = void 0;
const mongoose_1 = require("mongoose");
exports.confirmationAccountSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
    },
    identifiers: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "Identifier",
        },
    ],
    token: {
        type: String,
    },
    expires: {
        type: Number,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {},
});
