"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSharingContractSchema = void 0;
const mongoose_1 = require("mongoose");
exports.dataSharingContractSchema = new mongoose_1.Schema({
    serviceImport: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    serviceExport: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    constitutiveAgreement: {
        type: mongoose_1.Types.ObjectId,
        ref: "ConstitutiveAgreement",
    },
    accessionAgreement: { type: mongoose_1.Types.ObjectId, ref: "AccessionAgreement" },
    dataSharing: [
        {
            purpose: { type: mongoose_1.Types.ObjectId, ref: "Purpose" },
            datatypes: [{ type: mongoose_1.Types.ObjectId, ref: "DataType" }],
            processor: { type: mongoose_1.Types.ObjectId, ref: "Service" },
            conditions: [{ type: mongoose_1.Types.ObjectId, ref: "TermsOfUse" }],
        },
    ],
    dataProviderSignature: {
        signed: Boolean,
        timestamp: Date,
    },
    dataUserSignature: {
        signed: Boolean,
        timestamp: Date,
    },
    revoked: {
        type: Boolean,
        default: false,
    },
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {},
});
