import { model } from "mongoose";
import { exchangeAuthorizationSchema } from "./ExchangeAuthorization.model";
import { statics } from "./statics";
import { methods } from "./methods";
import {
	IExchangeAuthorization,
	IExchangeAuthorizationModel,
} from "../types/exchangeauthorization";

methods(exchangeAuthorizationSchema);
statics(exchangeAuthorizationSchema);

/**
 * The General Exchange Authorization between 2 services
 *
 * @author Felix Bole <felix@visionspol.eu>
 */
export const ExchangeAuthorization = model<
	IExchangeAuthorization,
	IExchangeAuthorizationModel
>("ExchangeAuthorization", exchangeAuthorizationSchema);
