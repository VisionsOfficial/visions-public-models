"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var User_model_1 = require("./User.model");
var statics_1 = require("./statics");
(0, statics_1.statics)(User_model_1.userSchema);
exports.User = mongoose_1.default.model("User", User_model_1.userSchema);
