import { model, Types } from "mongoose";
import {
	IMarketplaceAccess,
	IMarketplaceAccessModel,
} from "../typings/marketplaceaccess";
import { marketplaceAccessSchema } from "./MarketplaceAccess.model";

export const MarketplaceAccess = model<
	IMarketplaceAccess,
	IMarketplaceAccessModel
>("MarketplaceAcccess", marketplaceAccessSchema);
