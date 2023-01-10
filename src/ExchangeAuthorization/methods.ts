import { Schema, Types } from "mongoose";
import {
	IExchangeAuthorization,
	IExchangeAuthorizationMethods,
	IExchangeAuthorizationModel,
	QueryOptions,
} from "../typings/exchangeauthorization";

const DEFAULT_STATUS_OPTIONS = {
	populated: false,
};

export const methods = (
	schema: Schema<
		IExchangeAuthorization,
		IExchangeAuthorizationModel,
		IExchangeAuthorizationMethods
	>
) => {
	schema.methods.isAuthorized = function () {
		return this.requester.authorization && this.receiver.authorization;
	};

	schema.methods.getStatus = function () {
		const { requester, receiver } = this;
		if (requester.authorization && receiver.authorization) {
			return "authorized";
		} else if (requester.authorization && !receiver.authorization) {
			return "pending";
		}

		return "unauthorized";
	};

	schema.methods.getStatusForService = function (
		serviceId: string | Types.ObjectId,
		options: QueryOptions = {}
	) {
		const finalOptions = { ...DEFAULT_STATUS_OPTIONS, ...options };
		const { requester, receiver } = this;

		let serviceError = false;
		if (finalOptions.populated) {
			if (
				serviceId != requester.service._id.toString() &&
				serviceId != receiver.service._id.toString()
			)
				serviceError = true;
		} else {
			if (
				serviceId != requester.service.toString() &&
				serviceId != receiver.service.toString()
			)
				serviceError = true;
		}

		if (serviceError)
			throw new Error("Service is not part of this exchange authorization");

		if (requester.authorization && receiver.authorization) {
			return "authorized";
		} else if (requester.authorization && !receiver.authorization) {
			if (serviceId == requester.service.toString()) {
				return "pending";
			} else if (serviceId == receiver.service.toString()) {
				return "pendingIncoming";
			}
		} else {
			return "unauthorized";
		}

		return "unauthorized";
	};
};
