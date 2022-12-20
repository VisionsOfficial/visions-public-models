import { Schema } from "mongoose";
import { IService, IServiceModel } from "./service";

export const virtuals = (schema: Schema<IService, IServiceModel>) => {
	schema.virtual("identifiers", {
		ref: "Identifier",
		localField: "_id",
		foreignField: "service",
	});

	schema.virtual("datatypes", {
		ref: "DataType",
		localField: "_id",
		foreignField: "provenance",
	});

	schema.virtual("purposes", {
		ref: "Purpose",
		localField: "_id",
		foreignField: "service",
	});
};
