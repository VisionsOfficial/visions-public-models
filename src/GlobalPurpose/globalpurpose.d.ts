import { Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface IGlobalPurpose extends AllSchemas {
	name: string;
	globalDatatypes?: Types.ObjectId[];
	servicesCategories?: Types.ObjectId[];
	subGlobalPurposes: string[];
	icon?: string;
}
