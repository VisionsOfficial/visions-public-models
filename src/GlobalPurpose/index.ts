import { model } from "mongoose";
import { IGlobalPurpose } from "../typings/globalpurpose";
import { globalPurposeSchema } from "./GlobalPurpose.model";

export const GlobalPurpose = model<IGlobalPurpose>(
	"GlobalPurpose",
	globalPurposeSchema
);
