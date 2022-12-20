import { Schema, Types } from "mongoose";
import { IDataType } from "./datatype";

export const dataTypeSchema = new Schema<IDataType>(
	{
		name: String,
		nameInService: String,
		dataTypeField: {
			type: Types.ObjectId,
			ref: "DataTypeField",
		},
		description: String,
		category: String,
		provenance: {
			type: Types.ObjectId,
			ref: "Service",
		},
		time: {
			type: Date,
			default: Date.now,
		},
		globalDatatype: {
			type: Types.ObjectId,
			ref: "GlobalDataType",
		},
		conservations: [
			{
				type: Types.ObjectId,
				ref: "DataTypeDetails",
			},
		],
		conservationType: String,
		conservationUnit: String,
		conservationLength: String,
		conservationDescription: String,
		frequency: {
			unit: String,
			value: String,
			repeats: {
				type: Boolean,
				default: false,
			},
		},
		privacyIcon: String,
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
