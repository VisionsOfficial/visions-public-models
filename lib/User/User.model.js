"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
/**
 * User registered in Visions, acting as the user's central account
 */
exports.userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    password: {
        type: String,
        required: true,
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
