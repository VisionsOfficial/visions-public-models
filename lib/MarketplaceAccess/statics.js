"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statics = void 0;
const mongoose_1 = require("mongoose");
const statics = (schema) => {
    schema.statics.getOrInitialize = function (categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.findOne({ servicesCategory: categoryId });
            if (existing)
                return existing;
            const newMarketplaceAccess = new this({
                services: [],
                servicesCategory: categoryId,
            });
            yield newMarketplaceAccess.save();
            return newMarketplaceAccess;
        });
    };
    schema.statics.removeService = function (serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const marketplace = yield this.findOne({ services: serviceId });
            if (!marketplace)
                throw new Error("Could not remove service from non-existing marketplace access configuration");
            const index = marketplace.services.findIndex((id) => id.toString() === serviceId.toString());
            if (index === -1)
                return marketplace;
            marketplace.services.splice(index, 1);
            yield marketplace.save();
            return marketplace;
        });
    };
    schema.statics.addService = function (serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const marketplace = yield this.findOne();
            if (!marketplace)
                return;
            const index = marketplace.services.findIndex((id) => id.toString() === serviceId.toString());
            if (index === -1)
                return marketplace;
            const id = serviceId instanceof mongoose_1.Types.ObjectId
                ? serviceId
                : new mongoose_1.Types.ObjectId(serviceId);
            marketplace.services.push(id);
            yield marketplace.save();
        });
    };
};
exports.statics = statics;
