"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const methods = (schema) => {
    schema.methods.getAcceptedServicesWithIds = function (serviceIds) {
        return serviceIds.filter((id) => this.services.includes(id));
    };
};
exports.methods = methods;
