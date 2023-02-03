import { HydratedDocument, Types } from "mongoose";
import { IIdentifier } from "../types/identifier";
/**
 * Converts Models to Api Response models, stripping away unnecessary information
 * @author Felix Bole
 */
export declare class ModelConverter {
    /**
     * Converts IDmodel to the response Identifier (User) format model
     * @returns object A new identifier with the correct format
     */
    static toIdentifierModel(i: HydratedDocument<IIdentifier>): {
        id: Types.ObjectId;
        email: string;
        userServiceId: string;
        userKey: string;
        emailVerified: boolean;
        results: {
            dataImport?: import("../types/identifier").Endpoints[] | undefined;
            dataExport?: import("../types/identifier").Endpoints[] | undefined;
            consentImport?: import("../types/identifier").Endpoints[] | undefined;
            consentExport?: import("../types/identifier").Endpoints[] | undefined;
        } | undefined;
    };
    /**
     * Converts Service to the response Service format model for the owner
     * @param owner If the returned service is for the owner or not
     * @param s The Service
     * @returns A new service with the correct format
     * @todo Don't use any
     */
    static toServiceModel(owner: boolean, s: any): {
        name: string;
        logo?: string | undefined;
        datatypes?: any[] | undefined;
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
        id?: string | undefined;
        serviceKey?: string | undefined;
        serviceSecretKey?: string | undefined;
        endpoints?: any;
    };
    /**
     * @todo Don't use any
     */
    static toDatatypeModel(d: any): {
        id: any;
        name: any;
        description: any;
        provenance: any;
        conservation: {
            type: any;
            unit: any;
            length: any;
            description: any;
        };
        frequency: any;
    } | undefined;
    /**
     * @todo Don't use any
     */
    static toPurposeModel(p: any): any;
    /**
     * @todo Don't use any
     */
    static toPurposeModelMinimal(p: any): any;
}
