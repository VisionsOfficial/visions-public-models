import { model } from "mongoose";
import { IIdentifier } from "../typings/identifier";
import { identifierSchema } from "./Identifier.model";

export const Identifier = model<IIdentifier>("Identifier", identifierSchema);
