import type {
	CompetitorHistory,
	ComponentName,
	EventNames,
	ItemName,
	Loan,
	Orientation,
	ProductTypeName
} from "../constants";
import type {
	Employee,
	Candidate,
	EmployeeAvatar,
	EmployeeGender,
	Workstation
} from "../employees";
import type { Hosting, HostingBuildingName, HostingItemName } from "../hosting";
import type { ComponentMap } from "../misc";
import type { FeatureInstance, Product, Progress } from "../product";

export type Events = EventNames[keyof EventNames];
export type NewGameSettings = Omit<Settings, "betaVersionAtStart" | "ceo" | "companyName" | "competitorProducts" | "fileName" | "hosting" | "id" | "lastSaved" | "loadedMods" | "started" | "variables"> & { started: false; };
export interface Settings {
	actions: Array<unknown>;
	activatedBenefits: Array<string>;
	balance: number;
	betaVersionAtStart: number;
	buildingHistory: Array<BuildingHistory>;
	candidates: Array<Candidate>;
	ceo: CEO;
	companyName: string;
	compatibilityModifiers: {
		adblockerIntroductionPercentage?: number; // the only possible value I can see via the code
	};
	competitorProducts: Array<CompetitorProduct>;
	completedEvents: Record<Events, number | null>;
	contracts: []; // @TODO
	contractsCompleted: number;
	date: Date;
	employeesOrder: Array<string>;
	featureInstances: Array<FeatureInstance>;
	fileName: string; // sg_*.json
	firedEmployees: Array<Employee>;
	gameover: boolean;
	hosting?: Hosting;
	id: string;
	inventory: OfficeInventory;
	inventorySamples: []; // @TODO
	investmentProjects: InvestmentProjects;
	jeets: Array<Jeet>;
	lastPricePerHour: number;
	lastSaved?: string; // iso timestamp
	lastVersion: string;
	loadedMods: Array<string>;
	loans: Array<PartialLoan>;
	/** Default Keys:
	 * BlueprintComponent, WireframeComponent, GraphicsComponent, UiComponent, BackendComponent,
	 * NetworkComponent, DatabaseComponent, SemanticComponent, EncryptionComponent, FilesystemComponent,
	 * VideoComponent, SmtpComponent, I18nComponent, SearchAlgorithmComponent, CompressionComponent,
	 * VirtualHardware, OperatingSystem, Firewall, Copywriting, TextFormat,
	 * ImageFormat, VideoFormat, AudioFormat, ContractAgreement, Survey,
	 * UserFeedback, PhoneInterview, AnalyticsResearch, BehaviorObservation, AbTesting,
	 * DocumentationComponent, ProcessManagement, ContinuousIntegration, CronJob, ResearchPoint,
	 * InterfaceModule, FrontendModule, BackendModule, InputModule, StorageModule,
	 * ContentManagementModule, SeoModule, AuthenticationModule, PaymentGatewayModule, VideoPlaybackModule,
	 * EmailModule, LocalizationModule, SearchModule, BandwidthCompressionModule, DatabaseLayer,
	 * NotificationModule, ApiClientModule, CodeOptimizationModule, UiElement, UiSet,
	 * ResponsiveUi, DesignGuidelines, VirtualContainer, Cluster, SwarmManagement */
	marketValues: Record<string, MarketValue>;
	marketingInsight: []; // @TODO
	maxContractHours: number;
	notifications: []; // @TODO
	office: Office;
	outsourcingTasks: Array<OutsourcingTask>;
	paused: boolean;
	productionPlans: Array<ProductionPlan>;
	products: Array<Product>;
	progress: Progress;
	purchaseInventory: PurchaseInventory;
	researchPoints: number;
	/** (1.24): Researcher, Developer, Designer, LeadDeveloper, SysAdmin, SalesExecutive, Marketer, Manager, HrManager, Supporter, Recruiter, OutsourcingExecutive, BeginnerDevkit, IntermediateDevkit, ExpertDevkit, BeginnerLeadDevkit, IntermediateLeadDevkit, ExpertLeadDevkit, BeginnerDesignerKit, IntermediateDesignerKit, ExpertDesignerKit, BeginnerMarketingKit, IntermediateMarketingKit, ExpertMarketingKit, BeginnerSysAdminKit, IntermediateSysAdminKit, ExpertSysAdminKit, FurniturePack1, FurniturePack2, WallPack1, WallPack2, FurniturePack3, FurniturePack4, FurniturePack5, FurniturePack6, FurniturePack7, FurniturePack8, BenefitsPack1, BenefitsPack2, BasicFramework, CheapFramework1, ExpensiveFramework1, CheapFramework2, ExpensiveFramework2, CheapFramework3, ExpensiveFramework3, CheapFramework4, ExpensiveFramework4, FusionFramework1, LandingPage, VideoFunctionality, ItemListing, SharingFunctionality, ImageUpload, ProfilePage, Subscriptions, TextAds, BannerAds, VideoAds, OfflineContent, PaymentSystem, LiveStreaming, VideoEditor, ChatSystem, CommentFunctionality, AdBlockObfuscator, DdosProtection, HelpSystem, HostingEquipment1, HostingEquipment2, HostingEquipment3, ServerPack1, ServerPack2, ServerPack3, ServerPack4, FusionServer, FusionHeatTransformer, LetterPack */
	researchedItems: Array<string>;
	resignedEmployees: Array<Employee>;
	saveGameName: string;
	selectedBuildingName: AnyBuildingName;
	selectedFloor: number;
	started: Date;
	state: number;
	transactions: Array<Transaction>;
	unassignedEmployees: Array<Employee>;
	userLossEnabled: boolean;
	variables: Variables;
	xp: number;
}

