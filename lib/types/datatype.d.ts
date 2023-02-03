import { Types } from "mongoose";
import { AllSchemas } from "src/types/models";

export interface IDataType extends AllSchemas {
	/**
	 * Datatype name
	 */
	name: string;

	/**
	 * Datatype name on the service's side
	 *
	 * @deprecated
	 */
	nameInService?: string;

	/**
	 * Reference to the data collection inside of which the datatype is stored
	 */
	dataTypeField?: Types.ObjectId;

	/**
	 * Datatype description
	 */
	description?: string;

	/**
	 * Datatype category
	 * Personal / Professionnal / Intimite...
	 */
	category?: string;

	/**
	 * Datatype provenance
	 * The service from where the datatype comes
	 *
	 * @todo This field should be called service
	 */
	provenance?: Types.ObjectId;

	/**
	 * Timestamp of when the datatype was created
	 *
	 * @deprecated Use createdAt instead
	 */
	time?: Date;

	/**
	 * Reference to global datatype
	 */
	globalDatatype?: Types.ObjectId;

	conservations: Types.ObjectId[];

	/**
	 * Information about data conservation
	 */
	conservationType?: string;
	conservationUnit?: string;
	conservationLength?: string;
	conservationDescription?: string;

	/**
	 * Store frequency to exchange the data
	 */
	frequency?: {
		/**
		 * @example 'daily' | 'monthly'...
		 */
		unit?: string;
		value?: string;
		repeats?: boolean;
	};

	/**
	 * Icon used to represent the datatype visually in views
	 *
	 * @deprecated unused
	 */
	privacyIcon?: string;
}
