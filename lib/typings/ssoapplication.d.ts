import { Types } from "mongoose";
import { AllSchemas } from "src/models";

export interface ISSOApplication extends AllSchemas {
	service?: Types.ObjectId;
	name: string;
	policy: {
		shareEmail: boolean;
	};
	clientId: string;
	clientSecret: string;

	/**
	 * This should be formatted like : https://example.com
	 */
	origin?: string;

	/**
	 * Used for mobile apps, the format should be : com.example
	 */
	protocol?: string;

	/**
	 * If true, uses the protocol instead of the origin
	 */
	useProtocol: boolean;

	trustedOrigin: boolean;

	endpoints: {
		/**
		 * The endpoint where the application will check the SSO Token
		 */
		ssoTokenCheck?: string;
	};
}
