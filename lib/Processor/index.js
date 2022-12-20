"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processor = void 0;
var mongoose_1 = require("mongoose");
var Processor_model_1 = require("./Processor.model");
exports.Processor = (0, mongoose_1.model)("Processor", Processor_model_1.processorSchema);
