import { Schema } from "mongoose";
import { IService, IServiceModel } from "../types/service";

export const virtuals = (schema: Schema<IService, IServiceModel>) => {
	/**
	 * @todo
	 */
	// schema.virtual("identifiers", {
	// 	ref: "Identifier",
	// 	localField: "_id",
	// 	foreignField: "service",
	// });
	/**
	 * @todo
	 */
	// schema.virtual("datatypes", {
	// 	ref: "DataType",
	// 	localField: "_id",
	// 	foreignField: "provenance",
	// });
	/**
	 * @todo
	 */
	// schema.virtual("purposes", {
	// 	ref: "Purpose",
	// 	localField: "_id",
	// 	foreignField: "service",
	// });
};
