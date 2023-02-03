import { model } from "mongoose";
import { IDataType } from "../types/datatype";
import { dataTypeSchema } from "./DataType.model";

/**
 * A Public way of representing a service's type of data
 * that it makes available to all other services
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole
 */
export const DataType = model<IDataType>("DataType", dataTypeSchema);
