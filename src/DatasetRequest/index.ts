import { model } from "mongoose";
import { IDatasetRequest } from "../types/datasetrequest";
import { datasetRequestSchema } from "./DatasetRequest.model";

/**
 * Represents a request made on a specific Dataset
 * @author Felix Bole <felix@visionspol.eu>
 * @unused
 * @todo Verify relevance
 */
export const DatasetRequest = model<IDatasetRequest>(
	"DatasetRequest",
	datasetRequestSchema
);
