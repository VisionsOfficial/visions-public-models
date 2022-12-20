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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statics = void 0;
var mongoose_1 = require("mongoose");
var statics = function (schema) {
    schema.statics.getOrInitialize = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, newMarketplaceAccess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne({ servicesCategory: categoryId })];
                    case 1:
                        existing = _a.sent();
                        if (existing)
                            return [2 /*return*/, existing];
                        newMarketplaceAccess = new this({
                            services: [],
                            servicesCategory: categoryId,
                        });
                        return [4 /*yield*/, newMarketplaceAccess.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newMarketplaceAccess];
                }
            });
        });
    };
    schema.statics.removeService = function (serviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var marketplace, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne({ services: serviceId })];
                    case 1:
                        marketplace = _a.sent();
                        if (!marketplace)
                            throw new Error("Could not remove service from non-existing marketplace access configuration");
                        index = marketplace.services.findIndex(function (id) { return id.toString() === serviceId.toString(); });
                        if (index === -1)
                            return [2 /*return*/, marketplace];
                        marketplace.services.splice(index, 1);
                        return [4 /*yield*/, marketplace.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, marketplace];
                }
            });
        });
    };
    schema.statics.addService = function (serviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var marketplace, index, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne()];
                    case 1:
                        marketplace = _a.sent();
                        if (!marketplace)
                            return [2 /*return*/];
                        index = marketplace.services.findIndex(function (id) { return id.toString() === serviceId.toString(); });
                        if (index === -1)
                            return [2 /*return*/, marketplace];
                        id = serviceId instanceof mongoose_1.Types.ObjectId
                            ? serviceId
                            : new mongoose_1.Types.ObjectId(serviceId);
                        marketplace.services.push(id);
                        return [4 /*yield*/, marketplace.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
};
exports.statics = statics;
