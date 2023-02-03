import { model } from "mongoose";
import { IDatasetTermsOfUse } from "../types/datasettermsofuse";
import { datasetTermsOfUseSchema } from "./DatasetTermsOfUse.model";

/**
 * Defines the data that the data provider makes available through the network
 * as well as setting out the terms and conditions for the use of such data.
 * @author Felix Bole <felix@visionspol.eu>
 */
export const DatasetTermsOfUse = model<IDatasetTermsOfUse>(
	"DatasetTermsOfUse",
	datasetTermsOfUseSchema
);
