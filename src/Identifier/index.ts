import { model } from "mongoose";
import { IIdentifier } from "./identifier";
import { identifierSchema } from "./Identifier.model";

export const Identifier = model<IIdentifier>("Identifier", identifierSchema);
