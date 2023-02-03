"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
const mongoose_1 = require("mongoose");
const Identifier_model_1 = require("./Identifier.model");
const statics_1 = require("./statics");
(0, statics_1.statics)(Identifier_model_1.identifierSchema);
/**
 * Reference to a user's identity in one service
 * Serves as an ID card to know if a user has some information
 * in a service that a service registered for him
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole
 */
exports.Identifier = (0, mongoose_1.model)("Identifier", Identifier_model_1.identifierSchema);
