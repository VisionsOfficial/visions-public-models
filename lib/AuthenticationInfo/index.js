"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationInfo = void 0;
const mongoose_1 = require("mongoose");
const AuthenticationInfo_model_1 = require("./AuthenticationInfo.model");
/**
 * Was used for authentication over OAuth on early VisionsTrust popup generation tests
 * @author Yanick Kifack
 * @deprecated Should be removed from code
 * @todo Remove
 */
exports.AuthenticationInfo = (0, mongoose_1.model)("AuthenticationInfo", AuthenticationInfo_model_1.authenticationInfoSchema);
