"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
var mongoose_1 = require("mongoose");
var Identifier_model_1 = require("./Identifier.model");
exports.Identifier = (0, mongoose_1.model)("Identifier", Identifier_model_1.identifierSchema);
