import { model } from "mongoose";
import { IConsentExchange, IConsentExchangeModel } from "../typings/consentexchange";
import { consentExchangeSchema } from "./ConsentExchange.model";

export const ConsentExchange = model<IConsentExchange, IConsentExchangeModel>(
	"ConsentExchange",
	consentExchangeSchema
);
