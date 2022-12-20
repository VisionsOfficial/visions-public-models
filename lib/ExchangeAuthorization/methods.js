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
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
var DEFAULT_STATUS_OPTIONS = {
    populated: false,
};
var methods = function (schema) {
    schema.methods.isAuthorized = function () {
        return this.requester.authorization && this.receiver.authorization;
    };
    schema.methods.getStatus = function () {
        var _a = this, requester = _a.requester, receiver = _a.receiver;
        if (requester.authorization && receiver.authorization) {
            return "authorized";
        }
        else if (requester.authorization && !receiver.authorization) {
            return "pending";
        }
        return "unauthorized";
    };
    schema.methods.getStatusForService = function (serviceId, options) {
        if (options === void 0) { options = {}; }
        var finalOptions = __assign(__assign({}, DEFAULT_STATUS_OPTIONS), options);
        var _a = this, requester = _a.requester, receiver = _a.receiver;
        var serviceError = false;
        if (finalOptions.populated) {
            if (serviceId != requester.service._id.toString() &&
                serviceId != receiver.service._id.toString())
                serviceError = true;
        }
        else {
            if (serviceId != requester.service.toString() &&
                serviceId != receiver.service.toString())
                serviceError = true;
        }
        if (serviceError)
            throw new Error("Service is not part of this exchange authorization");
        if (requester.authorization && receiver.authorization) {
            return "authorized";
        }
        else if (requester.authorization && !receiver.authorization) {
            if (serviceId == requester.service.toString()) {
                return "pending";
            }
            else if (serviceId == receiver.service.toString()) {
                return "pendingIncoming";
            }
        }
        else {
            return "unauthorized";
        }
        return "unauthorized";
    };
};
exports.methods = methods;
