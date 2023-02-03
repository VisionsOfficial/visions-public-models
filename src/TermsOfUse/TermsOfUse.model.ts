import { Schema, Types } from 'mongoose';
import { ITermsOfUse, ITermsOfUseModel, ITermsOfUseMethods } from "../types/termsofuse";

export const termsOfUseSchema = new Schema<
	ITermsOfUse,
	ITermsOfUseModel,
	ITermsOfUseMethods
>(
	{
		dataProvider: { type: Types.ObjectId, ref: "Service" },
		datasets: [{ type: Types.ObjectId, ref: "Dataset" }],
		name: String,
		restrictions: String,
		reporting: String,
		audit: String,
		dataSecurity: String,
		dataProtection: String,
		confidentialInformation: String,
		intellectualPropertyRights: String,
		otherTerms: String,
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {},
	}
);
