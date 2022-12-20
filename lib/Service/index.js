"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var mongoose_1 = require("mongoose");
var Service_model_1 = require("./Service.model");
exports.Service = (0, mongoose_1.model)("Service", Service_model_1.serviceSchema);
