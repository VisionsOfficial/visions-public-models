import { HydratedDocument, Model, Types } from "mongoose";
import { AllSchemas } from "src/models";

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

export interface IExchangeAuthorization extends AllSchemas {
	requester: {
		service?: Types.ObjectId;
		authorization: boolean;
	};
	receiver: {
		service?: Types.ObjectId;
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
	getAllFromService(
		serviceId: string | Types.ObjectId
	): Promise<IExchangeAuthorization[]>;

	getAllByService(
		serviceId: string | Types.ObjectId,
		options: QueryOptions
	): Promise<IExchangeAuthorization[]> | Promise<IExchangeAuthorizationModel[]>;

	getAuthorization(
		serviceId: string | Types.ObjectId,
		otherServiceId: string | Types.ObjectId,
		options: QueryOptions
	): Promise<Authorization>;

	createRequest(
		requesterId: string | Types.ObjectId,
		receiverId: string | Types.ObjectId
	): Promise<IExchangeAuthorizationModel>;

	acceptRequest(
		requesterId: string | Types.ObjectId,
		receiverId: string | Types.ObjectId
	): Promise<IExchangeAuthorizationModel> | Promise<null>;

	revokeAuthorization(
		revokerServiceId: string | Types.ObjectId,
		otherServiceId: string | Types.ObjectId
	): Promise<IExchangeAuthorizationModel> | Promise<true>;
}
