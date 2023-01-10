import { Schema, Types } from "mongoose";
import {
	IMarketplaceAccess,
	IMarketplaceAccessMethods,
	IMarketplaceAccessModel,
} from "../typings/marketplaceaccess";

export const statics = (
	schema: Schema<
		IMarketplaceAccess,
		IMarketplaceAccessModel,
		IMarketplaceAccessMethods
	>
) => {
	schema.statics.getOrInitialize = async function (
		categoryId: string | Types.ObjectId
	) {
		const existing = await this.findOne({ servicesCategory: categoryId });

		if (existing) return existing;

		const newMarketplaceAccess = new this({
			services: [],
			servicesCategory: categoryId,
		});
		await newMarketplaceAccess.save();
		return newMarketplaceAccess;
	};

	schema.statics.removeService = async function (
		serviceId: string | Types.ObjectId
	) {
		const marketplace = await this.findOne({ services: serviceId });

		if (!marketplace)
			throw new Error(
				"Could not remove service from non-existing marketplace access configuration"
			);

		const index = marketplace.services.findIndex(
			(id) => id.toString() === serviceId.toString()
		);
		if (index === -1) return marketplace;
		marketplace.services.splice(index, 1);

		await marketplace.save();
		return marketplace;
	};

	schema.statics.addService = async function (
		serviceId: string | Types.ObjectId
	) {
		const marketplace = await this.findOne();
		if (!marketplace) return;

		const index = marketplace.services.findIndex(
			(id) => id.toString() === serviceId.toString()
		);
		if (index === -1) return marketplace;

		const id =
			serviceId instanceof Types.ObjectId
				? serviceId
				: new Types.ObjectId(serviceId);

		marketplace.services.push(id as Types.ObjectId);

		await marketplace.save();
	};
};
