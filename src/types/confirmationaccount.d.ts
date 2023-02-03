import { Model, Types } from "mongoose";
import { AllSchemas } from "src/types/models";

export interface IConfirmationAccount extends AllSchemas {
    email: string;
    user?: Types.ObjectId;
    identifiers: Types.ObjectId[];

    /**
     * Token used to confirm the account
     */
    token: string;

    /**
     * Token expiration date
     */
    expires: number;

    /**
     * Has user confirmed the email
     */
    confirmed: boolean;
}

export interface IConfirmationAccountMethods {}

export interface IConfirmationAccountModel extends Model<IConfirmationAccount, object, IConfirmationAccountMethods> {}

