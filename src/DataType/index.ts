import { model } from "mongoose";
import { IDataType } from "./datatype";
import { dataTypeSchema } from "./DataType.model";

export const DataType = model<IDataType>("DataType", dataTypeSchema);
