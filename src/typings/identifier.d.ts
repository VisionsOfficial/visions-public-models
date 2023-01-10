import { Types } from "mongoose";
import { AllSchemas } from "src/models";

type Endpoints = {
	serviceId?: Types.ObjectId;
	url: string;
};

export interface IIdentifier extends AllSchemas {
	/**
	 * References the global "super" user account
	 */
	user?: Types.ObjectId;

	/**
	 * What service this identifier belongs to
	 */
	service?: Types.ObjectId;

	/**
	 * Used to serve as the origin url of the service
	 * registering the identifier. Is no longer used.
	 *
	 * @deprecated
	 */
	origin?: string;

	/**
	 * ID of the user being registered within the service's
	 * infrastructure database. This information is used only
	 * to provide the corresponding parties with the user information
	 * to know who's data to export and for which internal user
	 * to store it
	 */
	userServiceId: string;

	/**
	 * The user's email inside the service's infrastructure
	 */
	email: string;

	/**
	 * Key generated by Visions for further authentication
	 * of that user when the services uses the VisionsTrust API
	 * to enable exchanges from within their client platform
	 */
	userKey: string;

	emailVerified: boolean;

	/**
	 * @experimental
	 */
	userProcessorIds?: [
		{
			processor?: Types.ObjectId;
			id?: Types.ObjectId;
		}
	];

	/**
	 * Used by services with a domain per user system
	 */
	endpoints?: {
		dataImport?: Endpoints[];
		dataExport?: Endpoints[];
		consentImport?: Endpoints[];
		consentExport?: Endpoints[];
	};
}
