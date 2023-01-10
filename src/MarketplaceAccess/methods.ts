import { Schema, Types } from "mongoose";
import { IMarketplaceAccess } from "../typings/marketplaceaccess";

export const methods = (schema: Schema<IMarketplaceAccess>) => {
	/**
	 * Returns the list of services in the agreement
	 */
	schema.methods.getAcceptedServicesWithIds = function (serviceIds: any[]) {
		return serviceIds.filter((id) => this.services.includes(id));
	};
};
