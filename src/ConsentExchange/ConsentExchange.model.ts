import { Schema, Types } from "mongoose";
import { IConsentExchange } from "../typings/consentexchange";

/**
 * Created when a user gives his consent for a service to
 * use or import his data from another service to that service
 */
export const consentExchangeSchema = new Schema<IConsentExchange>(
	{
		dataUseExchange: {
			type: Types.ObjectId,
			ref: "DataUseExchange",
		},
		userExportId: {
			type: Types.ObjectId,
			ref: "Identifier",
		},
		userImportId: {
			type: Types.ObjectId,
			ref: "Identifier",
		},
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		data: [
			{
				datatype: {
					type: Types.ObjectId,
					ref: "DataType",
				},
				authorized: {
					type: Boolean,
				},
			},
		],
		timestamp: {
			type: Date,
			default: Date.now,
		},
		consented: Boolean,
		token: String,
		emailToken: {
			token: {
				type: String,
			},
			expires: {
				type: Number,
			},
		},
		verified: {
			type: Number,
			default: 0,
		},
		status: {
			followCode: Number,
			text: String,
		},
		flow: Number,
		parent: {
			type: Types.ObjectId,
			ref: "ConsentExchange",
		},
		child: {
			type: Types.ObjectId,
			ref: "ConsentExchange",
		},

		isTest: {
			type: Boolean,
			default: false,
		},
		interoperability: {
			active: { type: Boolean, default: false },
			interopService: { type: Types.ObjectId, ref: "Service" },
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
