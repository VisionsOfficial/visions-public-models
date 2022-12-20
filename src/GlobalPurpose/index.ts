import { model } from "mongoose";
import { IGlobalPurpose } from "./globalpurpose";
import { globalPurposeSchema } from "./GlobalPurpose.model";

export const GlobalPurpose = model<IGlobalPurpose>(
	"GlobalPurpose",
	globalPurposeSchema
);
