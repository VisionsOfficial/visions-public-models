"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purpose = void 0;
var mongoose_1 = require("mongoose");
var Purpose_model_1 = require("./Purpose.model");
exports.Purpose = (0, mongoose_1.model)("Purpose", Purpose_model_1.purposeSchema);
