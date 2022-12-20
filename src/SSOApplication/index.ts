import { model } from "mongoose";
import { ISSOApplication } from "./ssoapplication";
import { ssoApplicationSchema } from "./SSOApplication.model";

export const SSOApplication = model<ISSOApplication>(
	"SSOApplication",
	ssoApplicationSchema
);
