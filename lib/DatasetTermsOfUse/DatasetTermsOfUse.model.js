"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasetTermsOfUseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.datasetTermsOfUseSchema = new mongoose_1.Schema({
    dataProvider: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    datasetDescriptions: [
        {
            dataset: [
                {
                    datatype: { type: mongoose_1.Types.ObjectId, ref: "DataType" },
                    location: { type: mongoose_1.Types.ObjectId, ref: "Service" },
                    distribution: String,
                },
            ],
            termsAndConditions: String,
        },
    ],
    restrictions: String,
    reporting: String,
    audit: String,
    dataSecurity: String,
    dataProtection: String,
    confidentialInformation: String,
    intellectualPropertyRights: String,
    otherTerms: String,
    schema_version: { type: String, default: "1" },
}, { timestamps: true });
