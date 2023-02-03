import { Schema, Types } from "mongoose";
import { ISSOApplication } from "../types/ssoapplication";

export const ssoApplicationSchema = new Schema<ISSOApplication>(
	{
		service: {
			type: Types.ObjectId,
			ref: "Service",
			unique: [true, "This service has already registered an SSO Application"],
		},
		name: {
			type: String,
			required: true,
			unique: true,
		},
		policy: {
			shareEmail: {
				type: Boolean,
				default: false,
			},
		},
		clientId: {
			type: String,
			required: true,
			unique: true,
		},
		clientSecret: {
			type: String,
			required: true,
			unique: true,
		},
		origin: {
			type: String,
			unique: true,
		},
		protocol: {
			type: String,
			required: false,
		},
		useProtocol: {
			type: Boolean,
			default: false,
		},
		trustedOrigin: {
			type: Boolean,
			default: false,
		},
		endpoints: {
			ssoTokenCheck: {
				type: String,
				default: null,
				required: true,
			},
		},
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {
			byServiceId(serviceId: string | Types.ObjectId) {
				return this.where({ service: serviceId });
			},
		},
	}
);
