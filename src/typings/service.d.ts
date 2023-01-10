import { HydratedDocument, Model, Types } from "mongoose";
import { IDataType } from "src/typings/datatype";
import { IIdentifier } from "src/typings/identifier";
import { AllSchemas } from "src/models";
import { IPurpose } from "src/typings/purpose";

type ServiceChecks = {
	isUsingSSO: boolean;
	isDataUser: boolean;
	isDataProvier: boolean;

	/**
	 * Interop services can sit in between services during a
	 * data exchange protocol to do the mapping to a standardized model on the
	 * exchanged data format
	 */
	isInteropService: boolean;

	/**
	 * Internal services are those used within Visions to enable testing for
	 * partners and full protocols testing such as with interop services.
	 */
	isVisionsInternalService: boolean;
};

type ServiceUrls = {
	/**
	 * The URL of the service used to export data
	 */
	dataExport?: string;

	/**
	 * The URL to send signed consent to exporting service
	 */
	consentImport?: string;

	/**
	 * url used by importing service
	 */
	dataImport?: string;

	/**
	 * The URL of the service used to authenticate a new user
	 */
	consentExport?: string;

	/**
	 * Service's website registration link
	 */
	registerURL?: string;

	/**
	 * @deprecated
	 */
	authURL?: string;

	/**
	 * @deprecated
	 */
	requestToken?: string;

	termsOfUse?: string;
	legalNotices?: string;
	website?: string;
};

type ServiceSelfDescription = {
	hasLegallyBindingName?: string;
	hasLegallyBindingAddress?: {
		streetAddress?: string;
		locality?: string;
		countryName?: string;
	};
	hasLegalForm?: string;
	hasJurisdiction?: string;
	hasSalesTaxID?: string;
	hasLegalRegistrationNumber?: string;
	hasWebAddress?: string;
	hasIndividualContactLegal?: {
		givenName?: string;
		familyName?: string;
		email?: string;
	};
	hasIndividualContactTechnical?: {
		givenName?: string;
		familyName?: string;
		email?: string;
	};
};

type ServiceSecurityProfile = {
	authSupport?: string;
	dataConfidentiality?: string;
	dataUsageControl?: string;
	serviceIsolation?: string;
	appExecResources?: string;
	auditLogging?: string;
	integrityProtection?: string;
	integrityScope?: string;
};

export interface IService extends AllSchemas {
	name: string;
	description?: string;
	logo?: string;
	password: string;
	authMethod: number;

	/**
	 * @deprecated use query by service on purpose model instead
	 */
	purposes?: Types.ObjectId[];

	/**
	 * @deprecated use query by service on datatypes model instead
	 */
	datatypes?: Types.ObjectId[];

	/**
	 * @experimental
	 */
	processors?: Types.ObjectId[];

	isProcessing: false;

	/**
	 * @deprecated in favor of query byService on identifier model
	 */
	identifiers?: Types.ObjectId[];

	/**
	 * VisionsTrust credentials clientId
	 */
	serviceKey: string;

	/**
	 * VisionsTrust credentials clientSecret
	 */
	serviceSecretKey: string;

	checks: ServiceChecks;
	urls?: ServiceUrls;
	selfDescription?: ServiceSelfDescription;
	registration?: string;

	/**
	 * @deprecated in favor of self-description
	 */
	registeredOfficeAddress?: string;

	/**
	 * @deprecated in favor of self-description
	 */
	legalRepresentative?: {
		name?: string;
		email?: string;
		profession?: string;
	};

	/**
	 * @deprecated in favor of self-description
	 */
	DPO?: {
		name?: string;
		email?: string;
	};

	/**
	 * @experimental
	 */
	needsSpecificAccessToken?: boolean;

	/**
	 * @deprecated in favor of self-description
	 * @todo redefine the need of the email (potential need for login credentials)
	 */
	email?: string;

	securityProfile?: ServiceSecurityProfile;

	/**
	 * Type of service, if a platform with a database or an agnostic API
	 * @example 0 = Platform
	 * @example 1 = API
	 */
	type: number;

	/**
	 * @experimental
	 */
	knownEthereumAddresses: string[];
}

export interface IServiceModel extends Model<IService> {
	identifiers: Promise<HydratedDocument<IIdentifier>[]>;
	datatypes: Promise<HydratedDocument<IDataType>[]>;
	purposes: Promise<HydratedDocument<IPurpose>[]>;
}
