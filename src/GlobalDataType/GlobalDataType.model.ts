import { Schema } from "mongoose";
import { IGlobalDataType } from "../types/globaldatatype";

export const globalDataTypeSchema = new Schema<IGlobalDataType>(
	{
		name: {
			type: String,
		},
		icon: {
			type: String,
			default: "",
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
