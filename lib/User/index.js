"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const User_model_1 = require("./User.model");
/**
 * User registered in Visions, holding all identifiers related to him
 * Also serves as the users account for VisionsGalaxy
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
exports.User = (0, mongoose_1.model)("User", User_model_1.userSchema);
