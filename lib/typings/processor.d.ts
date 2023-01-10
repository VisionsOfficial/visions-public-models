import { Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface IProcessor extends AllSchemas {
	service?: Types.ObjectId;
	subcontractorService?: Types.ObjectId;
	data?: [
		{
			purpose?: Types.ObjectId;
			datatypes?: Types.ObjectId[];
		}
	];
	user: {
		name?: string;
		address?: string;
		email?: string;
		phone?: string;
	};
	description?: string;
	registerToken?: string;
	isTokenUsed: boolean;
}
