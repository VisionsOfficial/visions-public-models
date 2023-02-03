import { Schema, Types } from "mongoose";
import {
	IExchangeAuthorization,
	IExchangeAuthorizationMethods,
	IExchangeAuthorizationModel,
} from "../types/exchangeauthorization";

export const exchangeAuthorizationSchema = new Schema<
	IExchangeAuthorization,
	IExchangeAuthorizationModel,
	IExchangeAuthorizationMethods
>(
	{
		requester: {
			service: {
				type: Types.ObjectId,
				ref: "Service",
			},
			authorization: {
				type: Boolean,
				default: false,
			},
		},

		receiver: {
			service: {
				type: Types.ObjectId,
				ref: "Service",
			},
			authorization: {
				type: Boolean,
				default: false,
			},
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
