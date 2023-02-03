import { Model, Types } from "mongoose";
import { AllSchemas } from "src/types/models";

export interface IUser extends AllSchemas {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	password: string;
	identifiers: Types.ObjectId[];

	/**
	 * @deprecated Emails are found in identifiers
	 */
	emails?: string[];
}

export interface IUserMethods {}

export interface IUserModel extends Model<IUser, object, IUserMethods> {}
