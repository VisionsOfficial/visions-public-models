import { model } from "mongoose";
import { IService } from "../typings/service";
import { serviceSchema } from "./Service.model";

export const Service = model<IService>("Service", serviceSchema);
