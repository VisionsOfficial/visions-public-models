import { model } from "mongoose";
import {
	IDataUseExchange,
	IDataUseExchangeModel,
} from "../types/datauseexchange";
import { dataUseExchangeSchema } from "./DataUseExchange.model";
import { statics } from "./statics";

statics(dataUseExchangeSchema);

/**
 * Represents a data exchange configuration between a data consumer
 * and one or more data providers
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
export const DataUseExchange = model<IDataUseExchange, IDataUseExchangeModel>(
	"DataUseExchange",
	dataUseExchangeSchema
);
