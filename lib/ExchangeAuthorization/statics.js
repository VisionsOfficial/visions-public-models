"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var DEFAULT_QUERY_OPTIONS = {
    populate: false,
    lean: true,
};
var statics = function (schema) {
    schema.statics.getAllFromService = function (serviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var reqs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find({
                            "requester.service": serviceId,
                        }).lean()];
                    case 1:
                        reqs = _a.sent();
                        return [2 /*return*/, reqs];
                }
            });
        });
    };
    schema.statics.getAllByService = function (serviceId, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var finalOptions, query, reqs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalOptions = __assign(__assign({}, DEFAULT_QUERY_OPTIONS), options);
                        query = {
                            $or: [
                                { "requester.service": serviceId },
                                { "receiver.service": serviceId },
                            ],
                        };
                        if (!finalOptions.populate) return [3 /*break*/, 5];
                        if (!finalOptions.lean) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.find(query)
                                .lean()
                                .populate({ path: "requester", populate: "service" })
                                .populate({ path: "receiver", populate: "service" })];
                    case 1:
                        reqs = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.find(query)
                            .populate({ path: "requester", populate: "service" })
                            .populate({ path: "receiver", populate: "service" })];
                    case 3:
                        reqs = _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.find(query)];
                    case 6:
                        reqs = _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/, reqs];
                }
            });
        });
    };
    schema.statics.getAuthorization = function (serviceId, otherServiceId, isForServiceId) {
        if (isForServiceId === void 0) { isForServiceId = false; }
        return __awaiter(this, void 0, void 0, function () {
            var exchangeAuth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne({
                            $or: [
                                {
                                    $and: [
                                        { "requester.service": serviceId },
                                        { "receiver.service": otherServiceId },
                                    ],
                                },
                                {
                                    $and: [
                                        { "requester.service": otherServiceId },
                                        { "receiver.service": serviceId },
                                    ],
                                },
                            ],
                        })];
                    case 1:
                        exchangeAuth = _a.sent();
                        if (!exchangeAuth)
                            return [2 /*return*/, {
                                    authorization: false,
                                    status: "notfound",
                                    exchangeAuthorization: exchangeAuth,
                                }];
                        return [2 /*return*/, {
                                authorization: exchangeAuth.isAuthorized(),
                                status: isForServiceId
                                    ? exchangeAuth.getStatusForService(serviceId)
                                    : exchangeAuth.getStatus(),
                                exchangeAuthorization: exchangeAuth,
                            }];
                }
            });
        });
    };
    schema.statics.createRequest = function (requesterId, receiverId) {
        return __awaiter(this, void 0, void 0, function () {
            var exchangeAuthorization;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        exchangeAuthorization = new this({
                            requester: {
                                service: requesterId,
                                authorization: true,
                            },
                            receiver: {
                                service: receiverId,
                            },
                        });
                        return [4 /*yield*/, exchangeAuthorization.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, exchangeAuthorization];
                }
            });
        });
    };
    schema.statics.acceptRequest = function (requesterId, receiverId) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne({
                            "requester.service": requesterId,
                            "receiver.service": receiverId,
                        })];
                    case 1:
                        req = _a.sent();
                        if (!req) {
                            console.log("No pending requests");
                            return [2 /*return*/, null];
                        }
                        req.receiver.authorization = true;
                        return [4 /*yield*/, req.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, req];
                }
            });
        });
    };
    schema.statics.revokeAuthorization = function (revokerServiceId, otherServiceId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var exchangeAuth, otherServiceObjectKey, otherServiceCurrentAuth;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.findOne({
                            $or: [
                                {
                                    $and: [
                                        { "requester.service": revokerServiceId },
                                        { "receiver.service": otherServiceId },
                                    ],
                                },
                                {
                                    $and: [
                                        { "requester.service": otherServiceId },
                                        { "receiver.service": revokerServiceId },
                                    ],
                                },
                            ],
                        })];
                    case 1:
                        exchangeAuth = _c.sent();
                        if (!exchangeAuth) {
                            throw new Error("Exchange Authorization does not exist");
                        }
                        otherServiceObjectKey = null;
                        if (((_a = exchangeAuth.requester.service) === null || _a === void 0 ? void 0 : _a.toString()) === otherServiceId)
                            otherServiceObjectKey = "requester";
                        if (((_b = exchangeAuth.receiver.service) === null || _b === void 0 ? void 0 : _b.toString()) === otherServiceId)
                            otherServiceObjectKey = "receiver";
                        if (!otherServiceObjectKey)
                            throw new Error("Other service not found");
                        otherServiceCurrentAuth = otherServiceObjectKey === "requester"
                            ? exchangeAuth.requester.authorization
                            : exchangeAuth.receiver.authorization;
                        if (!otherServiceCurrentAuth) return [3 /*break*/, 3];
                        exchangeAuth.requester.service = otherServiceId;
                        exchangeAuth.requester.authorization = otherServiceCurrentAuth;
                        exchangeAuth.receiver.service = revokerServiceId;
                        exchangeAuth.receiver.authorization = false;
                        return [4 /*yield*/, exchangeAuth.save()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, exchangeAuth];
                    case 3: return [4 /*yield*/, this.findByIdAndRemove(exchangeAuth._id)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
};
exports.statics = statics;