export type OfficeBuildingName = "CheapBuilding" | "ExpensiveBuilding" | "Skyscraper" | "Headquarter";
export interface BuildingHistory {
	buildingName: string;
	day: number;
}

export interface CEO {
	avatar: EmployeeAvatar;
	backstory: "Manager" | "Developer" | "Designer";
	employeeId: string;
	name: string;
	retirementFund: RetirementFund;
}

export interface RetirementFund {
	balance: number;
	history: Array<RetirementFundHistory>;
}

export interface RetirementFundHistory {
	day: number;
	year: number;
	amount: number;
}

export type DefaultCompetitorProduct = Pick<CompetitorProduct, "id" | "name" | "logoColorDegree" | "logoPath" | "users" | "productTypeName" | "version" | "controlled" | "history">;
export interface CompetitorProduct {
	controlled: boolean;
	dealResults: [];
	growth: number;
	history: Array<CompetitorHistory>;
	id: string;
	logoColorDegree: number;
	/** relative to app */
	logoPath: string;
	name: string;
	ownedStocks: number;
	priceExpectations: number;
	productTypeName: ProductTypeName;
	stockTransactions: Array<StockTransaction>;
	stockVolume: number;
	users: number;
	version: number;
}

export interface StockTransaction {
	$$hashKey: string; // ?
	amount: number;
	day: number;
	stockPrice: number;
	total: number;
}

// hosting items (racks, controllers, fans) are also in the office inv
// if an item gets set to a value, it will not disappear when falling to zero
export type OfficeInventory = {
	/** day, stats */
	stats: Record<number, OfficeInventoryStats>;
} & ComponentMap;

export type OfficeInventoryStats = Record<"consumption" | "production", ComponentMap>;

// keys here show up when you interact with the investment project in any way,
// e.g. opening the info window, `invested` will be null in this case
// keys will not drop off when not started, canceled, or done
export interface InvestmentProjects {
	FusionPower?: InvestmentProjectInstance;
	SolarPower?: InvestmentProjectInstance;
	TidalPower?: InvestmentProjectInstance;
}

export interface InvestmentProjectInstance {
	completed?: boolean;
	completionDay?: number;
	/** null if not started or canceled */
	invested: number | null;
	goal: number;
	dailyBudget: number;
	revenueYesterday?: number;
}

// I've only seen Male/Female and "man" for @stocktraders
export type JeetGender = EmployeeGender | "man";
export interface Jeet {
	/** relative from app */
	avatar: string;
	day: number;
	gender: JeetGender;
	handler: string;
	id: string;
	name: string;
	read: boolean;
	text: string;
}

export type PartialLoan = Pick<Loan, "amountLeft" | "daysLeft" | "provider"> & { active: boolean; };

export interface MarketValue {
	basePrice: number;
	change: number;
}

export interface OutsourcingTask {
	competitorProductId: string | null;
	deadline: OutsourcingDeadline;
	delivered: boolean;
	fee: number;
	hoursLeft: number;
	id: string;
	maxOffers: number;
	number: number;
	offers: Array<OutsourcingOffer>;
	requirements: ComponentMap;
	startPrice: number;
	/** day-hour(24)-minute */
	timestamp: `${number}-${number}-${number}`;
	winnerPrice: number;
	won: boolean | null;
}

export interface OutsourcingDeadline {
	total: number;
	completed: number;
}

export interface OutsourcingOffer {
	competitorName: string;
	offer: number;
	/** day-hour(24)-minute */
	timestamp: `${number}-${number}-${number}`;
}

export interface ProductionPlan {
	exceedTargets: boolean;
	id: string;
	name: string;
	production: Production;
	skipModulesWithMissingRequirements: boolean;
}

// if an item gets set to a value, it will not disappear when removing the entry - it will be set to null
export type Production = {
	[K in ComponentName]?: number | null
};

export interface Office {
	buildingName: OfficeBuildingName;
	grid: Array<OfficeGridItem>;
	lastSelectedFloor?: number | null;
	workstations: Array<Workstation>;
}

export type OfficeItemName = Exclude<HostingItemName, ItemName>;
export interface OfficeGridItem {
	controllerId?: undefined;
	floor: number;
	itemName: OfficeItemName;
	orientation: Orientation;
	rackId?: undefined;
	workstationId?: string;
	x: number;
	y: number;
}

// if an item gets set to a value, it will not disappear when falling to zero
export type PurchaseInventory = {
	[K in ItemName]?: number;
};

export type AnyBuildingName = OfficeBuildingName | HostingBuildingName;

export interface Transaction {
	amount: number;
	balance: number;
	day: number;
	hour: number;
	id: string;
	label: string;
	minute: number;
}

export interface Variables {
	/** default(1.24): 18 */
	ceoStartingAge: number;
	/** default(1.24): 50 */
	daysPerYear: number;
	disableCeoAging: number;
	disableEmployeeAging: number;
	disableInvestor: number;
	disableWorkstationLimit: number;
	everythingUnlocked: number;
	/** default(1.24): 67 */
	retirementAge: number;
	/** default(1.24): 15000 */
	startingMoney: number;
}
