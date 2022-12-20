import { model } from "mongoose";
import { IDataset } from "./dataset";
import { datasetSchema } from "./Dataset.model";

export const Dataset = model<IDataset>("Dataset", datasetSchema);
