import { model } from "mongoose";
import { IDataset } from "../typings/dataset";
import { datasetSchema } from "./Dataset.model";

export const Dataset = model<IDataset>("Dataset", datasetSchema);
