import { HydratedDocument, Types } from "mongoose";
import { IIdentifier } from "../types/identifier";

/**
 * Converts Models to Api Response models, stripping away unnecessary information
 * @author Felix Bole
 */
export class ModelConverter {
	/**
	 * Converts IDmodel to the response Identifier (User) format model
	 * @returns object A new identifier with the correct format
	 */
	static toIdentifierModel(i: HydratedDocument<IIdentifier>) {
		const result = {
			id: i._id,
			email: i.email,
			userServiceId: i.userServiceId,
			userKey: i.userKey,
			emailVerified: i.emailVerified,
			results: i.endpoints,
		};

		return result;
	}

	/**
	 * Converts Service to the response Service format model for the owner
	 * @param owner If the returned service is for the owner or not
	 * @param s The Service
	 * @returns A new service with the correct format
	 * @todo Don't use any
	 */
	static toServiceModel(owner: boolean, s: any) {
		type PublicServiceSchema = {
			name: string;
			logo?: string;
			datatypes?: any[];
			purposes: any[];
			urls: {
				website: string;
				termsOfUse: string;
				legalNotices: string;
			};
			governance: {
				registration?: string;
				registeredOfficeAddress?: string;
				legalRepresentative?: any;
				dataProtectionOfficer?: any;
			};
			id?: string;
			serviceKey?: string;
			serviceSecretKey?: string;
			endpoints?: any;
		};

		const service: PublicServiceSchema = {
			name: s.name,
			logo: s.logo,
			datatypes: s.datatypes,
			// processors: s.processors,
			urls: {
				website: s.urls?.website || "",
				termsOfUse: s.urls?.termsOfUse || "",
				legalNotices: s.urls?.legalNotices || "",
			},
			governance: {
				registration: s.registration,
				registeredOfficeAddress: s.registeredOfficeAddress,
				legalRepresentative: s.legalRepresentative,
				dataProtectionOfficer: s.DPO,
			},
			purposes: [],
		};

		if (owner) {
			service.id = s.id;
			service.serviceKey = s.serviceKey;
			service.serviceSecretKey = s.serviceSecretKey;
			service.endpoints = {
				consentImport: s.urls?.consentImport || null,
				consentExport: s.urls?.consentExport || null,
				dataImport: s.urls?.dataImport || null,
				dataExport: s.urls?.dataExport || null,
				registerURL: s.urls?.registerURL || null,
				authURL: s.urls?.authURL || null,
				requestToken: s.urls?.requestToken || null,
			};
		}

		service.datatypes = [];
		service.purposes = [];
		// service.processors = [];

		if (s.datatypes) {
			for (const d of s.datatypes) {
				service.datatypes.push(this.toDatatypeModel(d));
			}
		}

		for (const p of s.purposes) {
			service.purposes.push(this.toPurposeModel(p));
		}

		return service;
	}

	/**
	 * @todo Don't use any
	 */
	static toDatatypeModel(d: any) {
		if (!d) return;

		return {
			id: d.id,
			name: d.name,
			description: d.description,
			provenance: d.provenance.name,
			conservation: {
				type: d.conservationType,
				unit: d.conservationUnit,
				length: d.conservationLength,
				description: d.conservationDescription,
			},
			frequency: d.frequency,
		};
	}

	/**
	 * @todo Don't use any
	 */
	static toPurposeModel(p: any) {
		const purpose: any = {
			id: p.id,
			name: p.name,
			description: p.description,
			datatypes: [],
			importedDatatypes: [],
			service: p.service.name,
		};

		for (const d of p.datatypes) {
			if (d.id) {
				purpose.datatypes.push(this.toDatatypeModel(d));
			}
		}

		for (const d of p.importedDatatypes) {
			if (d.datatype) {
				purpose.importedDatatypes.push({
					datatype: this.toDatatypeModel(d.datatype),
					used: d.used,
				});
			}
		}

		return purpose;
	}

	/**
	 * @todo Don't use any
	 */
	static toPurposeModelMinimal(p: any) {
		const purpose: any = {
			id: p.id,
			name: p.name,
			description: p.description,
			datatypes: [],
			importedDatatypes: [],
			service: p.service.name,
		};

		for (const d of p.datatypes) {
			purpose.datatypes.push({ name: d.name, id: d.id });
		}

		for (const d of p.importedDatatypes) {
			purpose.importedDatatypes.push({ name: d.name, id: d.id });
		}

		return purpose;
	}
}
