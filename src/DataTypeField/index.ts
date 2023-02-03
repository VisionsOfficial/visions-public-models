import { model } from "mongoose";
import { IDataTypeField, IDataTypeFieldModel } from "../types/datatypefield";
import { dataTypeFieldSchema } from "./DataTypeField.model";

/**
 * Represents a field in a datatype details schema
 * @author Felix Bole
 * @todo Verify relevance now that third party services will handle interoperability
 * @deprecated Aim for deprecation
 */
export const DataTypeField = model<IDataTypeField, IDataTypeFieldModel>(
	"DataTypeField",
	dataTypeFieldSchema
);
