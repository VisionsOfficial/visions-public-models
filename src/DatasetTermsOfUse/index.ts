import { model } from "mongoose";
import { IDatasetTermsOfUse } from "../typings/datasettermsofuse";
import { datasetTermsOfUseSchema } from "./DatasetTermsOfUse.model";

export const DatasetTermsOfUse = model<IDatasetTermsOfUse>(
	"DatasetTermsOfUse",
	datasetTermsOfUseSchema
);
