import { model } from "mongoose";
import { IProcessor } from "../types/processor";
import { processorSchema } from "./Processor.model";

/**
 * @author Yanick Kifack
 * @todo Verify relevance and what its for -> Documentation
 */
export const Processor = model<IProcessor>("Processor", processorSchema);
