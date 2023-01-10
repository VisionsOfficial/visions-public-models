import { model } from "mongoose";
import { IProcessor } from "../typings/processor";
import { processorSchema } from "./Processor.model";

export const Processor = model<IProcessor>("Processor", processorSchema);
