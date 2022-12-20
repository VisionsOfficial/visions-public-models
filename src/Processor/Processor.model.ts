import { Schema, Types } from "mongoose";
import { IProcessor } from "./processor";

export const processorSchema = new Schema<IProcessor>({
	service: {
		type: Types.ObjectId,
		ref: "Service",
	},
	subcontractorService: {
		type: Types.ObjectId,
		ref: "Service",
	},
	data: [
		{
			purpose: { type: Types.ObjectId, ref: "Purpose" },
			datatypes: [{ type: Types.ObjectId, ref: "DataType" }],
		},
	],
	user: {
		name: String,
		address: String,
		email: String,
		phone: String,
	},
	description: String,
	registerToken: String,
	isTokenUsed: {
		type: Boolean,
		default: false,
	},
	schema_version: { type: String, default: "1" },
});
