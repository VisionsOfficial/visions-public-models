import { Model, Types } from "mongoose";
import { AllSchemas } from "./models";

export interface IAuthenticationInfo extends AllSchemas {
    service?: Types.ObjectId;
    email?: string;
    requestToken?: string;
    accessToken?: string;
    identifier?: Types.ObjectId;
}

export interface IAuthenticationInfoMethods {}

export interface IAuthenticationInfoModel extends Model<IAuthenticationInfo, object, IAuthenticationInfoMethods> {}

