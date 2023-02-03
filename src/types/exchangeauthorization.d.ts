import { Document, HydratedDocument, Model, Types } from "mongoose";
import { AllSchemas } from "./models";
import { IService } from "./service";

export type QueryOptions = {
	populate?: boolean;
	lean?: boolean;
};

type Authorization = {
	authorization: boolean;
	status:
		| "notfound"
		| "authorized"
		| "pending"
		| "pendingIncoming"
		| "unauthorized";
	exchangeAuthorization: HydratedDocument<IExchangeAuthorizationModel> | null;
};

export type PopulatedRequester = {
	requester: {
		service?: HydratedDocument<IService>;
		authorization: boolean;
	};
};

export type PopulatedReceiver = {
	receiver: {
		service?: HydratedDocument<IService>;
		authorization: boolean;
	};
};

export interface IExchangeAuthorization extends AllSchemas {
	requester: {
		service?: Types.ObjectId | HydratedDocument<IService>;
		authorization: boolean;
	};
	receiver: {
		service?: Types.ObjectId | HydratedDocument<IService>;
		authorization: boolean;
	};
}

export interface IExchangeAuthorizationMethods {
	isAuthorized(): boolean;
	getStatus(): "authorized" | "pending" | "unauthorized";
	getStatusForService(
		serviceId: string | Types.ObjectId,
		options?: QueryOptions
	): "authorized" | "pending" | "pendingIncoming" | "unauthorized";
}

export interface IExchangeAuthorizationModel
	extends Model<IExchangeAuthorization, {}, IExchangeAuthorizationMethods> {
	/**
	 * Finds an exchange authorization between two services
	 */
	findWithServices(
		serviceA: Types.ObjectId | string,
		serviceB: Types.ObjectId | string
	): Promise<
		| (Document<unknown, any, IExchangeAuthorization> &
				IExchangeAuthorization & {
					_id: Types.ObjectId;
				} & IExchangeAuthorizationMethods)
		| null
	>;

	/**
	 * Finds all exchange authorizations where the service is a requester
	 */
	getAllFromService(serviceId: string | Types.ObjectId): Promise<
		HydratedDocument<
			Omit<
				Omit<
					Document<unknown, any, IExchangeAuthorization> &
						IExchangeAuthorization & {
							_id: Types.ObjectId;
						} & IExchangeAuthorizationMethods,
					"requester"
				> &
					PopulatedRequester,
				"receiver"
			> &
				PopulatedReceiver
		>[]
	>;

	/**
	 * Finds all exchange authorizations for a service whether
	 * the service is a requester or a receiver
	 */
	getAllByService(
		serviceId: string | Types.ObjectId,
		options: QueryOptions
	): Promise<
		HydratedDocument<IExchangeAuthorization & IExchangeAuthorizationMethods>[]
	>;

	getAuthorization(
		serviceId: string | Types.ObjectId,
		otherServiceId: string | Types.ObjectId,
		isForServiceId?: boolean
	): Promise<Authorization>;

	createRequest(
		requesterId: string | Types.ObjectId,
		receiverId: string | Types.ObjectId
	): Promise<
		HydratedDocument<IExchangeAuthorization & IExchangeAuthorizationMethods>
	>;

	acceptRequest(
		requesterId: string | Types.ObjectId,
		receiverId: string | Types.ObjectId
	):
		| Promise<
				HydratedDocument<IExchangeAuthorization & IExchangeAuthorizationMethods>
		  >
		| Promise<null>;

	revokeAuthorization(
		revokerServiceId: string | Types.ObjectId,
		otherServiceId: string | Types.ObjectId
	):
		| Promise<
				HydratedDocument<IExchangeAuthorization & IExchangeAuthorizationMethods>
		  >
		| Promise<true>;
}
