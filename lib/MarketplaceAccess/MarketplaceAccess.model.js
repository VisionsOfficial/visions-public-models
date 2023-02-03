"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplaceAccessSchema = void 0;
const mongoose_1 = require("mongoose");
exports.marketplaceAccessSchema = new mongoose_1.Schema({
    services: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "Service",
            required: true,
        },
    ],
    servicesCategory: {
        type: mongoose_1.Types.ObjectId,
        ref: "ServicesCategory",
        required: true,
    },
    schema_version: { type: String, default: "1" },
}, {
    timestamps: true,
    query: {
        byService(serviceId) {
            return this.where({ services: serviceId });
        },
        /**
         * Query helper to search for a marketplace access
         * containing all of the services in the array
         */
        withMultipleServices(serviceIds) {
            if (serviceIds.length === 0)
                return [];
            const query = { $and: [] };
            serviceIds.forEach((serviceId) => {
                query.$and.push({ services: serviceId });
            });
            return this.where(query);
        },
    },
});
