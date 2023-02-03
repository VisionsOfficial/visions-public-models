import { model } from "mongoose";
import { IDataset } from "../types/dataset";
import { datasetSchema } from "./Dataset.model";

/**
 * Defines the data that a Data provider makes available to the network
 * @author Felix Bole <felix@visionspol.eu>
 */
export const Dataset = model<IDataset>("Dataset", datasetSchema);
