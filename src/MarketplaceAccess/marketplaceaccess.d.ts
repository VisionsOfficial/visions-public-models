import { Model, Types } from "mongoose";
import { AllSchemas } from "src/models";

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
	getAcceptedServicesWithIds(serviceIds: string[] | Types.ObjectId[]): any[];
}

export interface IMarketplaceAccessModel
	extends Model<IMarketplaceAccess, {}, IMarketplaceAccessMethods> {
	/**
	 * Retrieves an existing marketplaceAccess for this category or creates a new one
	 */
	getOrInitialize(categoryId: Types.ObjectId): Promise<IMarketplaceAccessModel>;

	/**
	 *
	 * Removes a service from the configuration in which it is found
	 */
	removeService(
		serviceId: string | Types.ObjectId
	): Promise<IMarketplaceAccessModel>;

	addService(
		serviceId: string | Types.ObjectId
	): Promise<IMarketplaceAccessModel>;
}
