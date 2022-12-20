import { Schema, Types } from "mongoose";
import { IMarketplaceAccess } from "./marketplaceaccess";

export const hooks = (schema: Schema<IMarketplaceAccess>) => {
	schema.pre("save", function (next: any) {
		const ma = this;

		try {
			if (ma.isModified("services")) {
				const stringedIds: string[] = [];
				const finalServices: Types.ObjectId[] = [];
				for (const service of ma.services) {
					const stringId = service.toString();
					if (!stringedIds.includes(stringId)) {
						stringedIds.push(stringId);
						finalServices.push(service);
					}
				}
				ma.services = finalServices;
			}

			next();
		} catch (err) {
			next();
		}
	});
};
