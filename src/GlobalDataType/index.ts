import { model } from "mongoose";
import { IGlobalDataType } from "../typings/globaldatatype";
import { globalDataTypeSchema } from "./GlobalDataType.model";

export const GlobalDataType = model<IGlobalDataType>(
	"GlobalDataType",
	globalDataTypeSchema
);
