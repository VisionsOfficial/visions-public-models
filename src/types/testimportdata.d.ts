import { Model, Types } from "mongoose";
import { AllSchemas } from "./models";

export interface ITestImportData extends AllSchemas {
	/**
	 * Service undergoing test
	 */
	testService?: Types.ObjectId;

	/**
	 * If import or export
	 * import: 0,
	 * export: 1
	 */
	flow: number;

	/**
	 * Whether or not this is a test using the interop protocol
	 */
	isInteropProtocol?: boolean;

	/**
	 * Associated consent ID
	 */
	consentExchange?: Types.ObjectId;

	/**
	 * Raw data as received
	 */
	data?: any;
}

export interface ITestImportDataMethods {}

export interface ITestImportDataModel extends Model<ITestImportData, object, ITestImportDataMethods> {}

