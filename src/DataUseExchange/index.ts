import { model } from "mongoose";
import { IDataUseExchange, IDataUseExchangeModel } from "./datauseexchange";
import { dataUseExchangeSchema } from "./DataUseExchange.model";

export const DataUseExchange = model<IDataUseExchange, IDataUseExchangeModel>(
	"DataUseExchange",
	dataUseExchangeSchema
);
