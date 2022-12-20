import { model } from "mongoose";
import { IGlobalDataType } from "./globaldatatype";
import { globalDataTypeSchema } from "./GlobalDataType.model";

export const GlobalDataType = model<IGlobalDataType>(
	"GlobalDataType",
	globalDataTypeSchema
);
