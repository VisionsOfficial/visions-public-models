import { Types, Schema } from "mongoose";
import { IUser } from "./user";

/**
 * Copyright 2022 Visions
 * User registered in Visions, acting as the user's central account
 */
export const userSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			unique: true,
		},
		firstName: String,
		lastName: String,
		phoneNumber: String,
		password: {
			type: String,
			required: true,
		},
		schema_version: { type: String, required: true, default: "1" },
	},
	{ timestamps: true }
);
