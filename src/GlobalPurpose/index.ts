import { model } from "mongoose";
import { IGlobalPurpose } from "../types/globalpurpose";
import { globalPurposeSchema } from "./GlobalPurpose.model";

/**
 * Represents a category a Purpose can belong to
 * @author Yanick Kifack
 */
export const GlobalPurpose = model<IGlobalPurpose>(
	"GlobalPurpose",
	globalPurposeSchema
);
