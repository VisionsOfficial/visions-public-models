"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
var hooks = function (schema) {
    schema.pre("save", function (next) {
        var ma = this;
        try {
            if (ma.isModified("services")) {
                var stringedIds = [];
                var finalServices = [];
                for (var _i = 0, _a = ma.services; _i < _a.length; _i++) {
                    var service = _a[_i];
                    var stringId = service.toString();
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
