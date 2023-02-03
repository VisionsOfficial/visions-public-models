import { model } from "mongoose";
import { IService, IServiceModel } from "../types/service";
import { serviceSchema } from "./Service.model";
import { virtuals } from "./virtuals";

virtuals(serviceSchema);

/**
 * Represents a data provider or data user
 * @author Matthias De Bièvre
 * @author Yanick Kifack
 * @author Felix Bole <felix@visionspol.eu>
 */
export const Service = model<IService, IServiceModel>("Service", serviceSchema);
