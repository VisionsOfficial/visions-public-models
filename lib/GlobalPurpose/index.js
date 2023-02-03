"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalPurpose = void 0;
const mongoose_1 = require("mongoose");
const GlobalPurpose_model_1 = require("./GlobalPurpose.model");
/**
 * Represents a category a Purpose can belong to
 * @author Yanick Kifack
 */
exports.GlobalPurpose = (0, mongoose_1.model)("GlobalPurpose", GlobalPurpose_model_1.globalPurposeSchema);
