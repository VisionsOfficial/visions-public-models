"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceAccess = void 0;
var mongoose_1 = require("mongoose");
var MarketplaceAccess_model_1 = require("./MarketplaceAccess.model");
exports.MarketplaceAccess = (0, mongoose_1.model)("MarketplaceAcccess", MarketplaceAccess_model_1.marketplaceAccessSchema);
