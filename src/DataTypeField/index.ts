import { model } from "mongoose";
import { IDataTypeField } from "../typings/datatypefield";
import { dataTypeFieldSchema } from "./DataTypeField.model";

export const DataTypeField = model<IDataTypeField>(
	"DataTypeField",
	dataTypeFieldSchema
);
