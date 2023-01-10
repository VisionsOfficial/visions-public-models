import { Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface IDataset extends AllSchemas {
	dataProvider?: Types.ObjectId;
	datatypes?: Types.ObjectId[];
	description: string;
	termsOfUse?: Types.ObjectId;
}
