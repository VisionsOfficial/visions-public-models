import { Types } from "mongoose";
import { AllSchemas } from "src/models";

type ImportedDatatypes = {
	datatype?: Types.ObjectId;
	used: boolean;
};

export interface IPurpose extends AllSchemas {
	name: string;
	description?: string;

	/**
	 * @deprecated unused
	 */
	privacyIcon?: string;

	datatypes?: Types.ObjectId[];

	/**
	 * @deprecated
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
