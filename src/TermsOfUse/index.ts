import { model } from "mongoose";
import {
    ITermsOfUse,
    ITermsOfUseModel,
} from "../types/termsofuse";
import { termsOfUseSchema } from "./TermsOfUse.model";

/**
 * Defines the Terms of Use for one or more dataset
 * @author Felix Bole <felix@visionspol.eu>
 * @experimental Discussion and implentation paused
 * @todo Resume discussion
 */
export const TermsOfUse = model<ITermsOfUse, ITermsOfUseModel>("TermsOfUse", termsOfUseSchema);