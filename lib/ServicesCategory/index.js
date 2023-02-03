"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesCategory = void 0;
const mongoose_1 = require("mongoose");
const ServicesCategory_model_1 = require("./ServicesCategory.model");
exports.ServicesCategory = (0, mongoose_1.model)("ServicesCategory", ServicesCategory_model_1.servicesCategorySchema);
