import { Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface IDatasetRequest extends AllSchemas {
	/**
	 * Owner of the dataset
	 */
	dataProvider?: Types.ObjectId;

	/**
	 * Service making the request
	 */
	dataUser?: Types.ObjectId;

	/**
	 * Dataset on which the request is made
	 */
	dataset?: Types.ObjectId;

	/**
	 * Purpose for which the request is made
	 */
	purpose?: Types.ObjectId;

	/**
	 * Authorized by the dataProvider
	 */
	authorized: boolean;
}
