import { model } from "mongoose";
import { IConsentExchange, IConsentExchangeModel } from "./consentexchange";
import { consentExchangeSchema } from "./ConsentExchange.model";

export const ConsentExchange = model<IConsentExchange, IConsentExchangeModel>(
	"ConsentExchange",
	consentExchangeSchema
);
