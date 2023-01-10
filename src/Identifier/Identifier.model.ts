import { Schema, Types } from "mongoose";
import { IIdentifier } from "../typings/identifier";

/**
 * Reference to a user's identity in one service
 * Serves as an ID card to know if a user has some information
 * in a service that a service registered for him
 */
export const identifierSchema = new Schema<IIdentifier>(
	{
		user: { type: Types.ObjectId, ref: "User" },
		service: { type: Types.ObjectId, ref: "Service" },
		origin: String,
		userServiceId: String,
		email: String,
		userKey: {
			type: String,
			require: true,
		},
		emailVerified: Boolean,
		userProcessorIds: [
			{
				processor: {
					type: Types.ObjectId,
					ref: "Service",
				},
				id: {
					type: Types.ObjectId,
					ref: "Identifier",
				},
			},
		],
		endpoints: {
			dataImport: [
				{
					serviceId: {
						type: Types.ObjectId,
						ref: "Service",
					},
					url: {
						type: String,
					},
				},
			],
			dataExport: [
				{
					serviceId: {
						type: Types.ObjectId,
						ref: "Service",
					},
					url: {
						type: String,
						default: null,
					},
				},
			],
			consentImport: [
				{
					serviceId: {
						type: Types.ObjectId,
						ref: "Service",
					},
					url: {
						type: String,
						default: null,
					},
				},
			],
			consentExport: [
				{
					serviceId: {
						type: Types.ObjectId,
						ref: "Service",
					},
					url: {
						type: String,
						default: null,
					},
				},
			],
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
