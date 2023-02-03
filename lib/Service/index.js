"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const Service_model_1 = require("./Service.model");
const virtuals_1 = require("./virtuals");
(0, virtuals_1.virtuals)(Service_model_1.serviceSchema);
/**
 * Represents a data provider or data user
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.Service = (0, mongoose_1.model)("Service", Service_model_1.serviceSchema);
