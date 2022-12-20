import { Schema, Types } from "mongoose";
import { IDatasetRequest } from "./datasetrequest";

export const datasetRequestSchema = new Schema<IDatasetRequest>(
	{
		dataProvider: { type: Types.ObjectId, ref: "Service" },
		dataUser: { type: Types.ObjectId, ref: "Service" },
		dataset: { type: Types.ObjectId, ref: "Dataset" },
		purpose: { type: Types.ObjectId, ref: "Purpose" },
		authorized: { type: Boolean, default: false },
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
