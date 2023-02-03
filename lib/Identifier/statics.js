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
const statics = (schema) => {
    schema.statics.createForAPIService = function (serviceId, user, userKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const identifier = new this({
                service: serviceId,
                email: user.email,
                userKey: userKey,
                userServiceId: null,
                emailVerified: true,
                user: user._id,
            });
            user.identifiers.push(identifier);
            yield Promise.all([identifier.save(), user.save()]);
            return identifier;
        });
    };
};
exports.statics = statics;
