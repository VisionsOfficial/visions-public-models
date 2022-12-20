import { Schema } from "mongoose";
import { IDataUseExchangeModel } from "./datauseexchange";

export const statics = (schema: Schema<IDataUseExchangeModel>) => {
	schema.statics.findByServiceList = async function (serviceList: string[]) {
		if (serviceList.length === 0) return [];
		const query: any = { $or: [] };
		for (const service of serviceList) {
			const serviceImportQuery: any = {
				$and: [{ serviceImport: service }],
			};
			for (const nestedService of serviceList) {
				if (service === nestedService) continue;
				serviceImportQuery.$and.push({
					"data.serviceExport": nestedService,
				});
			}
			query.$or.push(serviceImportQuery);
		}
		const result = await this.find(query);
		return result;
	};
};
