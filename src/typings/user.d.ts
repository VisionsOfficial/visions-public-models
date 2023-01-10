import { AllSchemas } from "src/models";

export interface IUser extends AllSchemas {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	password: string;
}
