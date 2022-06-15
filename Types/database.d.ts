import type { RootScope } from ".";
import type { AchievementName, Benefit, EmployeeLevel, Items } from "./constants";
import type { NewGameSettings } from "./settings";

export interface Database {
	achievements: Array<Achievement>;
	benefits: Array<Benefit>;
	featureBonuses: Array<FeatureBonus>;
	items: Items;
	languages: Array<Language>;
	newGameSettings: NewGameSettings;
	outsourcingCompetitors: Record<string, OutsourcingCompetitor>;
}

export interface Achievement {
	name: AchievementName;
	trigger(rootScope: RootScope): void;
}

export interface FeatureBonus {
	level: EmployeeLevel;
	qualityModifier: number;
	efficiencyModifier: number;
}

export interface Language {
	name: string;
	key: string;
	/** relative to app */
	path: string;
}

export interface OutsourcingCompetitor {
	name: string;
	competitiveness: number;
	/** relative to app */
	logoPath: string;
}
