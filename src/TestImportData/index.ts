import { model } from "mongoose";
import {
    ITestImportData,
    ITestImportDataModel,
} from "../types/testimportdata";
import { testImportDataSchema } from "./TestImportData.model";

/**
 * Data received when doing tests
 * @author Felix Bole <felix@visionspol.eu>
 */
export const TestImportData = model<ITestImportData, ITestImportDataModel>("TestImportData", testImportDataSchema);