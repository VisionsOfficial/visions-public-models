import { Schema, Types } from "mongoose";
import { IMarketplaceAccessModel } from "src/MarketplaceAccess/marketplaceaccess";

export const statics = (schema: Schema<IMarketplaceAccessModel>) => {
	schema.statics.findLastExportForService = function (serviceId: string) {
		return new Promise((res, rej) => {
			this.aggregate([
				{
					$lookup: {
						from: "identifiers",
						localField: "userExportId",
						foreignField: "_id",
						as: "userExportId",
					},
				},
				{
					$unwind: "$userExportId",
				},
				{
					$match: {
						"userExportId.service": {
							$in: [new Types.ObjectId(serviceId)],
						},
					},
				},
				{
					$sort: {
						timestamp: -1,
					},
				},
				{
					$limit: 5,
				},
			]).exec(function (err, docs) {
				if (err) {
					console.log(err);
					rej(err);
				}

				res(docs);
			});
		});
	};

	schema.statics.findLastImportForService = function (serviceId: string) {
		return new Promise((res, rej) => {
			this.aggregate([
				{
					$lookup: {
						from: "identifiers",
						localField: "userImportId",
						foreignField: "_id",
						as: "userImportId",
					},
				},
				{
					$unwind: "$userImportId",
				},
				{
					$match: {
						"userImportId.service": {
							$in: [new Types.ObjectId(serviceId)],
						},
					},
				},
				{
					$limit: 5,
				},
			]).exec(function (err, docs) {
				if (err) {
					console.log(err);
					rej(err);
				}

				res(docs);
			});
		});
	};
};
