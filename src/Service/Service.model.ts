import { Schema, Types } from "mongoose";
import { IService } from "./service";

export const serviceSchema = new Schema<IService>(
	{
		name: {
			type: String,
			unique: true,
		},
		description: { type: String, default: "" },
		logo: {
			type: String,
			default: "default.jpg",
		},
		password: String,
		authMethod: {
			type: Number,
			default: -1,
		},
		purposes: [{ type: Types.ObjectId, ref: "Purpose" }],
		datatypes: [{ type: Types.ObjectId, ref: "DataType" }],
		processors: [{ type: Types.ObjectId, ref: "Processor" }],
		isProcessing: {
			type: Boolean,
			default: false,
		},
		identifiers: [{ type: Types.ObjectId, ref: "Identifier" }],
		serviceKey: String,
		serviceSecretKey: String,
		checks: {
			isUsingSSO: { type: Boolean, default: false },
			isDataUser: { type: Boolean, default: false },
			isDataProvider: { type: Boolean, default: false },
			isInteropService: { type: Boolean, default: false },
			isVisionsInternalService: { type: Boolean, default: false },
		},
		urls: {
			dataExport: String,
			consentImport: String,
			dataImport: String,
			consentExport: String,
			authURL: String,
			requestToken: String,
			registerURL: String,
			termsOfUse: String,
			legalNotices: String,
			website: String,
		},
		selfDescription: {
			hasLegallyBindingName: { type: String, default: "" },

			/**
			 * vcard:Address
			 */
			hasLegallyBindingAddress: {
				/**
				 * vcard:street-address
				 */
				streetAddress: { type: String, default: "" },

				/**
				 * vcard:locality
				 */
				locality: { type: String, default: "" },

				/**
				 * vcard:country-name
				 */
				countryName: { type: String, default: "" },
			},
			hasLegalForm: { type: String, default: "" },
			hasJurisdiction: { type: String, default: "" },
			hasSalesTaxID: { type: String, default: "" },
			hasLegalRegistrationNumber: { type: String, default: "" },
			/**
			 * xsd:anyURI
			 */
			hasWebAddress: { type: String, default: "" },

			/**
			 * Contact person for legal purposes
			 * schema:Person
			 * vcard:Agent
			 */
			hasIndividualContactLegal: {
				givenName: { type: String, default: "" },
				familyName: { type: String, default: "" },
				email: { type: String, default: "" },
			},

			/**
			 * Contact person for technical purposes
			 * schema:Person
			 * vcard:Agent
			 */
			hasIndividualContactTechnical: {
				givenName: { type: String, default: "" },
				familyName: { type: String, default: "" },
				email: { type: String, default: "" },
			},
		},
		registration: {
			type: String,
			default: "",
		},
		registeredOfficeAddress: {
			type: String,
			default: "",
		},
		legalRepresentative: {
			name: {
				type: String,
				default: "",
			},
			email: {
				type: String,
				default: "",
			},
			profession: {
				type: String,
				default: "",
			},
		},
		DPO: {
			name: {
				type: String,
				default: "",
			},
			email: {
				type: String,
				default: "",
			},
		},
		needsSpecificAccessToken: Boolean,
		email: {
			type: String,
			default: "",
		},
		securityProfile: {
			authSupport: { type: String, default: "" },
			dataConfidentiality: { type: String, default: "" },
			datUsageControl: { type: String, default: "" },
			serviceIsolation: { type: String, default: "" },
			appExecRessources: { type: String, default: "" },
			auditLogging: { type: String, default: "" },
			integrityProtection: { type: String, default: "" },
			integrityScope: { type: String, default: "" },
		},
		type: {
			type: Number,
			default: 0,
		},
		knownEthereumAddresses: [String],
		schema_version: { type: String, default: "1" },
	},
	{
		timestamps: true,
	}
);
