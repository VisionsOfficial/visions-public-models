import { Schema, Types } from "mongoose";
import { IAuthenticationInfo } from "../types/authenticationinfo";

export const authenticationInfoSchema = new Schema<IAuthenticationInfo>(
	{
		service: {
			type: Types.ObjectId,
			ref: "Service",
		},
		email: String,
		requestToken: String,

		accessToken: String,
		identifier: {
			type: Types.ObjectId,
			ref: "Identifier",
		},
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {},
	}
);
