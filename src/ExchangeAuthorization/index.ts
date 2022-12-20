import { model } from "mongoose";
import { exchangeAuthorizationSchema } from "./ExchangeAuthorization.model";
import { statics } from "./statics";
import { methods } from "./methods";
import {
	IExchangeAuthorization,
	IExchangeAuthorizationModel,
} from "./exchangeauthorization";

methods(exchangeAuthorizationSchema);
statics(exchangeAuthorizationSchema);

export const ExchangeAuthorization = model<
	IExchangeAuthorization,
	IExchangeAuthorizationModel
>("ExchangeAuthorization", exchangeAuthorizationSchema);
