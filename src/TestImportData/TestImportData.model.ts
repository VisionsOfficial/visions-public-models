import { Schema, Types } from 'mongoose';
import { ITestImportData, ITestImportDataModel, ITestImportDataMethods } from "../types/testimportdata";

export const testImportDataSchema = new Schema<
	ITestImportData,
	ITestImportDataModel,
	ITestImportDataMethods
>(
	{
		testService: { type: Types.ObjectId, ref: "Service" },
		flow: { type: Number, default: 1 },
		isInteropProtocol: { type: Boolean, default: false },
		consentExchange: { type: Types.ObjectId, ref: "ConsentExchange" },
		data: {},
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {},
	}
);
