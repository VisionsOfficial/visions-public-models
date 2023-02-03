"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
const hooks = (schema) => {
    schema.pre("save", function (next) {
        const ma = this;
        try {
            if (ma.isModified("services")) {
                const stringedIds = [];
                const finalServices = [];
                for (const service of ma.services) {
                    const stringId = service.toString();
                    if (!stringedIds.includes(stringId)) {
                        stringedIds.push(stringId);
                        finalServices.push(service);
                    }
                }
                ma.services = finalServices;
            }
            next();
        }
        catch (err) {
            next();
        }
    });
};
exports.hooks = hooks;
