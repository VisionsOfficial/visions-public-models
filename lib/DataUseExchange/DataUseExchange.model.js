"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUseExchangeSchema = void 0;
const mongoose_1 = require("mongoose");
/**
 * Represents a data exchange configuration between a data consumer
 * and one or more data providers
 */
exports.dataUseExchangeSchema = new mongoose_1.Schema({
    purpose: {
        type: mongoose_1.Types.ObjectId,
        ref: "Purpose",
    },
    data: [
        {
            datatype: {
                type: mongoose_1.Types.ObjectId,
                ref: "DataType",
            },
            authorized: {
                type: Boolean,
                default: false,
            },
            serviceExport: {
                type: mongoose_1.Types.ObjectId,
                ref: "Service",
            },
        },
    ],
    description: String,
    serviceImport: {
        type: mongoose_1.Types.ObjectId,
        ref: "Service",
    },
    privacyIcon: String,
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {
        byService(serviceId) {
            const query = {
                $or: [
                    {
                        serviceImport: serviceId,
                    },
                    {
                        "data.serviceExport": serviceId,
                    },
                ],
            };
            return this.where(query);
        },
        byServiceAuthorized(serviceId) {
            const query = {
                $or: [
                    {
                        $and: [{ serviceImport: serviceId }, { "data.authorized": true }],
                    },
                    {
                        data: {
                            $elemMatch: {
                                serviceExport: serviceId,
                                authorized: true,
                            },
                        },
                    },
                ],
            };
            return this.where(query);
        },
        fromTwoServices(serviceAId, serviceBId) {
            const query = {
                $or: [
                    {
                        $and: [
                            {
                                serviceImport: serviceAId,
                            },
                            {
                                "data.serviceExport": serviceBId,
                            },
                        ],
                    },
                    {
                        $and: [
                            {
                                serviceImport: serviceBId,
                            },
                            {
                                "data.serviceExport": serviceAId,
                            },
                        ],
                    },
                ],
            };
            return this.where(query);
        },
        fromTwoServicesKnowingFlow(serviceImportId, serviceExportId) {
            const query = {
                $and: [
                    {
                        serviceImport: serviceImportId,
                    },
                    {
                        "data.serviceExport": serviceExportId,
                    },
                ],
            };
            return this.where(query);
        },
        fromProvider(dataProviderId) {
            return this.where({ "data.serviceExport": dataProviderId });
        },
        fromConsumer(dataConsumerId) {
            return this.where({ serviceImport: dataConsumerId });
        },
    },
});
