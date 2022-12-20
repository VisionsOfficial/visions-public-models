"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeAuthorizationSchema = void 0;
var mongoose_1 = require("mongoose");
/**
 * The General Exchange Authorization between 2 services
 */
exports.exchangeAuthorizationSchema = new mongoose_1.Schema({
    requester: {
        service: {
            type: mongoose_1.Types.ObjectId,
            ref: "Service",
        },
        authorization: {
            type: Boolean,
            default: false,
        },
    },
    receiver: {
        service: {
            type: mongoose_1.Types.ObjectId,
            ref: "Service",
        },
        authorization: {
            type: Boolean,
            default: false,
        },
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
