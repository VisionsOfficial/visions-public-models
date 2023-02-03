"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.termsOfUseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.termsOfUseSchema = new mongoose_1.Schema({
    dataProvider: { type: mongoose_1.Types.ObjectId, ref: "Service" },
    datasets: [{ type: mongoose_1.Types.ObjectId, ref: "Dataset" }],
    name: String,
    restrictions: String,
    reporting: String,
    audit: String,
    dataSecurity: String,
    dataProtection: String,
    confidentialInformation: String,
    intellectualPropertyRights: String,
    otherTerms: String,
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {},
});
