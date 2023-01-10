import { Schema, Types } from "mongoose";
import { IServicesCategory } from "../typings/servicescategory";

export const servicesCategorySchema = new Schema<IServicesCategory>(
	{
		name: {
			type: String,
		},
		services: [
			{
				type: Types.ObjectId,
				ref: "Service",
			},
		],
		icon: {
			type: String,
			default: "",
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
