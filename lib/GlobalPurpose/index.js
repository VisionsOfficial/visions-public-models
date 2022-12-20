"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalPurpose = void 0;
var mongoose_1 = require("mongoose");
var GlobalPurpose_model_1 = require("./GlobalPurpose.model");
exports.GlobalPurpose = (0, mongoose_1.model)("GlobalPurpose", GlobalPurpose_model_1.globalPurposeSchema);
