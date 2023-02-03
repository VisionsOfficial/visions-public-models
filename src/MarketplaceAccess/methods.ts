import { Schema } from "mongoose";
import {
	IMarketplaceAccess,
	IMarketplaceAccessMethods,
	IMarketplaceAccessModel,
} from "../types/marketplaceaccess";

export const methods = (
	schema: Schema<
		IMarketplaceAccess,
		IMarketplaceAccessModel,
		IMarketplaceAccessMethods
	>
) => {
	schema.methods.getAcceptedServicesWithIds = function (serviceIds: any[]) {
		return serviceIds.filter((id) => this.services.includes(id));
	};
};
