import { Schema, Types } from "mongoose";
import { IDatasetTermsOfUse } from "../types/datasettermsofuse";

export const datasetTermsOfUseSchema = new Schema<IDatasetTermsOfUse>(
	{
		dataProvider: { type: Types.ObjectId, ref: "Service" },
		datasetDescriptions: [
			{
				dataset: [
					{
						datatype: { type: Types.ObjectId, ref: "DataType" },
						location: { type: Types.ObjectId, ref: "Service" },
						distribution: String,
					},
				],
				termsAndConditions: String,
			},
		],
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
	{ timestamps: true }
);
