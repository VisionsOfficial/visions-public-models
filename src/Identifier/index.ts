import { model } from "mongoose";
import { IIdentifier, IIdentifierModel } from "../types/identifier";
import { identifierSchema } from "./Identifier.model";
import { statics } from "./statics";

statics(identifierSchema);

/**
 * Reference to a user's identity in one service
 * Serves as an ID card to know if a user has some information
 * in a service that a service registered for him
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole
 */
export const Identifier = model<IIdentifier, IIdentifierModel>(
	"Identifier",
	identifierSchema
);
