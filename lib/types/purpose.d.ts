import { Model, Types } from "mongoose";
import { AllSchemas } from "./models";

type ImportedDatatypes = {
	datatype?: Types.ObjectId;
	used: boolean;
};

export interface IPurpose extends AllSchemas {
	name: string;
	description?: string;

	/**
	 * @deprecated Unused
	 */
	privacyIcon?: string;

	/**
	 * @deprecated Unused
	 */
	datatypes?: Types.ObjectId[];

	/**
	 * @deprecated Unused
	 */
	consentData?: Types.ObjectId[];

	importedDatatypes?: ImportedDatatypes[];

	service?: Types.ObjectId;
	category?: Types.ObjectId;
	globalPurpose?: Types.ObjectId;
	keywords?: string[];
	archived?: boolean;
	visible?: boolean;
}

export interface IPurposeMethods {}

export interface IPurposeModel
	extends Model<IPurpose, object, IPurposeMethods> {}
