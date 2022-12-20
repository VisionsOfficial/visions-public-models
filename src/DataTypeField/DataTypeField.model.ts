import { Schema, Types } from "mongoose";
import { IDataTypeField } from "./datatypefield";

export const dataTypeFieldSchema = new Schema<IDataTypeField>(
	{
		datatype: {
			type: Types.ObjectId,
			ref: "DataType",
		},
		service: {
			type: Types.ObjectId,
			ref: "Service",
		},
		parent: {
			type: Types.ObjectId,
			ref: "DataTypeField",
		},
		fields: [
			{
				type: Types.ObjectId,
				ref: "DataTypeField",
			},
		],
		name: String,
		type: String,
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
	}
);
