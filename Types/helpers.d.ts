import type { RootScope } from ".";
import type {
	Benefit,
	Component,
	EmployeeLevel,
	EmployeeTypeName,
	Enums,
	FeatureProperty,
	Item,
	ItemName,
	Priority,
	DemandType,
	InvestorMilestone,
	Building,
	MarketingPackage
} from "./constants";
import type { Language } from "./database";
import type {
	AdvancedDevelopmentTask,
	ChiefExecutiveOfficerEmployee,
	Demand,
	Employee,
	ManagerEmployee,
	Schedule,
	SimpleDevelopmentTask,
	Workstation
} from "./employees";
import type { EmptyDevice, Rack, RackPerformance } from "./hosting";
import type { ComponentMap } from "./misc";
import type {
	Campaign,
	FeatureInstance,
	Product,
	ProductProgress,
	ProgressStats
} from "./product";
import type { CompetitorProduct, Settings } from "./settings";
import type { FinanceData } from "./money";

export interface Helpers {
	/**
	 * Detach an employee from their manager
	 *
	 * @param {Employee} employee - the employee to detach
	 */
	DetachEmployeeFromManager(employee: Employee): void;
	/**
	 * Calculate an employee's base salary
	 * Formula:
	 *
	 * start = (Beginner) 2700, (Intermediate) 4500, (Expert) 6000
	 *
	 * start + 30 * (random - 50)
	 *
	 * @param {EmployeeTypeName} type - employee type, unused in base game
	 * @param {EmployeeLevel} level - the level of employee
	 * @param {number} random - a seemingly random number
	 * @returns {Number}
	 */
	CalculateBaseSalary(type: EmployeeTypeName, level: EmployeeLevel, random: number): number;
	/**
	 * Get a fee's hourly past due rate
	 *
	 * Low = 100, Medium = 150, High = 300
	 *
	 * @param {Priority} priority - the priority of the fee
	 * @returns {Number}
	 */
	GetPastDueFeeHourly(priority: Priority): number;
	// @TODO(CalculatePastDueFee): can't find any instances of this being used, so this is guesswork based off of implementation
	/**
	 * calculate a past due fee's fine
	 *
	 * @param {Object} fee - the fee
	 * @param {Number} fee.hoursLeft - the hours left to pay the fee
	 * @param {Priority} fee.urgency - the fee urgency
	 * @returns {Number}
	 */
	CalculatePastDueFee(fee: { hoursLeft: number; urgency: Priority; }): number;
	/**
	 * Get the text for a deadline
	 *
	 * positive = {hours} hours left
	 *
	 * negative = {hours} hours late
	 *
	 * @param {Number} hours
	 * @returns {String}
	 */
	GetDeadlineText(hours: number): string;
	/**
	 * Format a number with the K suffix
	 *
	 * @param {Number} num
	 */
	Kformatter(num: number): string;
	/**
	 * Calculate the production hours for a component (minimum of 1 hour)
	 *
	 * If the provided Component `type` is Component, `produceHours` is returned - else a loop is ran over each requirement
	 *
	 * @param {Component} component
	 * @returns {Number}
	 */
	CalculateComponentProductionHours(component: Component): number;
	/**
	 * Get a component's popover text
	 *
	 * @param {Component} component
	 * @returns {String}
	 */
	GetBaseComponentPopoverText(component: Component): string;
	/**
	 * Clone the given object (via JSON.parse(JSON.stringify()))
	 *
	 * @template T
	 * @param {T} object
	 * @param {Boolean} [keepId=false] - true to keep the original id, false to replace with a new id
	 * @returns {T}
	 */
	Clone<T>(object: T, keepId?: boolean): T;
	/**
	 * Get a development task from a component
	 *
	 * @param {Component} component
	 * @returns {(SimpleDevelopmentTask | AdvancedDevelopmentTask)}
	 */
	GetDevelopmentTask(component: Component): SimpleDevelopmentTask | AdvancedDevelopmentTask;
	/**
	 * Get the maximum amount of employees a manager can be in charge of
	 *
	 * Beginner = 3, Intermediate = 5, Expert = 8
	 *
	 * Beware, increasing this number will increase their amount of demands!
	 *
	 * @param {ManagerEmployee} employee
	 * @returns {Number}
	 */
	CalculateMaxInCharge(employee: ManagerEmployee): number;
	/**
	 * Get all employees
	 *
	 * @param {Boolean} [withUnseated=false] - if unseated employees should be included
	 * @param {Settings} [settings=GetRootScope().settings] - the settings instance, defaults to current game
	 * @returns {Array<Employee>}
	 */
	GetAllEmployees(withUnseated?: boolean, settings?: Settings): Array<Employee>;
	/**
	 * Calculate the cost of a benefit
	 *
	 * @param {Benefit} benefit - the benefit to calculate costs for
	 * @returns {BenefitCost}
	 */
	CalculateBenefitCost(benefit: Benefit): BenefitCost;
	/**
	 * Load a game
	 *
	 * @param {RootScope} rootScope - the root scope to load the game into
	 * @param {Settings} settings - the settings of the game
	 * @param {Function} callback - a callback for when the game has been loaded
	 */
	LoadGame(rootScope: RootScope, settings: Settings, callback: (settings: Settings) => void): void;
	/**
	 * Initialize a floor
	 *
	 * @param {Function} callback - a callback for completed initialization
	 */
	InitializeFloor(callback: () => void): void;
	ResetEngine(): void;
	/**
	 * Convert a requirements map into stacks of component information
	 *
	 * @param {ComponentMap} requirements - the components map
	 * @returns {Array<Stack>}
	 */
	ConvertRequirementsIntoStacks(requirements: ComponentMap): Array<Stack>;
	/**
	 * Get the required components to produce a component
	 *
	 * @param {Component} component - the component
	 * @returns {Array<Component>}
	 */
	GetRequiredComponentsForProduction(component: Component): Array<Component>;
	/**
	 * Log something to the console with a timestamp
	 *
	 * @param {*} info - what to log
	 * @param {("info" | "warning" | "error")} type - the type of log, always info if not warning/error
	 */
	ConsoleInfo(info: unknown, type?: "info" | "warning" | "error"): void;
	/**
	 * Get a item's popover text
	 *
	 * @param {Item} item
	 * @returns {String}
	 */
	GetItemPopover(item: Item): string;
	/**
	 * Calculate the minimum zoom
	 *
	 * @returns {Number}
	 */
	CalculateMinimumZoom(): number;
	/**
	 * Prepare a save game
	 *
	 * @param {Settings} settings - the save game
	 */
	PrepareSavegameCompatibility(settings: Settings): void;
	/**
	 * Compare two game version
	 *
	 * @param {string} lastVersion
	 * @param {string} currentVersion
	 * @param {Object} [options]
	 * @param {Boolean} [options.lexicographical=false]
	 * @param {Boolean} [options.zeroExtend=false]
	 * @returns {(-1 | 0 | 1)}
	 */
	VersionCompare(lastVersion: string, currentVersion: string, options?: Record<"lexicographical" | "zeroExtend", boolean>): -1 | 0 | 1;
	/**
	 * Calculate the office bonus
	 *
	 * @returns {Number}
	 */
	CalculateOfficeBonus(): number;
	/**
	 * Get the office bonus an item provides
	 *
	 * @param {Item} item - the item to get the bonus of
	 * @param {Boolean} [arg1]
	 * @returns {BonusByItem}
	 */
	CalculateBonusByItem(item: Item, arg1?: boolean): BonusByItem;
	/**
	 * Randomize a number within a given bounds
	 *
	 * @param {Number} num - the number to randomize from
	 * @param {Number} maxDifference - the maximum variation from `num`
	 * @param {Boolean} [round=false] - if the result should be rounded
	 * @param {Number} [places] - the number of places to fix the result to
	 * @returns {Number}
	 */
	RandomizeNumber(num: number, maxDifference: number, round?: boolean, places?: number): number;
	/**
	 * convert a number to a fixed number of places
	 *
	 * @param {Number} num - the number to fix
	 * @param {Number} places - the number of places to fix the result to
	 * @returns {Number}
	 */
	ToFixed(num: number, places: number): number;
	// @TODO
	RootScopeWatchAndDestroy(e: unknown,t: unknown, n: unknown, a: unknown): void;
	// @TODO
	RootScopeWatchCollectionAndDestroy(e: unknown,t: unknown, n: unknown): void;
	/**
	 * Get components an employee level can make
	 *
	 * @param {EmployeeLevel} level - employee level
	 * @returns {Array<Component>}
	 */
	GetComponentsByEmployeeLevel(level: EmployeeLevel): Array<Component>;
	/**
	 * Check if an employee's level checks or exceeds the specified level
	 *
	 * @param {EmployeeLevel} level - the level to check with
	 * @param {EmployeeLevel} check - the level to check against
	 * @returns {Boolean}
	 */
	IsEmployeeLevelCorrect(level: EmployeeLevel, check: EmployeeLevel): boolean;
	GetCurrentEmployeeStat(): unknown; // @TODO Game.Lifecycle
	/**
	 * Remove the employee from the provided workstation
	 *
	 * @param {Workstation} workstation - the workstation to clear of employees
	 */
	RemoveEmployeeFromWorkstation(workstation: Workstation): void;
	/**
	 * Convert a localization key to a localized string
	 *
	 * @param {String} key - the key to localize
	 * @param {Object} [replacers] - a key-value map of strings to replace
	 */
	GetLocalized(key: string, replacers?: Record<string, unknown>): string;
	/**
	 * Get the total amount of computing units a product has
	 *
	 * @param {Product} product - the product
	 * @param {Number} [hostingCu] - the amount produced by hosting
	 * @returns {Number}
	 */
	CalculateTotalCuByProduct(product: Product, hostingCu?: number): number;
	/**
	 * Calculate a product's hosting expensive
	 *
	 * @param {Product} product - the product
	 * @param {Number} [hostingCu] - the amount computing units produced by hosting
	 * @returns {Number}
	 */
	CalculateHostingExpenses(product: Product, hostingCu?: number): number;
	/**
	 * Calculate a product's expenses
	 *
	 * @param {Product} product - the product
	 * @returns {Number}
	 */
	CalculateProductExpenses(product: Product): number;
	/**
	 * Fire an employee
	 *
	 * @param {Employee} employee - the employee to fire
	 * @param {Boolean} [showConfirmation=false] - if a confirmation should not be shown
	 */
	FireEmployee(employee: Employee, noConfirmation?: boolean): void;
	/**
	 * Load a language (replaces the global `Language`)
	 *
	 * @param {Language} lang - the language to load
	 * @param {Function} callback - a function to call after loading
	 */
	LoadLanguage(lang: Language, callback: () => void): void;
	/**
	 * Calculate total working hours based on schedule
	 *
	 * @param {Schedule} schedule - the schedule to calculate with
	 * @returns {Number}
	 */
	CalculateTotalWorkHours(schedule: Schedule): number;
	/**
	 * Calculate an employee's hourly exhaustion
	 *
	 * @param {Employee} employee - the employee
	 * @param {Schedule} [schedule=employee.schedule] - the employee's schedule
	 * @returns {HourlyExhaustion}
	 */
	CalculateHourlyExhaustion(employee: Employee, schedule?: Schedule): HourlyExhaustion;
	/**
	 * Calculate a product's stock price
	 *
	 * @param {CompetitorProduct} product - the product
	 * @param {Number} valuation - the valuation of the prodct
	 * @returns {Number}
	 */
	CalculateStockPrice(product: CompetitorProduct, valuation: number): number;
	/**
	 * Calculate a product's valuation
	 *
	 * @param {Product} product - the product
	 * @returns {Number}
	 */
	CalculateValuation(product: Product | CompetitorProduct): number;
	/**
	 * Get a product's stock volume
	 *
	 * @param {Product} product - the product
	 * @returns {Number}
	 */
	GetStockVolume(product: Product | CompetitorProduct): number;
	/**
	 * Calculate a competitor product's daily income
	 *
	 * Sidenote: I've never managed to get a proper number out of this function, just NaN
	 *
	 * @param {CompetitorProduct} product - the product
	 * @returns {Number}
	 */
	CalculateDailyCompetitorProductIncome(product: CompetitorProduct): number;
	/**
	 * Calculate a product's daily revenue
	 *
	 * @param {Product} product - the product
	 * @param {Number} [days=GetRootScope().daysPlayed] - days
	 * @returns {Number}
	 */
	CalculateDailyProductRevenue(product: Product, days?: number): number;
	IsWebGlEnabled(): boolean;
	/**
	 * Send an employee home
	 *
	 * @param {Employee} employee - the employee to send home
	 * @param {Number} days - the number of days to send home
	 */
	SendHome(employee: Employee, days: number): void;
	UpdateAndSetUiDay(): void;
	UpdateTopbar(date?: Date): void;
	UpdateTopbarProgress(): void;
	/**
	 * Get the ceo's retirement info
	 *
	 * @returns {RetirementInfo}
	 */
	GetRetirementInfo(): RetirementInfo;
	UpdateRetirementProgress(): void;
	/**
	 * Calculate a feature's response time
	 *
	 * @param {FeatureInstance} feature - the feature
	 * @param {Number} [quality=feature.quality.current] - quality
	 * @param {Number} [efficiency=feature.efficiency.current] - efficiency
	 * @return {Number}
	 */
	CalculateInstanceResponseTime(feature: FeatureInstance, quality?: number, efficiency?: number): number;
	/**
	 * Calculate a feature's potential users
	 *
	 * @param {FeatureInstance} feature - the feature
	 * @param {Number} [quality=feature.quality.current] - quality
	 * @return {Number}
	 */
	CalculatePotentialUsersForInstance(feature: FeatureInstance, quality?: number): number;
	/**
	 * Calculate the potential users from a set of features
	 *
	 * @param {*} arg0 - this argument is not used in the function body, and I can't find any uses of `CalculatePotentialUsers`, so your guess is as good as mine
	 * @param {Array<FeatureInstance>} features - the features
	 */
	CalculatePotentialUsers(arg0: unknown, features: Array<FeatureInstance>): number;
	/**
	 * Get the stats for a product
	 *
	 * @param {Product} product - the product
	 * @param {ProductProgress} progress - the `Settings.progress` entry
	 * @param {Array<FeatureInstance>} features - the product's feature instances
	 * @param {Number} [hostingCu] - the hosting computing units
	 * @returns {ProductProgress}
	 */
	GetProductStats(product: Product, progress: ProductProgress, features: Array<FeatureInstance>, hostingCu?: number): ProgressStats;
	/**
	 * Calculate the total users online by time of day
	 *
	 * @param {Number} users - the number of registered users
	 * @param {*} arg1 - unknown, unused in code
	 * @param {(Date | string | number)} time - the time, only hours matter
	 */
	CalculateOnlineUsersByTime(users: number, arg1: unknown, time: Date | string | number): number;
	RunBackgroundWorker(arg0?: number | null, arg1?: Date | null, arg2?: boolean): void;
	/**
	 * Update a product's stats
	 *
	 * @param {Product} product - the product
	 */
	UpdateProductStats(product: Product): void;
	CreateProductProgressObject(): ProductProgressObject;
	/**
	 * Get the difference between two dates, in days
	 *
	 * @param {(Date | string | number)} current - the date to compare with
	 * @param {(Date | string | number)} compare - the date to compare to
	 * @returns {Number}
	 */
	GetDateDiffInDays(current: Date | string | number, compare: Date | string | number): number;
	SaveGrid(): void;
	/** Updates the iso dimmer for the current time of day - Internally uses `GetRootScope().settings.date.getHours()`, date being a Date object. */
	SetTimeOfDay(): void;
	/**
	 * Get efficiency multiplier
	 *
	 * @param {Number} efficiency
	 * @returns {Number}
	 */
	GetEfficiencyMultiplier(efficiency: number): number;
	/**
	 * Get a feature's multiplier
	 *
	 * @param {FeatureInstance} feature - the feature
	 * @param {FeatureProperty} type - the type of multiplier
	 * @param {Number} amount - the amount
	 * @returns {Number}
	 */
	GetInstanceMultiplier(feature: FeatureInstance, type?: FeatureProperty, amount?: number): number;
	/**
	 * Get the current week
	 *
	 * @returns {Number}
	 */
	GetCurrentWeek(): number;
	UpdateCompetitors(): void;
	/** GetRootScope().$evalAsync() */
	SafeApply(): void;
	/**
	 * Get an employee's schedule
	 *
	 * @param {Employee} employee - the employee
	 * @returns {Schedule}
	 */
	GetSchedule(employee: Employee): Schedule;
	/**
	 * Get the next component for production in a manager's production plan
	 *
	 * @param {ManagerEmployee} manager - the manager of the employee
	 * @param {Employee} employee - the employee
	 * @returns {(Array<Component> | null)}
	 */
	GetNextComponentInProduction(manager: ManagerEmployee, employee: Employee): Array<Component> | null;
	/**
	 * Generate demands for an employee
	 *
	 * Internally uses `Helpers.CalculateMaxInCharge` to determine amount of demands
	 *
	 * @param {Employee} employee - the employee
	 * @param {*} [arg1] - unused in code (technically passed to `Helpers.GenerateDemand`, but function parameters don't even accept it)
	 */
	AddDemandsForNewEmployee(employee: Employee, arg1?: unknown): void;
	/**
	 * Generate a demand for the specified employee
	 *
	 * @param {Employee} employee - the employee to generate a demand for
	 * @returns {(Demand | null)}
	 */
	GenerateDemand(employee: Employee): GeneratedDemand | null;
	/**
	 * Get information about a demand
	 *
	 * @param {Demand} demand - the demand
	 * @param {Employee} employee - the employee
	 * @param {ItemName} itemName - the item
	 */
	GetDemandInfo(demand: Demand, employee: Employee, itemName?: ItemName): DemandInfo | null;
	/**
	 * Get the text for a milestone
	 *
	 * @param {InvestorMilestone} milestone - the milestone
	 * @returns {String}
	 */
	GetMilestoneTargetText(milestone: InvestorMilestone): string;
	/**
	 * Show a success message
	 *
	 * @param {String} title - the title
	 * @param {String} body - the body
	 */
	ShowSuccessMessage(title: string, body: string): void;
	/**
	 * Show a message from the investor
	 *
	 * @param {(String | null)} [text] - the text to show, shows the next milestone if a falsey value is provided
	 */
	ShowInvestorMessage(text?: string | null): void;
	/** Hide any messages from the investor */
	HideInvestorMessage(): void;
	/**
	 * convert the given number into a human readable format (with abbreviations)
	 *
	 * @param {Number} num - the number to format
	 * @param {Boolean} [curreny=false] - prepend a dollar sign to the result
	 * @param {Number} [places=1] - the number of decimal places in the result
	 * @returns {String}
	 */
	SmartNumber(num: number, curreny?: boolean, places?: number): string;
	/** update Discord rpc */
	UpdateDiscord(): void;
	/**
	 * @param {ComponentMap} requirements
	 * @param {Function} callback
	 */
	SpentMergingComponents(requirements: ComponentMap, callback: () => void): void;
	/**
	 * Change the selected floor
	 *
	 * @param {Number} floor - the floor to change to
	 * @param {Function} [callback] - a function to call after changing floors
	 */
	ChangeFloor(floor: number, callback?: () => void): void;
	/**
	 * Delete a rack
	 *
	 * @param {String} id - the id of the rack to delete
	 */
	deleteRack(id: string): void;
	CreateEmptyRackDevice(): EmptyDevice;
	/**
	 * Get the performance of a rak
	 *
	 * @param {Rack} rack - the rack
	 * @param {Number} temperature - the tempature of the hosting environment
	 * @returns {RackPerformance}
	 */
	GetRackPerformance(rack: Rack, temperature: number): RackPerformance;
	/**
	 * Change the view to a specific building
	 *
	 * @param {Building} building - the building to change to
	 * @param {Function} [callback] - a function called after changing buildings
	 */
	GoToBuilding(building: Building, callback?: () => void): void;
	UpdateRackOverlays(): void;
	/** Update the tempature of the hosting room */
	UpdateHostingRoomTemperature(): void;
	/**
	 * Run milestone checks
	 *
	 * @param {Product} product - the related product
	 * @param {Settings} settings - the related settings
	 * @param {FinanceData} financeData - the related finance data
	 * @param {Boolean} [arg3] - unknown
	 * @param {InvestorMilestone} [milestone] - the related milestone
	 */
	RunMilestones(product: Product, settings: Settings, financeData: FinanceData, arg3?: boolean, milestone?: InvestorMilestone): void;
	/**
	 * Format the provided temperature with Ferinheight/Celcius
	 *
	 * @param {Number} temp - the temperature to format
	 * @returns {String}
	 */
	GetCorrectTemperature(temp: number): string;
	/**
	 * Calculate the satisfaction for a feature
	 *
	 * @param {Array<FeatureInstance>} features - all the features around the provided feature
	 * @param {FeatureInstance} feature - the specific feature to calculate for
	 * @returns {Number}
	 */
	CalculateFeatureSatisfaction(features: Array<FeatureInstance>, feature: FeatureInstance): number;
	/**
	 * Get the requirements for a campaign reoirt
	 *
	 * @param {Campaign} campaign - the campaign
	 * @returns {ComponentMap}
	 */
	GetCampaignReportRequirements(campaign: Campaign): ComponentMap;
	/**
	 * Calculate a campaign's conversion rate
	 *
	 * Note: this method is unused in game code, so parameters are guessed
	 *
	 * @param {MarketingPackage} package - the marketing package
	 * @param {Campaign} campaign - the campaign to calculate for
	 * @returns {Number}
	 */
	CalculateActualCampaignConversionRate(package: MarketingPackage, campaign: Campaign): number;
	/**
	 * Calculate a subscription feature's revenue
	 *
	 * @param {FeatureInstance} feature - the feature to get the revenue of
	 * @param {Number} [days=GetRootScope().daysPlayed - 1] - the day to pull user stats from
	 * @returns {Number}
	 */
	CalculateSubscriptionRevenue(feature: FeatureInstance, days?: number): number;
	/**
	 * Calculate the amount of dissatisfaction from a subscription feature
	 *
	 * @param {FeatureInstance} feature - the subscription feature
	 * @returns {Number}
	 */
	CalculateSubscriptionDissatisfaction(feature: FeatureInstance): number;
	CreateAdSpaceTaskOffer(negotiation: unknown, competitorProduct: CompetitorProduct, selectedAdType: string): void;
	/* CreateRecruitmentOffer */
	/**
	 * Calculate a product's satisfaction
	 *
	 * @param {FeatureInstance} features
	 * @param {Number} [supportSatisfaction]
	 * @param {Boolean} [arg2]
	 * @returns {Number}
	 */
	CalculateProductSatisfaction(features: Array<FeatureInstance>, supportSatisfaction?: number, arg2?: boolean): number;
	// @TODO this shit has almost 100 methods left
}

