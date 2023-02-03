import { model } from "mongoose";
import { ISSOApplication } from "../types/ssoapplication";
import { ssoApplicationSchema } from "./SSOApplication.model";

export const SSOApplication = model<ISSOApplication>(
	"SSOApplication",
	ssoApplicationSchema
);
