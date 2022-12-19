"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var mongoose_1 = require("mongoose");
/**
 * Copyright 2022 Visions
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
    schema_version: { type: String, required: true, default: "1" },
}, { timestamps: true });
