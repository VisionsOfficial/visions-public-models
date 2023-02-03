import { Model, Types } from "mongoose";
import { AllSchemas } from "./models";

export interface ITermsOfUse extends AllSchemas {
	/**
	 * @optional since a dataset can be created outside of a network
	 */
	constitutiveAgreement?: Types.ObjectId;

	dataProvider?: Types.ObjectId;

	/**
	 * Datasets upon which these terms of use apply
	 * @todo should be virtual
	 */
	datasets: Types.ObjectId[];

	/**
	 * Simply for services to categorize their Terms Of Use to easily find them afterwards
	 */
	name: string;

	/**
	 * What the data should not be processed for
	 *
	 * Could be defined from a standard dataset terms of use template defined by the Network
	 */
	restrictions?: string;

	/**
	 * Reporting obligations on the use of data
	 *
	 * Could be defined from a standard dataset terms of use template defined by the Network
	 */
	reporting?: string;

	/**
	 * Audit conditions on the use of data
	 *
	 * Could be defined from a standard dataset terms of use template defined by the Network
	 */
	audit?: string;

	/**
	 * Data security
	 *
	 * Any specific data security requirements for the Dataset(s)
	 * Could be defined from a standard dataset terms of use template defined by the Network
	 */
	dataSecurity?: string;

	/**
	 * Data protection
	 *
	 * The General Terms and Conditions defines the default terms and conditions that apply to data protection. In the event
	 * that the Data includes personal data, the Data Provider must consider defining herein the terms and conditions for the transfer and processing of
	 * personal data in further detail. In addition, further consideration is required where the Data includes personal data (or anonymised personal data),
	 * which would be redistributed to Third Party End Users.
	 */
	dataProtection?: string;

	/**
	 * Confidential information
	 *
	 * Where the Dataset(s) include Confidential Information, the Data Provider should detail herein any specific requirements it deems necessary in
	 * order to make the Data available within the Network.
	 */
	confidentialInformation?: string;

	/**
	 * Intellectual Property Rights
	 *
	 * Where the Data Provider considers it necessary to derogate from the default approach for Intellectual Property Rights,
	 * Dataset specific derogations should be described herein. However, to manage the Intellectual Property Rights effectively,
	 * the Members should consider whether it would be feasible to define the default approach to Intellectual Property Rights
	 * for the Network by establishing a standard template for Dataset Terms of Use that apply to the specific Network.
	 */
	intellectualPropertyRights?: string;

	/**
	 * Other terms
	 *
	 * Additionnal terms considered necessary by the data provider for the datasets terms of use
	 */
	otherTerms?: string;
}

export interface ITermsOfUseMethods {}

export interface ITermsOfUseModel extends Model<ITermsOfUse, object, ITermsOfUseMethods> {}

