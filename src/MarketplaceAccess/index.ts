import { model } from "mongoose";
import {
	IMarketplaceAccess,
	IMarketplaceAccessModel,
} from "../types/marketplaceaccess";
import { marketplaceAccessSchema } from "./MarketplaceAccess.model";
import { statics } from "./statics";
import { methods } from "./methods";
import { hooks } from "./hooks";

statics(marketplaceAccessSchema);
methods(marketplaceAccessSchema);
hooks(marketplaceAccessSchema);

/**
 * The list of services of a category that have agreed to the marketplace access
 *
 * @author Felix Bole <felix@visionspol.eu>
 */
export const MarketplaceAccess = model<
	IMarketplaceAccess,
	IMarketplaceAccessModel
>("MarketplaceAcccess", marketplaceAccessSchema);
