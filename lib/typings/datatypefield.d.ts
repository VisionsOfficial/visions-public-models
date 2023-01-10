import { Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface IDataTypeField extends AllSchemas {
	datatype?: Types.ObjectId;
	service?: Types.ObjectId;

	/**
	 * Reference to the collection if field of table
	 */
	parent?: Types.ObjectId;

	/**
	 * Reference to the fields if it is a collection
	 * @todo remove cross reference
	 */
	fields?: Types.ObjectId[];

	name: string;
	type?: string;
}
