import { Schema, Types } from "mongoose";
import { IGlobalPurpose } from "../typings/globalpurpose";

export const globalPurposeSchema = new Schema<IGlobalPurpose>(
	{
		name: {
			type: String,
		},
		globalDatatypes: [
			{
				type: Types.ObjectId,
				ref: "GlobalDataType",
			},
		],
		servicesCategories: [
			{
				type: Types.ObjectId,
				ref: "ServicesCategory",
			},
		],
		subGlobalPurposes: {
			type: [String],
			default: [],
		},
		icon: {
			type: String,
			default: "",
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
