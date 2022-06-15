import type { AchievementName, HelpTopic } from "./constants";

export interface Configuration {
	/** default(1.24): 40 */
	AD_SPACE_MAX_QUEUE: number;
	/** default(1.24): 15 */
	CELL_PRICE: number;
	/** default(1.24): "$0,0" */
	CURRENCY_FORMAT: string;
	/** default(1.24): "0,0" */
	CURRENCY_FORMAT_NOSIGN: string;
	/** default(1.24): 30 */
	DAYS_IN_MONTH: number;
	/** default(1.24): 2 */
	DDOS_ATTACK_MULTIPLIER: number;
	/** default(1.24): 3000 */
	EMPLOYEE_UPGRADE_PRICE: number;
	/** default(1.24): 20 */
	GRID_SIZE: number;
	/** default(1.24): 36 */
	HOURS_TO_RESOLVE_TICKETS: number;
	/** default(1.24): 3400000000 */
	INTERNET_POPULATION: number;
	/** default(1.24): 800 */
	INVESTMENT_PROJECT_MIN_DAYS: number;
	/** default(1.24): 60 */
	InitialCallInSickDaysLeft: number;
	/** default(1.24): 200000000000 */
	MAXIMUM_CU_FROM_VIRTUAL_SERVERS: number;
	/** default(1.24): 200000000000 */
	MAX_CU_FROM_VIRTUAL_SERVERS: number;
	/** default(1.24): 800 */
	MINUTES_PER_LEAD: number;
	/** default(1.24): 74 */
	MINUTES_PER_RESEARCH_POINT: number;
	/** default(1.24): 150 */
	MS_PER_TICK: number; // 150
	/** default(1.24): 0.5 */
	PAGEVIEWS_PER_USER_PER_MINUTE: number;
	/** default(1.24): 4.3 */
	PRICE_EXPECTATION_MAXIMUM: number;
	/** default(1.24): 1.9 */
	PRICE_EXPECTATION_MINIMUM: number;
	PRODUCTION_BASED_EMPLOYEE_TYPES: Array<string>;
	/** default(1.24): 50000000 */
	RETIREMENT_FUND_GOAL: number;
	/** default(1.24): 25 */
	SELL_WEBSITE_TAXES: number;
	/** default(1.24): 5 */
	SELL_WEBSITE_TRADING_FEE: number;
	SUBVERSION: number;
	TASK_BASED_EMPLOYEE_TYPES: Array<string>;
	TAX_BRACKETS: Record<"base" | "mid" | "high", TaxBracket>;
	USE_TEST_SAVEGAME: boolean;
	VERSION: boolean;
	/** default(1.24): 100 */
	VIRAL_BOOST_MULTIPLIER: number;
	/** default(1.24): 2 */
	WORKSTATION_HEIGHT: number;
	/** default(1.24): 2 */
	WORKSTATION_WIDTH: number;
}

export interface TaxBracket {
	percentage: number;
	start?: number;
}

export interface Options {
	activeAchievement: null | string; // @TODO confirm value is string
	allowRunInBackground: boolean;
	autoSaveInterval: number; // 10000
	clientId: string;
	completedAchievements: Array<AchievementName>;
	enabledMods: Array<string>;
	fullScreen: boolean;
	gameCompleted: boolean;
	hasCompletedWelcome: boolean;
	helpTopics: Array<HelpTopic>;
	helpTopicsSeen: Array<unknown>; // @TODO
	installedMods: Array<string>;
	language: string;
	lastSaveGame: string; // sg_*.json
	lastSessionBounds: Record<"height" | "width" | "x" | "y", number>;
	masterVolume: string;
	musicVolume: string;
	saveGames: Array<unknown>; // @TODO
	sfxVolume: number;
	temperatureFormat: "c" | "f";
	timeFormat: "12h" | "24h";
	uiScale: number;
	zoomLevel: ZoomLevel;
}

export interface ZoomLevel {
	title: `${string}%`;
	value: number;
}
