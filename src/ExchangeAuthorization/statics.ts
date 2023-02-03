import { Schema, Types } from "mongoose";
import {
	IExchangeAuthorization,
	IExchangeAuthorizationMethods,
	IExchangeAuthorizationModel,
} from "../types/exchangeauthorization";

type Options = {
	populate?: boolean;
	lean?: boolean;
};

const DEFAULT_QUERY_OPTIONS: Options = {
	populate: false,
	lean: true,
};

export const statics = (
	schema: Schema<
		IExchangeAuthorization,
		IExchangeAuthorizationModel,
		IExchangeAuthorizationMethods
	>
) => {
	schema.statics.getAllFromService = async function (serviceId) {
		const reqs = await this.find({
			"requester.service": serviceId,
		}).lean();

		return reqs;
	};

	schema.statics.getAllByService = async function (serviceId, options = {}) {
		const finalOptions = { ...DEFAULT_QUERY_OPTIONS, ...options };

		const query = {
			$or: [
				{ "requester.service": serviceId },
				{ "receiver.service": serviceId },
			],
		};
		let reqs;
		if (finalOptions.populate) {
			if (finalOptions.lean) {
				reqs = await this.find(query)
					.lean()
					.populate({ path: "requester", populate: "service" })
					.populate({ path: "receiver", populate: "service" });
			} else {
				reqs = await this.find(query)
					.populate({ path: "requester", populate: "service" })
					.populate({ path: "receiver", populate: "service" });
			}
		} else {
			reqs = await this.find(query);
		}

		return reqs;
	};

	schema.statics.getAuthorization = async function (
		serviceId: string | Types.ObjectId,
		otherServiceId: string | Types.ObjectId,
		isForServiceId: boolean = false
	) {
		const exchangeAuth = await this.findOne({
			$or: [
				{
					$and: [
						{ "requester.service": serviceId },
						{ "receiver.service": otherServiceId },
					],
				},
				{
					$and: [
						{ "requester.service": otherServiceId },
						{ "receiver.service": serviceId },
					],
				},
			],
		});

		if (!exchangeAuth)
			return {
				authorization: false,
				status: "notfound",
				exchangeAuthorization: exchangeAuth,
			};
		return {
			authorization: exchangeAuth.isAuthorized(),
			status: isForServiceId
				? exchangeAuth.getStatusForService(serviceId)
				: exchangeAuth.getStatus(),
			exchangeAuthorization: exchangeAuth,
		};
	};

	schema.statics.createRequest = async function (requesterId, receiverId) {
		const exchangeAuthorization = new this({
			requester: {
				service: requesterId,
				authorization: true,
			},
			receiver: {
				service: receiverId,
			},
		});

		await exchangeAuthorization.save();
		return exchangeAuthorization;
	};

	schema.statics.acceptRequest = async function (requesterId, receiverId) {
		const req = await this.findOne({
			"requester.service": requesterId,
			"receiver.service": receiverId,
		});

		if (!req) {
			console.log("No pending requests");
			return null;
		}

		req.receiver.authorization = true;
		await req.save();
		return req;
	};

	schema.statics.revokeAuthorization = async function (
		revokerServiceId,
		otherServiceId
	) {
		const exchangeAuth = await this.findOne({
			$or: [
				{
					$and: [
						{ "requester.service": revokerServiceId },
						{ "receiver.service": otherServiceId },
					],
				},
				{
					$and: [
						{ "requester.service": otherServiceId },
						{ "receiver.service": revokerServiceId },
					],
				},
			],
		});

		if (!exchangeAuth) {
			throw new Error("Exchange Authorization does not exist");
		}

		let otherServiceObjectKey = null;
		if (exchangeAuth.requester.service?.toString() === otherServiceId)
			otherServiceObjectKey = "requester";
		if (exchangeAuth.receiver.service?.toString() === otherServiceId)
			otherServiceObjectKey = "receiver";

		if (!otherServiceObjectKey) throw new Error("Other service not found");

		const otherServiceCurrentAuth =
			otherServiceObjectKey === "requester"
				? exchangeAuth.requester.authorization
				: exchangeAuth.receiver.authorization;

		// If the other service has a true authorization, invert requester and receiver
		// Otherwise simply delete the document
		if (otherServiceCurrentAuth) {
			exchangeAuth.requester.service = otherServiceId;
			exchangeAuth.requester.authorization = otherServiceCurrentAuth;
			exchangeAuth.receiver.service = revokerServiceId;
			exchangeAuth.receiver.authorization = false;
			await exchangeAuth.save();
			return exchangeAuth;
		} else {
			await this.findByIdAndRemove(exchangeAuth._id);
			return true;
		}
	};
};
