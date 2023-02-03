import { Schema, Types } from 'mongoose';
import { IDataSharingContract, IDataSharingContractModel, IDataSharingContractMethods } from "../types/datasharingcontract";

export const dataSharingContractSchema = new Schema<
	IDataSharingContract,
	IDataSharingContractModel,
	IDataSharingContractMethods
>(
	{
		serviceImport: { type: Types.ObjectId, ref: "Service" },
		serviceExport: { type: Types.ObjectId, ref: "Service" },
		constitutiveAgreement: {
			type: Types.ObjectId,
			ref: "ConstitutiveAgreement",
		},
		accessionAgreement: { type: Types.ObjectId, ref: "AccessionAgreement" },
		dataSharing: [
			{
				purpose: { type: Types.ObjectId, ref: "Purpose" },
				datatypes: [{ type: Types.ObjectId, ref: "DataType" }],
				processor: { type: Types.ObjectId, ref: "Service" },
				conditions: [{ type: Types.ObjectId, ref: "TermsOfUse" }],
			},
		],
		dataProviderSignature: {
			signed: Boolean,
			timestamp: Date,
		},
		dataUserSignature: {
			signed: Boolean,
			timestamp: Date,
		},
		revoked: {
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
