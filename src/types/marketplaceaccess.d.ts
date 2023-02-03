import { HydratedDocument, Model, QueryWithHelpers, Types } from "mongoose";
import { AllSchemas } from "./models";

export interface IMarketplaceAccess extends AllSchemas {
	/**
	 * List of services involved in the marketplace group
	 */
	services: Types.ObjectId[];

	/**
	 * The category involved with this marketplace "group"
	 */
	servicesCategory?: Types.ObjectId[];
}

export interface IMarketplaceAccessMethods {
	/**
	 * @todo Set return type when service model is registered
	 */
	getAcceptedServicesWithIds(
		serviceIds: string[] | Types.ObjectId[]
	): string[] | Types.ObjectId[];
}

export interface IMarketplaceAccessQueryHelpers {
	byService(
		serviceId: Types.ObjectId | string
	): QueryWithHelpers<
		HydratedDocument<IMarketplaceAccess>,
		IMarketplaceAccessQueryHelpers
	>;

	withMultipleServices(
		services: Types.ObjectId[] | string[]
	): QueryWithHelpers<
		HydratedDocument<IMarketplaceAccess>,
		IMarketplaceAccessQueryHelpers
	>;
}

export interface IMarketplaceAccessModel
	extends Model<
		IMarketplaceAccess,
		IMarketplaceAccessQueryHelpers,
		IMarketplaceAccessMethods
	> {
	/**
	 * Retrieves an existing marketplaceAccess for this category or creates a new one
	 */
	getOrInitialize(
		categoryId: Types.ObjectId
	): Promise<HydratedDocument<IMarketplaceAccess>>;

	/**
	 * Removes a service from the configuration in which it is found
	 */
	removeService(
		serviceId: string | Types.ObjectId
	): Promise<HydratedDocument<IMarketplaceAccess>>;

	addService(
		serviceId: string | Types.ObjectId
	): Promise<HydratedDocument<IMarketplaceAccess>>;
}
