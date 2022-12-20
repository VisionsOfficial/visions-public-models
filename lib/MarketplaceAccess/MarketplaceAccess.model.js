"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplaceAccessSchema = void 0;
var mongoose_1 = require("mongoose");
/**
 * The list of services of a category that have agreed to the marketplace access
 */
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
        byService: function (serviceId) {
            return this.where({ services: serviceId });
        },
        /**
         * Query helper to search for a marketplace access
         * containing all of the services in the array
         */
        withMultipleServices: function (serviceIds) {
            if (serviceIds.length === 0)
                return [];
            var query = { $and: [] };
            serviceIds.forEach(function (serviceId) {
                query.$and.push({ services: serviceId });
            });
            return this.where(query);
        },
    },
});
