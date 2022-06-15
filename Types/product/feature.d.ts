import type { ComponentName, FeatureName } from "../constants";

export interface FeatureInstance {
	activated: boolean;
	efficiency: FeatureCurrentMax;
	featureName: FeatureName;
	id: string;
	premiumFeatures: []; // @TODO
	productId: string;
	quality: FeatureCurrentMax;
	requirements: FeatureRequirements;
	timeSlots?: Array<TimeSlot>;
}

export interface TimeSlot {
	contract: Contract | null;
	end: number;
	id: string;
	start: number;
}

export interface Contract {
	acceptedCustomerOffer: boolean;
	autoRenew: boolean;
	competitorProductId: string;
	completed: boolean;
	cpm: number;
	dailyPayment: number;
	featureInstanceId: string;
	guaranteedImpressions: number;
	history: Array<ContractHistory>;
	id: string;
	initialCpm: number;
	length: number;
	maxImpressions: number;
	number: number;
	offers: Array<ContractOffer>;
	productId: string;
	startDay: number;
	started: boolean;
	totalPayout: number;
}

export interface ContractHistory {
	day: number;
	impressions: number;
	progress: number;
}

export interface ContractOffer {
	cpm: number;
	fromCustomer: boolean;
	id: string;
	mood: number;
}

export interface FeatureCurrentMax {
	current: number;
	max: number;
}

export type FeatureRequirementName = ComponentName | "ResearchPoint";
export type FeatureRequirements = {
	[K in FeatureRequirementName]?: number;
};
