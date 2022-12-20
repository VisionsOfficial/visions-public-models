import { Model, Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface IConsentExchange extends AllSchemas {
	/**
	 * Reference to the dataUseExchange between 2 services
	 */
	dataUseExchange?: Types.ObjectId;

	/**
	 * User identifier in exporting service
	 */
	userExportId?: Types.ObjectId;

	/**
	 * User identifier in Importing service
	 */
	userImportId?: Types.ObjectId;

	/**
	 * Reference to the user's User model (super user)
	 */
	user?: Types.ObjectId;

	/**
	 * List of all datatypes concerned by the exchange
	 */
	data: [
		{
			/**
			 * DataType reference id
			 */
			datatype?: Types.ObjectId;

			/**
			 * Import authorization status for each datatype
			 */
			authorized: boolean;
		}
	];

	/**
	 * Timestamp on creation of the ConsentExchange
	 *
	 * @deprecated Use createdAt instead
	 */
	timestamp?: Date;

	/**
	 * Consent on the exchange of data between the 2 services of the Consent Exchange
	 *
	 * @deprecated
	 */
	consented?: boolean;

	/**
	 * Token created by Exporting service
	 */
	token?: string;

	/**
	 * Token generated to verify email
	 */
	emailToken?: {
		token: string;

		/**
		 * Expiration date : 48hrs suggested
		 */
		expires: number;
	};

	/**
	 * Email verification status for both import and export identifier emails
	 */
	verified: number;

	/**
	 * The current status of the consent. Allows for following the consent process
	 */
	status: {
		followCode: number;
		text: string;
	};

	/**
	 * Import (1) or Export (2)
	 */
	flow: number;

	/**
	 * Reference to the consent Exchange parent for subcontractor
	 */
	parent?: Types.ObjectId;

	/**
	 * Reference to the consent Exchange child for subcontractor
	 */
	child?: Types.ObjectId;

	/**
	 * Development only
	 */
	isTest?: boolean;

	/**
	 * Interoperability settings
	 */
	interoperability?: {
		/**
		 * Is the interop protocol active for this consent
		 *
		 * @default false
		 */
		active: boolean;

		/**
		 * Which service is acting as the interop intermediary
		 * in this consent exchange
		 */
		interopService?: Types.ObjectId;
	};
}

export interface IConsentExchangeModel extends Model<IConsentExchange> {
	findLastExportForService(serviceId: string): Promise<IConsentExchangeModel>;

	findLastImportForService(serviceId: string): Promise<IConsentExchangeModel>;
}
