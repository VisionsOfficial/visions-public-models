import { Schema, Types } from "mongoose";
import { IDataUseExchange } from "./datauseexchange";

/**
 * Represents a data exchange configuration between a data consumer
 * and one or more data providers
 */
export const dataUseExchangeSchema = new Schema<IDataUseExchange>(
	{
		purpose: {
			type: Types.ObjectId,
			ref: "Purpose",
		},
		data: [
			{
				datatype: {
					type: Types.ObjectId,
					ref: "DataType",
				},
				authorized: {
					type: Boolean,
					default: false,
				},
				serviceExport: {
					type: Types.ObjectId,
					ref: "Service",
				},
			},
		],
		description: String,
		serviceImport: {
			type: Types.ObjectId,
			ref: "Service",
		},
		privacyIcon: String,
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
		query: {
			byService(serviceId: string) {
				const query = {
					$or: [
						{
							serviceImport: serviceId,
						},
						{
							"data.serviceExport": serviceId,
						},
					],
				};
				return this.where(query);
			},

			byServiceAuthorized(serviceId: string) {
				const query = {
					$or: [
						{
							$and: [{ serviceImport: serviceId }, { "data.authorized": true }],
						},
						{
							data: {
								$elemMatch: {
									serviceExport: serviceId,
									authorized: true,
								},
							},
						},
					],
				};
				return this.where(query);
			},

			fromTwoServices(serviceAId: string, serviceBId: string) {
				const query = {
					$or: [
						{
							$and: [
								{
									serviceImport: serviceAId,
								},
								{
									"data.serviceExport": serviceBId,
								},
							],
						},
						{
							$and: [
								{
									serviceImport: serviceBId,
								},
								{
									"data.serviceExport": serviceAId,
								},
							],
						},
					],
				};
				return this.where(query);
			},

			fromTwoServicesKnowingFlow(
				serviceImportId: string,
				serviceExportId: string
			) {
				const query = {
					$and: [
						{
							serviceImport: serviceImportId,
						},
						{
							"data.serviceExport": serviceExportId,
						},
					],
				};
				return this.where(query);
			},

			fromProvider(dataProviderId: string) {
				return this.where({ "data.serviceExport": dataProviderId });
			},

			fromConsumer(dataConsumerId: string) {
				return this.where({ serviceImport: dataConsumerId });
			},
		},
	}
);
