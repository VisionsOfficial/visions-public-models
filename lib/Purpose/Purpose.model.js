"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purposeSchema = void 0;
var mongoose_1 = require("mongoose");
/**
 * What a service uses requested data for
 */
exports.purposeSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    privacyIcon: String,
    datatypes: [{ type: mongoose_1.Types.ObjectId, ref: "DataType" }],
    consentData: [{ type: mongoose_1.Types.ObjectId, ref: "DataType" }],
    importedDatatypes: [
        {
            datatype: {
                type: mongoose_1.Types.ObjectId,
                ref: "DataType",
            },
            used: {
                type: Boolean,
            },
        },
    ],
    service: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    category: {
        type: mongoose_1.Types.ObjectId,
        ref: "Category",
    },
    globalPurpose: {
        type: mongoose_1.Types.ObjectId,
        ref: "GlobalPurpose",
    },
    keywords: [String],
    archived: {
        type: Boolean,
        default: false,
    },
    visible: {
        type: Boolean,
        default: true,
    },
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
