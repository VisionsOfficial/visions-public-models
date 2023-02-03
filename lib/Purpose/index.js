"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purpose = void 0;
const mongoose_1 = require("mongoose");
const Purpose_model_1 = require("./Purpose.model");
/**
 * What a service uses requested data for
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.Purpose = (0, mongoose_1.model)("Purpose", Purpose_model_1.purposeSchema);
