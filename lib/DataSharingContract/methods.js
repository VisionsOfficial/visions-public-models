"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const methods = (schema) => {
    schema.methods.isValid = function () {
        return (this.dataProviderSignature.signed &&
            this.dataUserSignature.signed &&
            !this.revoked);
    };
};
exports.methods = methods;
