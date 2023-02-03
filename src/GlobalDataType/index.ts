import { model } from "mongoose";
import { IGlobalDataType } from "../types/globaldatatype";
import { globalDataTypeSchema } from "./GlobalDataType.model";

/**
 * Represents a category a DataType can belong to
 * @author Yanick Kifack
 */
export const GlobalDataType = model<IGlobalDataType>(
	"GlobalDataType",
	globalDataTypeSchema
);
