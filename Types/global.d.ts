import type { ModView, RootScope } from ".";
import type {
	AchievementNames,
	AdsFeatureName,
	Building,
	BuildingNames,
	Component,
	ComponentNames,
	Emotion,
	EmployeeType,
	Enums,
	Event,
	EventNames,
	Feature,
	FeatureCategory,
	FeatureNames,
	Framework,
	FrameworkNames,
	HelpTopic,
	HelpTopicNames,
	InvestmentProjectNames,
	Investor,
	InvestorNames,
	ItemCategories,
	ItemNames,
	Items,
	Loan,
	MarketingInterests,
	MarketingPackage,
	MarketingPackageNames,
	ProductType,
	ProductTypeNames,
	RackDevice,
	RackDeviceNames,
	ResearchCategories,
	ResearchItem,
	ResearchItemNames,
	Server,
	ServerNames
} from "./constants";
import type { Configuration } from "./options";
import type { Cheats, ManagerBonus } from "./misc";
import type { Employee, Workstation } from "./employees";
import type { Database } from "./database";
import type { CompetitorProduct, InvestmentProjects, Settings } from "./settings";
import type { Helpers } from "./helpers";

declare global {
	/**
	 * Convert an object to a comparison string
	 *
	 * @param {Object} obj - the object
	 * @param {Array<string>} keys - the keys to return from the object
	 */
	function getComparisonString(obj: Record<string, unknown>, keys: Array<string>): string;
	/**
	 * Calculate the specified volume value
	 *
	 * @param {Boolean} [music=false] - (false) calulate sfx, (true) calculate music
	 * @returns {Number}
	 */
	function CalculateVolume(music?: boolean): number;
	function HideMouseoverEvents(): void;
	/**
	 * Manage window fullscreen value
	 *
	 * @param {Boolean} fullscreen
	 */
	function SetFullScreen(fullscreen: boolean): void;
	function PushAsStack(e: Array<unknown>, t: unknown, n: number): void;
	/**
	 * Calculate an employee's current employment duraiton
	 *
	 * @param {Employee} employee - the employee
	 * @param {(Number | String)} currentTime - the time to calculate from
	 * @returns {Number}
	 */
	function CalculateEmploymentDuration(employee: Employee, currentTime: number | string): number;
	/**
	 * Calculate the days since something
	 *
	 * @param {(number | String)} currentTime - the time to calculate from
	 * @param {(Number | String)} since - the time to calculate since
	 * @returns {Number}
	 */
	function CalculateDaysSince(currentTime: number | string, since: number | string): number;
	/**
	 * get the root scope
	 *
	 * * if you want something that isn't a function (for something like egar evaluation), look at _RootScope (nullable)
	 *
	 * @returns {RootScope}
	 */
	function GetRootScope(): RootScope;
	/**
	 * If any dialogue is open
	 *
	 * @returns {Boolean}
	 */
	function IsDialogOpen(): boolean;
	/**
	 * Get the difference between a date and game start time in days
	 *
	 * @param {(Date | Number | String)} date - the date to compare with
	 * @returns {number}
	 */
	function GetDateDiffInDays(date: Date | number | string): number;
	/**
	 * Get the difference between a date and game start time in hours
	 *
	 * @param {(Date | Number | String)} date - the date to compare with
	 * @returns {number}
	 */
	function GetDateDiffInHours(date: Date | number | string): number;
	/**
	 * Remove an employee (resigning, firing)
	 *
	 * @param {Employee} employee - the employee to remove
	 * @param {Boolean} [resigned=false] - if the employee quit
	 * @param {Boolean} [noAddAction=false] - if an action should not be added
	 */
	function RemoveEmployee(employee: Employee, resigned?: boolean, noAddAction?: boolean): void;
	/**
	 * Get the workstation of an employee's manager
	 *
	 * @param {string} id - the employee id
	 * @returns {(void | Workstation)}
	 */
	function GetManagerWorkstationByEmployeeId(id: string): void | Workstation;
	/**
	 * Get an employee's manager bonus
	 *
	 * @param {Employee} employee - the employee
	 * @param {Workstation} [managerWorkstation] -the manager's workstation
	 */
	function GetManagerBonus(employee: Employee, managerWorkstation?: Workstation): ManagerBonus;
	/**
	 * Get an employee's mood penalty (ceo is always 0)
	 *
	 * @param {Employee} employee - the employee
	 * @returns {number}
	 */
	function GetMoodPenalty(employee: Employee): number;
	/**
	 * Toggle the loader
	 *
	 * @param {Boolean} loading - if the loader should be shown
	 * @param {Function} [cb] - a callback function
	 */
	function ToggleLoader(loading: boolean, cb?: () => void): void;
	function GetNewSettings(): Settings;
	const _RootScope: RootScope | null;
	const Cheats: Cheats;
	const Configuration: Configuration;
	const Enums: Enums;
	const ComponentNames: ComponentNames;
	const Components: Array<Component>;
	const MarketingPackageNames: MarketingPackageNames;
	const MarketingInterests: MarketingInterests;
	const MarketingPackages: Array<MarketingPackage>;
	const BuildingNames: BuildingNames;
	const Buildings: Array<Building>;
	const InvestmentProjectNames: InvestmentProjectNames;
	const InvestmentProjects: InvestmentProjects;
	const ItemNames: ItemNames;
	const ItemCategories: ItemCategories;
	const items: Items; // yes, this is lowercase
	const RackDeviceNames: RackDeviceNames;
	const RackDevices: Array<RackDevice>;
	const FrameworkNames: FrameworkNames;
	const Frameworks: Array<Framework>;
	const FeatureNames: FeatureNames;
	const AdsFeatureNames: Array<AdsFeatureName>;
	const FeatureCategories: Array<FeatureCategory>;
	const Features: Array<Feature>;
	const ServerNames: ServerNames;
	const Servers: Array<Server>;
	const ResearchCategories: ResearchCategories;
	const ResearchItemNames: ResearchItemNames;
	const ResearchItems: Array<ResearchItem>;
	const HelpTopicNames: HelpTopicNames;
	const HelpTopics: Array<HelpTopic>;
	const Emotions: Array<Emotion>;
	const Investors: Array<Investor>;
	const Database: Database;
	const EmployeeTypes: Array<EmployeeType>;
	const Loans: Array<Loan>;
	const AchievementNames: AchievementNames;
	const Generators: unknown; // @TODO Generators
	const EventNames: EventNames;
	const InvestorNames: InvestorNames;
	const Events: Array<Event>;
	const ProductTypeNames: ProductTypeNames;
	const ProductTypes: Array<ProductType>;
	const CompetitorProducts: Array<CompetitorProduct>;
	const Helpers: Helpers;
	const Game: unknown;
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports
	const _: typeof import("lodash");

	interface ModExports {
		initialize?(modPath: string): void;
		onBackgroundWorkerStart?(modPath: string): void;
		onLoadGame?(settings: Settings): void;
		onNewDay?(settings: Settings): void;
		onNewHour?(settings: Settings): void;
		onUnsubscribe?(callback: () => void): void;
		views?: Array<ModView>;
	}
}
