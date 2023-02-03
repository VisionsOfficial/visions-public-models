"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationAccount = void 0;
const mongoose_1 = require("mongoose");
const ConfirmationAccount_model_1 = require("./ConfirmationAccount.model");
/**
 * Record that saves informations about email link sent to user
 * @author Yanick Kifack
 * @todo Verify relevance
 */
exports.ConfirmationAccount = (0, mongoose_1.model)("ConfirmationAccount", ConfirmationAccount_model_1.confirmationAccountSchema);
