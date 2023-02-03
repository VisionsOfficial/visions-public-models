import { model } from "mongoose";
import {
    IConfirmationAccount,
    IConfirmationAccountModel,
} from "../types/confirmationaccount";
import { confirmationAccountSchema } from "./ConfirmationAccount.model";

/**
 * Record that saves informations about email link sent to user
 * @author Yanick Kifack
 * @todo Verify relevance
 */
export const ConfirmationAccount = model<IConfirmationAccount, IConfirmationAccountModel>("ConfirmationAccount", confirmationAccountSchema);