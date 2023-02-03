import { Schema, Types } from "mongoose";
import { IDataset } from "../types/dataset";

export const datasetSchema = new Schema<IDataset>(
	{
		dataProvider: { type: Types.ObjectId, ref: "Service" },
		datatypes: [{ type: Types.ObjectId, ref: "DataType" }],
		description: String,
		termsOfUse: { type: Types.ObjectId, ref: "TermsOfUse" },
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
