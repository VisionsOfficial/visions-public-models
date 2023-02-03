import { model } from "mongoose";
import {
    IDataSharingContract,
    IDataSharingContractModel,
} from "../types/datasharingcontract";
import { dataSharingContractSchema } from "./DataSharingContract.model";
import { methods } from './methods';

methods(dataSharingContractSchema);

/**
 * Data sharing contract
 * @author Felix Bole <felix@visionspol.eu>
 * @experimental Used only experimentally for now
 * @todo Verify relevance and precise function
 */
export const DataSharingContract = model<IDataSharingContract, IDataSharingContractModel>("DataSharingContract", dataSharingContractSchema);