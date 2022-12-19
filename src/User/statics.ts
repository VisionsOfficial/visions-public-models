import { Schema } from "mongoose";
import { IUser } from "./user";

export const statics = (schema: Schema<IUser>) => {
	schema.statics.create = async function (email, password) {};
};
