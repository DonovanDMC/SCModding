export interface Controller {
	defaultClockRate: number;
	id: string;
	itemName: "centralizedClockrateController";
	log: Array<Log>;
	name: string;
	rules: Array<Rule>;
}

export interface Log {
	activated: boolean;
	clockRate: number;
	event: "ViralBoost"; // @TODO add name of ddos
	ruleName: string;
	/** Weekday (Day X, Year X) XX:XX[am/pm] (hours not padded, am/pm not present when using 24 hour time) */
	timestamp: string;
	website: string;
}

export interface Rule {
	active: boolean;
	clockRate: number;
	ddosAttack: number;
	id: string;
	name: string;
	viralBoost: number;
	websiteId: string;
}
