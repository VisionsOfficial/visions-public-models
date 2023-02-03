import { Types } from "mongoose";
import { AllSchemas } from "./models";

export interface IServicesCategory extends AllSchemas {
	name: string;
	services?: Types.ObjectId[];
	icon?: string;
}
