import { Model, Types } from "mongoose";
import { AllSchemas } from "./models";

type DataUseExchangeData = {
	datatype?: Types.ObjectId;
	authorized: boolean;

	/**
	 * @todo This should be renamed to dataProvider
	 */
	serviceExport?: Types.ObjectId;
};

export interface IDataUseExchange extends AllSchemas {
	purpose?: Types.ObjectId;
	data: DataUseExchangeData[];
	description?: string;
	serviceImport?: Types.ObjectId;

	/**
	 * @deprecated unused
	 */
	privacyIcon?: string;
}

export interface IDataUseExchangeModel extends Model<IDataUseExchange> {
	/**
	 * Searches for all the datauseexchange for both import and
	 * export for all the listed services
	 * @param {string[]} serviceList List of service IDs
	 */
	findByServiceList(serviceList: string[]): Promise<IDataUseExchangeModel[]>;
}
