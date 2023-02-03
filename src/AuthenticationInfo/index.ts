import { model } from "mongoose";
import {
    IAuthenticationInfo,
    IAuthenticationInfoModel,
} from "../types/authenticationinfo";
import { authenticationInfoSchema } from "./AuthenticationInfo.model";

/**
 * Was used for authentication over OAuth on early VisionsTrust popup generation tests
 * @author Yanick Kifack
 * @deprecated Should be removed from code
 * @todo Remove
 */
export const AuthenticationInfo = model<IAuthenticationInfo, IAuthenticationInfoModel>("AuthenticationInfo", authenticationInfoSchema);