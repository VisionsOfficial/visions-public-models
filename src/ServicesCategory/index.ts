import { model } from "mongoose";
import { IServicesCategory } from "../typings/servicescategory";
import { servicesCategorySchema } from "./ServicesCategory.model";

export const ServicesCategory = model<IServicesCategory>(
	"ServicesCategory",
	servicesCategorySchema
);
