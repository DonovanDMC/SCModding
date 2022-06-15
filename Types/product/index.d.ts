
import type {
	FeatureName,
	FrameworkName,
	Investor,
	ProductTypeName,
	ServerName
} from "../constants";

export interface Product {
	ads: []; // @TODO
	ageInDays: number;
	campaigns: Array<Campaign>; // @TODO
	frameworkName: FrameworkName;
	hostingAllocation: number;
	id: string;
	investments: []; // @TODO
	investor: Investor; // @TODO check against non-investor games
	/** relative to app */
	logoPath: string;
	mergers: []; // @TODO
	name: string;
	nextDdosAttack: number;
	ownedPercentage: number; // @TODO check against non-investor games
	position: number;
	productTypeName: ProductTypeName;
	resolvedTickets: number;
	servers: ProductServers;
	stats: ProductStats;
	supportTeams: Array<SupportTeam>;
	ticketResolveTimes: []; // @TODO
	tickets: []; // @TODO
	totalTickets: number;
}

export type CampaignType = "EmailCampaigns" | "TextAds" | "BannerAds" | "VideoAds" | "RadioPodcast" | "TvCommercial"; // @FIXME verify names
export interface Campaign {
	conversionRate: number;
	cpm: number;
	dailyBudget: number;
	featureName: FeatureName;
	id: string;
	interests: []; // @TODO
	isRunning: boolean;
	lastPayment: number;
	maxDailyBudget: number;
	price: number;
	reach: number;
	reportCreated: boolean;
	/** unsure what this is, I've seen the key `Survey` so far */
	reportRequirements: Record<string, number>;
	targets: []; // @TODO
	type: CampaignType;
}


// if an item gets set to a value, it will not disappear when falling to zero
export type ProductServers = {
	[K in ServerName]?: number;
};

export interface ProductStats {
	onlineUsers: Array<ProductOnlineUserHistory>;
	performance: ProductPerformance | Record<string, never>; // I've seen an empty object (Settings.products) and a full object (Settings.progress.products)
	registeredUsers: Array<ProductRegisteredUserHistory>;
}

export interface ProductRegisteredUserHistory {
	adblockers: Array<AdBlocker>;
	amount: number;
	day: number;
	expenses: number;
	income: number;
	revenue: number;
	satisfaction: number;
}

export type ProductOnlineUserHistory = unknown; // @TODO

export interface AdBlocker {
	raw: number;
	obfuscated: number;
	final: number;
}

export type ProductPerformanceState = "Critical" | "Unstable" | "Stable";
export interface ProductPerformance {
	availableCu: number;
	executedMs: number;
	onlineUsers: number;
	peakCu: number;
	requiredCu: number;
	responseTime: number;
	serverUsage: number;
	serverUsageHistory: Array<number>;
	state: ProductPerformanceState;
}

export interface SupportTeam {
	high: boolean;
	id: string;
	low: boolean;
	medium: boolean;
	name: string;
}

export interface Progress {
	products: Record<string, ProductProgress>;
}

export interface ProductProgress {
	activeDdos: boolean;
	activeViralBoost: boolean;
	campaigns: ProgressCampaign;
	mergers: []; // @TODO
	stats: ProgressStats;
	users: ProgressUsers;
}

export interface ProgressCampaign {
	actualConversionRate: number;
	audienceReached: number;
	campaignId: string;
	convertedUsers: number;
	featureName: FeatureName;
	impressions: number;
	totalSpent: number;
}

export interface ProgressStats {
	efficiency: number;
	performance: ProductPerformance;
	quality: number;
	valuation: number;
	supportSatisfaction?: number; // @TODO check to make sure this does actually exist
}

export interface ProgressUsers {
	adblockers: AdBlocker;
	conversionRate: number;
	marketingUsers: number;
	online: number;
	onlineUsers: ProductOnlineUserHistory;
	potentialUsers: number;
	registeredUsers: ProductRegisteredUserHistory;
	satisfaction: number;
	total: number;
	totalChange: number;
}

export interface ProgressRegisteredUserHistory {
	day: number;
	amount: number;
}

export interface ProgressOnlineUserHistory {
	day: number;
	hour: number;
	amount: number;
	ddosUsers: number;
}

export * from "./feature";
