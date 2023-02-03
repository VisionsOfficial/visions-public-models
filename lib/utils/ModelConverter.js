"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelConverter = void 0;
/**
 * Converts Models to Api Response models, stripping away unnecessary information
 * @author Felix Bole
 */
class ModelConverter {
    /**
     * Converts IDmodel to the response Identifier (User) format model
     * @returns object A new identifier with the correct format
     */
    static toIdentifierModel(i) {
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
    static toServiceModel(owner, s) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const service = {
            name: s.name,
            logo: s.logo,
            datatypes: s.datatypes,
            // processors: s.processors,
            urls: {
                website: ((_a = s.urls) === null || _a === void 0 ? void 0 : _a.website) || "",
                termsOfUse: ((_b = s.urls) === null || _b === void 0 ? void 0 : _b.termsOfUse) || "",
                legalNotices: ((_c = s.urls) === null || _c === void 0 ? void 0 : _c.legalNotices) || "",
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
                consentImport: ((_d = s.urls) === null || _d === void 0 ? void 0 : _d.consentImport) || null,
                consentExport: ((_e = s.urls) === null || _e === void 0 ? void 0 : _e.consentExport) || null,
                dataImport: ((_f = s.urls) === null || _f === void 0 ? void 0 : _f.dataImport) || null,
                dataExport: ((_g = s.urls) === null || _g === void 0 ? void 0 : _g.dataExport) || null,
                registerURL: ((_h = s.urls) === null || _h === void 0 ? void 0 : _h.registerURL) || null,
                authURL: ((_j = s.urls) === null || _j === void 0 ? void 0 : _j.authURL) || null,
                requestToken: ((_k = s.urls) === null || _k === void 0 ? void 0 : _k.requestToken) || null,
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
    static toDatatypeModel(d) {
        if (!d)
            return;
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
    static toPurposeModel(p) {
        const purpose = {
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
    static toPurposeModelMinimal(p) {
        const purpose = {
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
exports.ModelConverter = ModelConverter;
