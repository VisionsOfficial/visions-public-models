import mongoose from "mongoose";
import { userSchema } from "./User.model";
import { statics } from "./statics";

statics(userSchema);

export const User = mongoose.model("User", userSchema);
