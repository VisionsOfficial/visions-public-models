"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
var methods = function (schema) {
    /**
     * Returns the list of services in the agreement
     */
    schema.methods.getAcceptedServicesWithIds = function (serviceIds) {
        var _this = this;
        return serviceIds.filter(function (id) { return _this.services.includes(id); });
    };
};
exports.methods = methods;
