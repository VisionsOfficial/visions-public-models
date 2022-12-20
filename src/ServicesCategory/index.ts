import { model } from "mongoose";
import { IServicesCategory } from "./servicescategory";
import { servicesCategorySchema } from "./ServicesCategory.model";

export const ServicesCategory = model<IServicesCategory>(
	"ServicesCategory",
	servicesCategorySchema
);
