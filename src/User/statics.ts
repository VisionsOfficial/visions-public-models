import { Schema } from "mongoose";
import { IUser } from "../typings/user";

export const statics = (schema: Schema<IUser>) => {
	schema.statics.create = async function (email, password) {};
};
