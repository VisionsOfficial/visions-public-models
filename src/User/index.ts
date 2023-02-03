import { model } from "mongoose";
import { IUser, IUserModel } from "../types/user";
import { userSchema } from "./User.model";

/**
 * User registered in Visions, holding all identifiers related to him
 * Also serves as the users account for VisionsGalaxy
 *
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
export const User = model<IUser, IUserModel>("User", userSchema);
