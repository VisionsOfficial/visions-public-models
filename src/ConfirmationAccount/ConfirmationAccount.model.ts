import { Schema, Types } from "mongoose";
import { IConfirmationAccount } from "../types/confirmationaccount";

export const confirmationAccountSchema = new Schema<IConfirmationAccount>(
	{
		email: {
			type: String,
		},
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		identifiers: [
			{
				type: Types.ObjectId,
				ref: "Identifier",
			},
		],
		token: {
			type: String,
		},
		expires: {
			type: Number,
		},
		confirmed: {
			type: Boolean,
			default: false,
		},
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {},
	}
);
