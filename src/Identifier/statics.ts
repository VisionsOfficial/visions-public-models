import { HydratedDocument, Schema, Types } from "mongoose";
import { IIdentifier } from "../types/identifier";
import { IUser } from "../types/user";

export const statics = (schema: Schema<IIdentifier>) => {
	schema.statics.createForAPIService = async function (
		serviceId: Types.ObjectId | string,
		user: HydratedDocument<IUser>,
		userKey: string
	) {
		const identifier = new this({
			service: serviceId,
			email: user.email,
			userKey: userKey,
			userServiceId: null,
			emailVerified: true,
			user: user._id,
		});

		user.identifiers.push(identifier);
		await Promise.all([identifier.save(), user.save()]);
		return identifier;
	};
};