export interface BenefitCost {
	daily: number;
	monthly: number;
}

export interface Stack {
	amount: number;
	component: Component;
	isAvailableInInventory: boolean;
	name: string;
}

export interface BonusByItem {
	bonusPerItem: number;
	count: number;
}

export interface HourlyExhaustion {
	base: number;
	total: number;
}

export interface RetirementInfo {
	ceo: ChiefExecutiveOfficerEmployee;
	ageInYears: number;
	yearsLeft: number;
	percentage: number;
}


// completely static because the code literally returns exactly this with no modifications
export interface ProductProgressObject {
	campaigns: [];
	mergers: [];
	users: {
		total: 0;
		online: 0;
		onlineUsers: [];
		registeredUsers: [];
		potentialUsers: 0;
		totalChange: 0;
		satisfaction: 0;
		adblockers: {
			raw: 0;
			obfuscated: 0;
			final: 0;
		};
	};
	stats: {
		valuation: 0;
		performance: {
			executedMs: 0;
			requiredCu: 0;
			availableCu: 0;
			serverUsage: 0;
			responseTime: 0;
			state: Enums["ProductStates"]["Stable"];
		};
	};
}

export interface GeneratedDemand {
	type: DemandType;
	value: Demand;
}

export interface DemandInfo {
	bonus: number;
	image?: string;
	fulfiled: boolean;
	faIcon?: string;
	relevantEmployee: Employee | null;
	demand: Demand;
}
