import { Schema, Types } from "mongoose";
import { IPurpose, IPurposeMethods, IPurposeModel } from "../types/purpose";

export const purposeSchema = new Schema<
	IPurpose,
	IPurposeModel,
	IPurposeMethods
>(
	{
		name: String,
		description: String,
		privacyIcon: String,
		datatypes: [{ type: Types.ObjectId, ref: "DataType" }],
		consentData: [{ type: Types.ObjectId, ref: "DataType" }],
		importedDatatypes: [
			{
				datatype: {
					type: Types.ObjectId,
					ref: "DataType",
				},
				used: {
					type: Boolean,
				},
			},
		],
		service: {
			type: Types.ObjectId,
			ref: "Service",
		},
		category: {
			type: Types.ObjectId,
			ref: "Category",
		},
		globalPurpose: {
			type: Types.ObjectId,
			ref: "GlobalPurpose",
		},
		keywords: [String],
		archived: {
			type: Boolean,
			default: false,
		},
		visible: {
			type: Boolean,
			default: true,
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
