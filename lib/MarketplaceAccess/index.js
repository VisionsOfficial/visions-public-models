"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceAccess = void 0;
const mongoose_1 = require("mongoose");
const MarketplaceAccess_model_1 = require("./MarketplaceAccess.model");
const statics_1 = require("./statics");
const methods_1 = require("./methods");
const hooks_1 = require("./hooks");
(0, statics_1.statics)(MarketplaceAccess_model_1.marketplaceAccessSchema);
(0, methods_1.methods)(MarketplaceAccess_model_1.marketplaceAccessSchema);
(0, hooks_1.hooks)(MarketplaceAccess_model_1.marketplaceAccessSchema);
/**
 * The list of services of a category that have agreed to the marketplace access
 *
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.MarketplaceAccess = (0, mongoose_1.model)("MarketplaceAcccess", MarketplaceAccess_model_1.marketplaceAccessSchema);
