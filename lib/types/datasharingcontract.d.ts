import { HydratedDocument, Model, QueryWithHelpers, Types } from "mongoose";
import { AllSchemas } from "./models";

export type DataSharingConditions = {
	/**
	 * @ref Purpose
	 */
	purpose?: Types.ObjectId;

	/**
	 * @ref DataType
	 */
	datatypes: Types.ObjectId[];

	/**
	 * @ref Service
	 */
	processor?: Types.ObjectId;

	/**
	 * @ref TermsOfUse
	 */
	conditions: Types.ObjectId[];
};

export type DataSharingSignature = {
	signed: boolean;
	timestamp: Date;
};

export interface IDataSharingContract extends AllSchemas {
	/**
	 * @ref Service
	 */
	serviceImport?: Types.ObjectId;

	/**
	 * @ref Service
	 */
	serviceExport?: Types.ObjectId;

	/**
	 * @ref ConstitutiveAgreement
	 */
	constitutiveAgreement?: Types.ObjectId;

	/**
	 * @ref AccessionAgreement
	 */
	accessionAgreement?: Types.ObjectId;

	/**
	 * Specifications of the data and conditions involved in this contract
	 */
	dataSharing: DataSharingConditions[];
	dataProviderSignature?: DataSharingSignature;
	dataUserSignature?: DataSharingSignature;
	revoked: boolean;
}

export interface IDataSharingContractMethods {
	isValid(): boolean;
}
export interface IDataSharingContractQueryHelpers {}

export interface IDataSharingContractModel
	extends Model<
		IDataSharingContract,
		IDataSharingContractQueryHelpers,
		IDataSharingContractMethods
	> {}
