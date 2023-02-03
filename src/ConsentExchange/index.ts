import { model } from "mongoose";
import {
	IConsentExchange,
	IConsentExchangeModel,
} from "../types/consentexchange";
import { consentExchangeSchema } from "./ConsentExchange.model";

/**
 * Created when a user gives his consent for a service to
 * use or import his data from another service to that service
 * @author Felix Bole <felix@visionspol.eu>
 * @author Yanick Kifack
 */
export const ConsentExchange = model<IConsentExchange, IConsentExchangeModel>(
	"ConsentExchange",
	consentExchangeSchema
);
