"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOApplication = void 0;
var mongoose_1 = require("mongoose");
var SSOApplication_model_1 = require("./SSOApplication.model");
exports.SSOApplication = (0, mongoose_1.model)("SSOApplication", SSOApplication_model_1.ssoApplicationSchema);
