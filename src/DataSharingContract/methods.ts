import { Schema } from "mongoose";
import {
	IDataSharingContract,
	IDataSharingContractModel,
	IDataSharingContractMethods,
} from "../types/datasharingcontract";

export const methods = (
	schema: Schema<
		IDataSharingContract,
		IDataSharingContractModel,
		IDataSharingContractMethods
	>
) => {
	schema.methods.isValid = function () {
		return (
			this.dataProviderSignature.signed &&
			this.dataUserSignature.signed &&
			!this.revoked
		);
	};
};
