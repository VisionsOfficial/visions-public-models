import { Schema, Types } from "mongoose";
import {
	IMarketplaceAccess,
	IMarketplaceAccessMethods,
	IMarketplaceAccessModel,
} from "../types/marketplaceaccess";

export const marketplaceAccessSchema = new Schema<
	IMarketplaceAccess,
	IMarketplaceAccessModel,
	IMarketplaceAccessMethods
>(
	{
		services: [
			{
				type: Types.ObjectId,
				ref: "Service",
				required: true,
			},
		],
		servicesCategory: {
			type: Types.ObjectId,
			ref: "ServicesCategory",
			required: true,
		},
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {
			byService(serviceId: string | Types.ObjectId) {
				return this.where({ services: serviceId });
			},

			/**
			 * Query helper to search for a marketplace access
			 * containing all of the services in the array
			 */
			withMultipleServices(serviceIds: string[] | Types.ObjectId[]) {
				if (serviceIds.length === 0) return [];
				const query: any = { $and: [] };
				serviceIds.forEach((serviceId) => {
					query.$and.push({ services: serviceId });
				});
				return this.where(query);
			},
		},
	}
);
