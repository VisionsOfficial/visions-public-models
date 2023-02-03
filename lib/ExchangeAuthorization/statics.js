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
const DEFAULT_QUERY_OPTIONS = {
    populate: false,
    lean: true,
};
const statics = (schema) => {
    schema.statics.getAllFromService = function (serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqs = yield this.find({
                "requester.service": serviceId,
            }).lean();
            return reqs;
        });
    };
    schema.statics.getAllByService = function (serviceId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const finalOptions = Object.assign(Object.assign({}, DEFAULT_QUERY_OPTIONS), options);
            const query = {
                $or: [
                    { "requester.service": serviceId },
                    { "receiver.service": serviceId },
                ],
            };
            let reqs;
            if (finalOptions.populate) {
                if (finalOptions.lean) {
                    reqs = yield this.find(query)
                        .lean()
                        .populate({ path: "requester", populate: "service" })
                        .populate({ path: "receiver", populate: "service" });
                }
                else {
                    reqs = yield this.find(query)
                        .populate({ path: "requester", populate: "service" })
                        .populate({ path: "receiver", populate: "service" });
                }
            }
            else {
                reqs = yield this.find(query);
            }
            return reqs;
        });
    };
    schema.statics.getAuthorization = function (serviceId, otherServiceId, isForServiceId = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const exchangeAuth = yield this.findOne({
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
            });
            if (!exchangeAuth)
                return {
                    authorization: false,
                    status: "notfound",
                    exchangeAuthorization: exchangeAuth,
                };
            return {
                authorization: exchangeAuth.isAuthorized(),
                status: isForServiceId
                    ? exchangeAuth.getStatusForService(serviceId)
                    : exchangeAuth.getStatus(),
                exchangeAuthorization: exchangeAuth,
            };
        });
    };
    schema.statics.createRequest = function (requesterId, receiverId) {
        return __awaiter(this, void 0, void 0, function* () {
            const exchangeAuthorization = new this({
                requester: {
                    service: requesterId,
                    authorization: true,
                },
                receiver: {
                    service: receiverId,
                },
            });
            yield exchangeAuthorization.save();
            return exchangeAuthorization;
        });
    };
    schema.statics.acceptRequest = function (requesterId, receiverId) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = yield this.findOne({
                "requester.service": requesterId,
                "receiver.service": receiverId,
            });
            if (!req) {
                console.log("No pending requests");
                return null;
            }
            req.receiver.authorization = true;
            yield req.save();
            return req;
        });
    };
    schema.statics.revokeAuthorization = function (revokerServiceId, otherServiceId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const exchangeAuth = yield this.findOne({
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
            });
            if (!exchangeAuth) {
                throw new Error("Exchange Authorization does not exist");
            }
            let otherServiceObjectKey = null;
            if (((_a = exchangeAuth.requester.service) === null || _a === void 0 ? void 0 : _a.toString()) === otherServiceId)
                otherServiceObjectKey = "requester";
            if (((_b = exchangeAuth.receiver.service) === null || _b === void 0 ? void 0 : _b.toString()) === otherServiceId)
                otherServiceObjectKey = "receiver";
            if (!otherServiceObjectKey)
                throw new Error("Other service not found");
            const otherServiceCurrentAuth = otherServiceObjectKey === "requester"
                ? exchangeAuth.requester.authorization
                : exchangeAuth.receiver.authorization;
            // If the other service has a true authorization, invert requester and receiver
            // Otherwise simply delete the document
            if (otherServiceCurrentAuth) {
                exchangeAuth.requester.service = otherServiceId;
                exchangeAuth.requester.authorization = otherServiceCurrentAuth;
                exchangeAuth.receiver.service = revokerServiceId;
                exchangeAuth.receiver.authorization = false;
                yield exchangeAuth.save();
                return exchangeAuth;
            }
            else {
                yield this.findByIdAndRemove(exchangeAuth._id);
                return true;
            }
        });
    };
};
exports.statics = statics;
