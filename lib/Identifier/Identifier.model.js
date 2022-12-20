"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifierSchema = void 0;
var mongoose_1 = require("mongoose");
/**
 * Reference to a user's identity in one service
 * Serves as an ID card to know if a user has some information
 * in a service that a service registered for him
 */
exports.identifierSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: "User" },
    service: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    origin: String,
    userServiceId: String,
    email: String,
    userKey: {
        type: String,
        require: true,
    },
    emailVerified: Boolean,
    userProcessorIds: [
        {
            processor: {
                type: mongoose_1.Types.ObjectId,
                ref: "Service",
            },
            id: {
                type: mongoose_1.Types.ObjectId,
                ref: "Identifier",
            },
        },
    ],
    endpoints: {
        dataImport: [
            {
                serviceId: {
                    type: mongoose_1.Types.ObjectId,
                    ref: "Service",
                },
                url: {
                    type: String,
                },
            },
        ],
        dataExport: [
            {
                serviceId: {
                    type: mongoose_1.Types.ObjectId,
                    ref: "Service",
                },
                url: {
                    type: String,
                    default: null,
                },
            },
        ],
        consentImport: [
            {
                serviceId: {
                    type: mongoose_1.Types.ObjectId,
                    ref: "Service",
                },
                url: {
                    type: String,
                    default: null,
                },
            },
        ],
        consentExport: [
            {
                serviceId: {
                    type: mongoose_1.Types.ObjectId,
                    ref: "Service",
                },
                url: {
                    type: String,
                    default: null,
                },
            },
        ],
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
