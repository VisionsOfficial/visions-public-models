import { model } from "mongoose";
import { IDatasetRequest } from "./datasetrequest";
import { datasetRequestSchema } from "./DatasetRequest.model";

export const DatasetRequest = model<IDatasetRequest>(
	"DatasetTermsOfUse",
	datasetRequestSchema
);
