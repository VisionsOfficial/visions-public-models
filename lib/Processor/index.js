"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processor = void 0;
const mongoose_1 = require("mongoose");
const Processor_model_1 = require("./Processor.model");
/**
 * @author Yanick Kifack
 * @todo Verify relevance and what its for -> Documentation
 */
exports.Processor = (0, mongoose_1.model)("Processor", Processor_model_1.processorSchema);
