import { model, Types } from "mongoose";
import { IPurpose, IPurposeModel } from "../types/purpose";
import { purposeSchema } from "./Purpose.model";

/**
 * What a service uses requested data for
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
export const Purpose = model<IPurpose, IPurposeModel>("Purpose", purposeSchema);
