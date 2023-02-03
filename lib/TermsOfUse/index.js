"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfUse = void 0;
const mongoose_1 = require("mongoose");
const TermsOfUse_model_1 = require("./TermsOfUse.model");
/**
 * Defines the Terms of Use for one or more dataset
 * @author Felix Bole <felix@visionspol.eu>
 * @experimental Discussion and implentation paused
 * @todo Resume discussion
 */
exports.TermsOfUse = (0, mongoose_1.model)("TermsOfUse", TermsOfUse_model_1.termsOfUseSchema);
