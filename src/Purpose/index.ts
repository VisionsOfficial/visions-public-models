import { model } from "mongoose";
import { IPurpose } from "./purpose";
import { purposeSchema } from "./Purpose.model";

export const Purpose = model<IPurpose>("Purpose", purposeSchema);
