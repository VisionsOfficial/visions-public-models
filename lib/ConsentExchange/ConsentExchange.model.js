"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consentExchangeSchema = void 0;
var mongoose_1 = require("mongoose");
/**
 * Created when a user gives his consent for a service to
 * use or import his data from another service to that service
 */
exports.consentExchangeSchema = new mongoose_1.Schema({
    dataUseExchange: {
        type: mongoose_1.Types.ObjectId,
        ref: "DataUseExchange",
    },
    userExportId: {
        type: mongoose_1.Types.ObjectId,
        ref: "Identifier",
    },
    userImportId: {
        type: mongoose_1.Types.ObjectId,
        ref: "Identifier",
    },
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
    },
    data: [
        {
            datatype: {
                type: mongoose_1.Types.ObjectId,
                ref: "DataType",
            },
            authorized: {
                type: Boolean,
            },
        },
    ],
    timestamp: {
        type: Date,
        default: Date.now,
    },
    consented: Boolean,
    token: String,
    emailToken: {
        token: {
            type: String,
        },
        expires: {
            type: Number,
        },
    },
    verified: {
        type: Number,
        default: 0,
    },
    status: {
        followCode: Number,
        text: String,
    },
    flow: Number,
    parent: {
        type: mongoose_1.Types.ObjectId,
        ref: "ConsentExchange",
    },
    child: {
        type: mongoose_1.Types.ObjectId,
        ref: "ConsentExchange",
    },
    isTest: {
        type: Boolean,
        default: false,
    },
    interoperability: {
        active: { type: Boolean, default: false },
        interopService: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
