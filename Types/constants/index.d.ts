import type {
	BuildingType,
	BuildingTypes,
	ComponentType,
	ComponentTypes,
	ContractTypes,
	DemandTypes,
	Difficulties,
	Difficulty,
	EmployeeLevel,
	EmployeeLevels,
	EmployeeStates,
	EmployeeTypeGroup,
	EmployeeTypeGroups,
	EmployeeTypeName,
	EmployeeTypeNames,
	FeatureCategories,
	FeatureCategoryName,
	FeatureProperties,
	GameEvents,
	NotificationTypes,
	PriceRanges,
	Priorities,
	ProductStates,
	RackDeviceStates,
	TaskStates
} from "./enums";
import type { ComponentMap } from "../misc";
import type { HostingBuildingName } from "../hosting";
import type { OfficeBuildingName } from "../settings";
import type { RootScope } from "..";

export * from "./enums";

export type EventName = EventNames[keyof EventNames];
export interface EventNames {
	DdosAttack: "DdosAttack";
	EmployeeLowMood: "EmployeeLowMood";
	EmployeeCompetitorOffer: "EmployeeCompetitorOffer";
	EmployeeQuit: "EmployeeQuit";
	EmployeeCallInSick: "EmployeeCallInSick";
	ViralBoost: "ViralBoost";
	GameCompleted: "GameCompleted";
	AdContractEnded: "AdContractEnded";
	MergerInProgress: "MergerInProgress";
	FirstSupportTicket: "FirstSupportTicket";
	AskNewLoan: "AskNewLoan";
	FastCloudsMail: "FastCloudsMail";
	Gameover: "Gameover";
	InvestmentOffer: "InvestmentOffer";
	InvestmentOffer1: "InvestmentOffer1";
	InvestmentOffer2: "InvestmentOffer2";
	InvestmentOffer3: "InvestmentOffer3";
	InvestmentOffer4: "InvestmentOffer4";
	InvestmentOffer5: "InvestmentOffer5";
	InvestmentOffer6: "InvestmentOffer6";
	InvestmentOffer7: "InvestmentOffer7";
	InvestmentOffer8: "InvestmentOffer8";
	InvestmentOffer9: "InvestmentOffer9";
	EmployeeRetired: "EmployeeRetired";
	SurvivalInvestment: "SurvivalInvestment";
	OutsourcingTaskChanged: "OutsourcingTaskChanged";
	JeetLackFeatures: "JeetLackFeatures";
	JeetRandomRage: "JeetRandomRage";
	JeetHighResponseTime: "JeetHighResponseTime";
	JeetCriticalResponseTime: "JeetCriticalResponseTime";
	JeetInvestmentHint: "JeetInvestmentHint";
	JeetTooMuchLevelDifference: "JeetTooMuchLevelDifference";
	JeetSupportFeedback: "JeetSupportFeedback";
	JeetTooManyAds: "JeetTooManyAds";
}

export interface Enums {
	EmployeeTypeNames: EmployeeTypeNames;
	GameEvents: GameEvents;
	EmployeeLevels: EmployeeLevels;
	Priorities: Priorities;
	ContractTypes: ContractTypes;
	ComponentTypes: ComponentTypes;
	EmployeeTypeGroups: EmployeeTypeGroups;
	EmployeeStates: EmployeeStates;
	TaskStates: TaskStates;
	NotificationTypes: NotificationTypes;
	FeatureProperties: FeatureProperties;
	ProductStates: ProductStates;
	DemandTypes: DemandTypes;
	Difficulties: Difficulties;
	BuildingType: BuildingTypes;
	RackDeviceState: RackDeviceStates;
	FeatureCategories: FeatureCategories;
	PriceRanges: PriceRanges;
}

export type ItemCategory = ItemCategories[keyof ItemCategories];
export interface ItemCategories {
	Desks: "Desks";
	Furniture: "Furniture";
	Equipment: "Equipment";
	Decorations: "Decorations";
	Walls: "Walls";
	Miscellaneous: "Miscellaneous";
}

export type BenefitName = BenefitNames[keyof BenefitNames];
export interface BenefitNames {
	SmallRetirementPlan: "SmallRetirementPlan";
	FreeBeverages: "FreeBeverages";
	FreeGymMembership: "FreeGymMembership";
	ExtendedRetirementPlan: "ExtendedRetirementPlan";
	FreeHealthCare: "FreeHealthCare";
	FullRetirementPlan: "FullRetirementPlan";
	PaidTransportation: "PaidTransportation";
}

export interface Benefit {
	id: string;
	level: EmployeeLevel;
	name: BenefitName;
	/** localization string */
	description: string;
	pricePerEmployee: number;
	fixedPrice: number;
	bonus: number;
	active: boolean;
	faIcon: string;
}

export type MarketingPackageName = MarketingPackageNames[keyof MarketingPackageNames];
export interface MarketingPackageNames {
	EmailCampaigns: "EmailCampaigns";
	TextAds: "TextAds";
	BannerAds: "BannerAds";
	VideoAds: "VideoAds";
	PodcastCommercial: "PodcastCommercial";
	TvCommercial: "TvCommercial";
	Partnership: "Partnership";
}

export type MarketingInterest = MarketingInterests[keyof MarketingInterests];
export interface MarketingInterests {
	Business: "Business";
	Entertainment: "Entertainment";
	Family: "Family";
	Fashion: "Fashion";
	Food: "Food";
	Shopping: "Shopping";
	Sports: "Sports";
	Technology: "Technology";
	Travel: "Travel";
}

export interface MarketingPackage {
	name: MarketingPackageName;
	requirements: ComponentMap;
	faIcon: string;
	targeting: Record<"gender" | "age" | "interests", boolean>;
	cpm: number;
	conversionRate: number;
}

export type ComponentName = ComponentNames[keyof ComponentNames];
export interface ComponentNames {
	AbTesting: "AbTesting";
	AnalyticsResearch: "AnalyticsResearch";
	ApiClientModule: "ApiClientModule";
	AudioFormat: "AudioFormat";
	AuthenticationModule: "AuthenticationModule";
	BackendComponent: "BackendComponent";
	BackendModule: "BackendModule";
	BandwidthCompressionModule: "BandwidthCompressionModule";
	BehaviorObservation: "BehaviorObservation";
	BlueprintComponent: "BlueprintComponent";
	Cluster: "Cluster";
	CodeOptimizationModule: "CodeOptimizationModule";
	CompressionComponent: "CompressionComponent";
	ContentManagementModule: "ContentManagementModule";
	ContinuousIntegration: "ContinuousIntegration";
	ContractAgreement: "ContractAgreement";
	Copywriting: "Copywriting";
	CronJob: "CronJob";
	DatabaseComponent: "DatabaseComponent";
	DatabaseLayer: "DatabaseLayer";
	DesignGuidelines: "DesignGuidelines";
	DocumentationComponent: "DocumentationComponent";
	EmailModule: "EmailModule";
	EncryptionComponent: "EncryptionComponent";
	FilesystemComponent: "FilesystemComponent";
	Firewall: "Firewall";
	FrontendModule: "FrontendModule";
	GraphicsComponent: "GraphicsComponent";
	I18nComponent: "I18nComponent";
	ImageFormat: "ImageFormat";
	InputModule: "InputModule";
	InterfaceModule: "InterfaceModule";
	LocalizationModule: "LocalizationModule";
	NetworkComponent: "NetworkComponent";
	NotificationModule: "NotificationModule";
	OperatingSystem: "OperatingSystem";
	PaymentGatewayModule: "PaymentGatewayModule";
	PhoneInterview: "PhoneInterview";
	ProcessManagement: "ProcessManagement";
	ResearchPoint: "ResearchPoint";
	ResponsiveUi: "ResponsiveUi";
	SearchAlgorithmComponent: "SearchAlgorithmComponent";
	SearchModule: "SearchModule";
	SemanticComponent: "SemanticComponent";
	SeoModule: "SeoModule";
	SmtpComponent: "SmtpComponent";
	StorageModule: "StorageModule";
	Survey: "Survey";
	SwarmManagement: "SwarmManagement";
	TextFormat: "TextFormat";
	UiComponent: "UiComponent";
	UiElement: "UiElement";
	UiSet: "UiSet";
	UserFeedback: "UserFeedback";
	VideoComponent: "VideoComponent";
	VideoFormat: "VideoFormat";
	VideoPlaybackModule: "VideoPlaybackModule";
	VirtualContainer: "VirtualContainer";
	VirtualHardware: "VirtualHardware";
	WireframeComponent: "WireframeComponent";
}

export interface Component {
	name: ComponentName;
	employeeLevel: EmployeeLevel;
	icon: string;
	employeeTypeName: EmployeeTypeName;
	type: ComponentType;
	produceHours: number;
}

export type BuildingName = BuildingNames[keyof BuildingNames];
export interface BuildingNames {
	CheapBuilding: "CheapBuilding";
	MediumBuilding: "MediumBuilding";
	ExpensiveBuilding: "ExpensiveBuilding";
	Skyscraper: "Skyscraper";
	BasementHosting: "BasementHosting";
	MediumHosting: "MediumHosting";
	LargeHosting: "LargeHosting";
	Headquarter: "Headquarter";
}

export interface Building {
	name: BuildingName;
	type: BuildingType;
	thumbnailType: string;
	image: string;
	workstations?: number;
	price: number;
	rent: number;
	width: number;
	height: number;
	size: Record<"width" | "height", number>;
	gridOffset: Record<"top" | "left", number> | Array<Record<"top" | "left", number>>;
	floors: number;
	temperature?: number;
	individualFloors?: boolean; // only present on Headquarter, value is false
}

export type InvestmentProjectName = InvestmentProjectNames[keyof InvestmentProjectNames];
export interface InvestmentProjectNames {
	SolarPower: "SolarPower";
	FusionPower: "FusionPower";
	TidalPower: "TidalPower";
}

export type InvestmentProjectBonus = "attract_superstar_employees" | "investmentproject_bonus_fusionpower" | "investmentproject_bonus_tidalpower";
export interface InvestmentProject {
	name: InvestmentProjectName;
	images: Array<string>;
	position: Record<"top" | "left", number>;
	overlayPosition: Record<"top" | "left", number>;
	upfrontPayment: number;
	minimumDailyBudget: number;
	bonus: InvestmentProjectBonus;

}

export type ItemName = ItemNames[keyof ItemNames];
export interface ItemNames {
	BeginnerWorkstation: "BeginnerWorkstation";
	IntermediateWorkstation: "IntermediateWorkstation";
	ExpertWorkstation: "ExpertWorkstation";
	programmerDesk: "programmerDesk";
	executiveDesk: "executiveDesk";
	vase1: "vase1";
	vase2: "vase2";
	closet1: "closet1";
	small_closet1: "small_closet1";
	couch_blue1: "couch_blue1";
	bench_red1: "bench_red1";
	small_bench_red1: "small_bench_red1";
	meeting_table1: "meeting_table1";
	table_and_chairs1: "table_and_chairs1";
	watercooler1: "watercooler1";
	reception_area1: "reception_area1";
	coffe_closet1: "coffe_closet1";
	couch_black1: "couch_black1";
	couch_black2: "couch_black2";
	tv_stand1: "tv_stand1";
	whiteboard2: "whiteboard2";
	glass_wall1: "glass_wall1";
	glass_wall_corner1: "glass_wall_corner1";
	glass_wall_t1: "glass_wall_t1";
	glass_wall_x1: "glass_wall_x1";
	vending_machine1: "vending_machine1";
	ping_pong_table1: "ping_pong_table1";
	large_coffee_machine1: "large_coffee_machine1";
	lounge_chair1: "lounge_chair1";
	wall1: "wall1";
	wall_corner1: "wall_corner1";
	wall_t1: "wall_t1";
	wall_x1: "wall_x1";
	glass_door2: "glass_door2";
	small_meeting_table1: "small_meeting_table1";
	coffee_table1: "coffee_table1";
	bookshelf1: "bookshelf1";
	bookshelf2: "bookshelf2";
	small_rack: "small_rack";
	tall_rack: "tall_rack";
	large_rack: "large_rack";
	aircon1: "aircon1";
	aircon2: "aircon2";
	aircon3: "aircon3";
	aircon4: "aircon4";
	centralizedClockrateController: "centralizedClockrateController";
	eggChair: "eggChair";
	indoorTree: "indoorTree";
	privacyBox: "privacyBox";
	privacyWall1: "privacyWall1";
	privacyWall2: "privacyWall2";
	rectangularPlant: "rectangularPlant";
	gameConsoleArea: "gameConsoleArea";
	largePlant: "largePlant";
	hugeSlide: "hugeSlide";
	letterA: "letterA";
	letterB: "letterB";
	letterC: "letterC";
	letterD: "letterD";
	letterE: "letterE";
	letterF: "letterF";
	letterG: "letterG";
	letterH: "letterH";
	letterI: "letterI";
	letterJ: "letterJ";
	letterK: "letterK";
	letterL: "letterL";
	letterM: "letterM";
	letterN: "letterN";
	letterO: "letterO";
	letterP: "letterP";
	letterQ: "letterQ";
	letterR: "letterR";
	letterS: "letterS";
	letterT: "letterT";
	letterU: "letterU";
	letterV: "letterV";
	letterW: "letterW";
	letterX: "letterX";
	letterY: "letterY";
	letterZ: "letterZ";
}

export type Items = {
	[K in ItemName]: Item;
};

// @TODO isodom, orientation is IsoDom.ORIENTATION_*
export type Orientation = "NW" | "NE" | "SW" | "SE";
export type ItemType = "desk" | "rack" | "aircon" | "controller";
export type ChairName = "beginnerChair" | "programmerChair" | "executiveChair";
export interface Item {
	animationSpeed?: number;
	bonus?: number;
	buildingType: BuildingType;
	category?: ItemCategory;
	chairName?: ChairName;
	demandable?: boolean;
	id?: number;
	images: Record<Orientation, ItemImage>;
	level?: EmployeeLevel;
	name: ItemName;
	orientation: Orientation;
	overlayOffset?: Record<Orientation, Record<"x" | "y", number>>;
	placementOffset?: Record<Orientation, Record<"top" | "left", number>>;
	power?: number;
	price: number;
	screens: Record<Orientation, Array<ItemImage> | null>;
	size: [x: number, y: number];
	sprite?: Array<Record<"width" | "height" | "frames", number>>;
	suitableEmployeeTypes?: Array<EmployeeTypeName>;
	temperatureChange?: number;
	thumbnail?: string;
	tier?: number;
	type?: ItemType;
	units?: number;
}

export interface ItemImage {
	offset: Record<"top" | "left", number>;
}

export interface ItemScreen {
	animation: string;
	skewY?: number;
	skewX?: number;
	scaleX?: number;
	scaleY?: number;
	x: number;
	y: number;
}

export type RackDeviceName = RackDeviceNames[keyof RackDeviceNames];
export interface RackDeviceNames {
	WebserverSmall: "WebserverSmall";
	CacheSmall: "CacheSmall";
	DatabaseSmall: "DatabaseSmall";
	SmallRackCooler: "SmallRackCooler";
	WebserverMedium: "WebserverMedium";
	CacheMedium: "CacheMedium";
	DatabaseMedium: "DatabaseMedium";
	WebserverLarge: "WebserverLarge";
	CacheLarge: "CacheLarge";
	DatabaseLarge: "DatabaseLarge";
	WebserverX: "WebserverX";
	DatabaseX: "DatabaseX";
	CacheX: "CacheX";
	FusionServer: "FusionServer";
}

export interface RackDevice {
	name: RackDeviceName;
	units: number;
	price: number;
	clockRate: number;
	power: number;
	producedHeat: number;
	webserverThroughput?: number;
	cacheThroughput?: number;
	databaseThroughput?: number;
	requirements: ComponentMap;
}

export type FrameworkName = FrameworkNames[keyof FrameworkNames];
export interface FrameworkNames {
	NoFramework: "NoFramework";
	BasicFramework: "BasicFramework";
	ExpensiveFramework1: "ExpensiveFramework1";
	CheapFramework1: "CheapFramework1";
	ExpensiveFramework2: "ExpensiveFramework2";
	CheapFramework2: "CheapFramework2";
	ExpensiveFramework3: "ExpensiveFramework3";
	CheapFramework3: "CheapFramework3";
	ExpensiveFramework4: "ExpensiveFramework4";
	CheapFramework4: "CheapFramework4";
	FusionFramework1: "FusionFramework1";
}

export interface Framework {
	order: number;
	name: FrameworkName;
	licenseCost: number;
	researchPoints: number;
	pricePerUser: number;
	cuPerMs: number;
	/** relative to app */
	logoPath: string;
	maxFeatures: number;
	maxFeatureLevel: number;
}

export type FeatureName = FeatureNames[keyof FeatureNames];
export interface FeatureNames {
	LandingPage: "LandingPage";
	LoginSystem: "LoginSystem";
	CommentFunctionality: "CommentFunctionality";
	SharingFunctionality: "SharingFunctionality";
	PaymentSystem: "PaymentSystem";
	ImageUpload: "ImageUpload";
	ContentManagementSystem: "ContentManagementSystem";
	ChatSystem: "ChatSystem";
	VideoFunctionality: "VideoFunctionality";
	ImapService: "ImapService";
	VideoEditor: "VideoEditor";
	TextAds: "TextAds";
	BannerAds: "BannerAds";
	VideoAds: "VideoAds";
	Subscriptions: "Subscriptions";
	ItemListing: "ItemListing";
	OfflineContent: "OfflineContent";
	LiveStreaming: "LiveStreaming";
	AdBlockObfuscator: "AdBlockObfuscator";
	DdosProtection: "DdosProtection";
	HelpSystem: "HelpSystem";
	ProfilePage: "ProfilePage";
}
export type AdsFeatureName = Pick<FeatureNames, "TextAds" | "BannerAds" | "VideoAds">;

export interface FeatureCategory {
	name: FeatureCategoryName;
	title: string;
	description: string;
	faIcon: string;
}

export interface Feature {
	name: FeatureName;
	level: EmployeeLevel;
	requirements: ComponentMap;
	faIcon: string;
	categoryName: FeatureCategoryName;
}

export type ServerName = ServerNames[keyof ServerNames];
export interface ServerNames {
	SmallVirtualServer: "SmallVirtualServer";
	MediumVirtualServer: "MediumVirtualServer";
	LargeVirtualServer: "LargeVirtualServer";
	SmallVirtualCluster: "SmallVirtualCluster";
	MediumVirtualCluster: "MediumVirtualCluster";
	LargeVirtualCluster: "LargeVirtualCluster";
}

export interface Server {
	name: ServerName;
	employeeLeveL: EmployeeLevel;
	requirements: ComponentMap;
	computeUnit: number;
	pricePerDay: number;
}

export type ResearchCategory = ResearchCategories[keyof ResearchCategories];
export interface ResearchCategories {
	HumanResource: "HumanResource";
	Production: "Production";
	Office: "Office";
	Features: "Features";
	Frameworks: "Frameworks";
	Hosting: "Hosting";
}

export type ResearchItemName = ResearchItemNames[keyof ResearchItemNames];
export interface ResearchItemNames {
	BeginnerDevkit: "BeginnerDevkit";
	IntermediateDevkit: "IntermediateDevkit";
	ExpertDevkit: "ExpertDevkit";
	FurniturePack1: "FurniturePack1";
	FurniturePack2: "FurniturePack2";
	FurniturePack3: "FurniturePack3";
	FurniturePack4: "FurniturePack4";
	FurniturePack5: "FurniturePack5";
	FurniturePack6: "FurniturePack6";
	FurniturePack7: "FurniturePack7";
	FurniturePack8: "FurniturePack8";
	WallPack1: "WallPack1";
	WallPack2: "WallPack2";
	HostingEquipment1: "HostingEquipment1";
	HostingEquipment2: "HostingEquipment2";
	HostingEquipment3: "HostingEquipment3";
	ServerPack1: "ServerPack1";
	ServerPack2: "ServerPack2";
	ServerPack3: "ServerPack3";
	ServerPack4: "ServerPack4";
	BenefitsPack1: "BenefitsPack1";
	BenefitsPack2: "BenefitsPack2";
	BeginnerDesignerKit: "BeginnerDesignerKit";
	IntermediateDesignerKit: "IntermediateDesignerKit";
	ExpertDesignerKit: "ExpertDesignerKit";
	BeginnerMarketingKit: "BeginnerMarketingKit";
	IntermediateMarketingKit: "IntermediateMarketingKit";
	ExpertMarketingKit: "ExpertMarketingKit";
	BeginnerSysAdminKit: "BeginnerSysAdminKit";
	IntermediateSysAdminKit: "IntermediateSysAdminKit";
	ExpertSysAdminKit: "ExpertSysAdminKit";
	BeginnerLeadDevkit: "BeginnerLeadDevkit";
	IntermediateLeadDevkit: "IntermediateLeadDevkit";
	ExpertLeadDevkit: "ExpertLeadDevkit";
	FusionServer: "FusionServer";
	FusionHeatTransformer: "FusionHeatTransformer";
	LetterPack: "LetterPack";
}

export type UnlockType = "Component" | "Furniture" | "Benefits" | "Framework" | "Feature" | "RackDevices";
export interface ResearchItem {
	name: EmployeeTypeName | ResearchItemName;
	category: ResearchCategory;
	points: number;
	faIcon: string;
	unlockType?: UnlockType;
	unlocks?: Array<ComponentName | ItemName | RackDeviceName>;
	requiredInvestmentProject?: InvestmentProjectName;
}

export type HelpTopicName = HelpTopicNames[keyof HelpTopicNames];
export interface HelpTopicNames {
	camera_controls: "camera_controls";
	controlling_time: "controlling_time";
	citymap_buildings: "citymap_buildings";
	purchasing_items: "purchasing_items";
	researching: "researching";
	recruitment: "recruitment";
	website_features: "website_features";
	frameworks: "frameworks";
	website_satisfaction: "website_satisfaction";
	hosting: "hosting";
	marketing: "marketing";
	racks_servers: "racks_servers";
	temperatures_overclocking: "temperatures_overclocking";
	venture_capital: "venture_capital";
	ddos_attacks_viral_boosts: "ddos_attacks_viral_boosts";
	support: "support";
	ccc: "ccc";
	ad_contracts: "ad_contracts";
	production: "production";
	ceo_change_skill: "ceo_change_skill";
	investment_projects: "investment_projects";
}

export interface HelpTopic {
	name: HelpTopicName;
	faIcon: string;
}

export type EmotionType = "speech" | "thought";
export interface Emotion {
	name: string;
	employeeType: EmployeeTypeName | null;
	type: EmotionType;
	maxMood?: number;
	minIdleMinutes?: number;
	critical?: boolean;
	chance?: number;
}

export interface Investor {
	difficulty: Difficulty;
	id: string;
	milestones: Array<InvestorMilestone>;
	/** Johnson Invest */
	name: string;
	share: number;
	upfrontPayment: number;
}

export interface InvestorMilestone {
	completed?: boolean;
	completionStatus?: InvestorMilestoneCompletionStatus;
	localizeKey: string;
	/** (1.24) present in all except ending */
	payment?: number;
	office?: boolean;
	ceoSeated?: boolean;
	devlopers?: number;
	designers?: number;
	users?: number;
	totalFeatures?: number;
	satisfaction?: number;
	totalCu?: number;
	adSpaceDeals?: number;
	workstations?: number;
	valuation?: number;
	maxFeatureLevel?: number;
	minimumProfit?: number;
	tickets?: number;
	dailyIncome?: number;
	acquisitions?: number;
	top?: number;
}

export interface InvestorMilestoneCompletionStatus {
	balance: number;
	day: number;
	employees: number;
	hostingBuilding: HostingBuildingName | null;
	officeBuilding: OfficeBuildingName | null;
	profitPerMonth: number;
	xp: number;
}

export interface EmployeeType {
	name: EmployeeType;
	group: EmployeeTypeGroup;
	/** localization string */
	description: string;
	cssClass: string;
}

export interface Loan {
	/** Eazy Money, Global Loans, Fever Inc, Next Bank, Interhagen Capital */
	provider: string;
	amount: number;
	minimumValuation?: number;
	days: number;
	interest: number;
	dailyPayment: number;
	daysLeft: number;
	amountLeft: number;
}

// @TODO: DreamBig, Leader, SameButDifferent, InstallAllTheMods
export type AchievementName = AchievementNames[keyof AchievementNames];
export interface AchievementNames {
	/** Hired 1 employee */
	EnjoyYourStay: "EnjoyYourStay";
	/** Hire 5 employees */
	Interviewer: "Interviewer";
	/** Hire 10 employees */
	EmploymentMachine: "EmploymentMachine";
	/** Fire 1 employee */
	YoureOut: "YoureOut";
	/** Fire 5 employees */
	YouAsWell: "YouAsWell";
	/** Fire 10 employees */
	Fireworks: "Fireworks";
	DreamBig: "DreamBig";
	Leader: "Leader";
	/** Have a monthly profit of at least $0 */
	IntoBlack: "IntoBlack";
	SameButDifferent: "SameButDifferent";
	InstallAllTheMods: "InstallAllTheMods";
	/** Take out 1 loan */
	ASmallLoan: "ASmallLoan";
	/** Play for more than 1000 in-game days */
	Addicted: "Addicted";
	/** Own less than 50% of your own website */
	SellOut: "SellOut";
	/** Become #1 Social Media product */
	TheZuck: "TheZuck";
	/** Produce 1 million CU with all servers at 200% */
	TheOverclocker: "TheOverclocker";
	/** Resolve 1000 support tickets */
	Support: "Support";
	/** Research everything */
	TheResearcher: "TheResearcher";
	/** Reach an inventory of more than 100,000 of the same component/module */
	TheCollector: "TheCollector";
	/** Choose a not so creative website name (1.24: facebook, linkedin, youtube, twitch, twitter, instagram, amazon, reddit, ebay, netflix, hbo, mixer) */
	NotSoCreative: "NotSoCreative";
	/** Go bankrupt */
	Bankrupt: "Bankrupt";
	/** Have an employee reaching a base speed of 480% */
	SuperSpeed: "SuperSpeed";
	/** Became Top #1 of all website types in one game */
	WorldDomination: "WorldDomination";
	/** Reach 1,000,000 users while still in the smallest office building */
	SmallButEfficient: "SmallButEfficient";
	/** Reach an average response time lower than 2 hours with more than 500 tickets */
	FastSupport: "FastSupport";
	/** Secure a retirement fund of more than $500,000 */
	TheAverageWorker: "TheAverageWorker";
	/** Secure a retirement fund of more than $1,000,000 */
	UpperMiddleClass: "UpperMiddleClass";
	/** Secure a retirement fund of more than $45,000,000 */
	BiggyShot: "BiggyShot";
	/** Secure a retirement fund of more than $200,000,000 */
	MisterBiggyBiggyShot: "MisterBiggyBiggyShot";
	/** Secure a retirement fund of more than $3,500,000,000 */
	MisterWorldWide: "MisterWorldWide";
	/** Invest 100% of Space-based Solar Power */
	TheSunIsTheFuture: "TheSunIsTheFuture";
	/** Invest 100% of Tidal Power Plant */
	TheWave: "TheWave";
	/** Invest 100% of Fusion Power Plant */
	DangerousFuture: "DangerousFuture";
}

export type InvestorName = InvestorNames[keyof InvestorNames];
export interface InvestorNames {
	geldgroup: "Geld Group";
	belvidacorporation: "Belvida Corporation";
	// this is in their code twice
	// geldgroup: "Geld Group";
	topdollars: "Top Dollars";
	millionaireboysclub: "Millionaire Boys Club";
	youngmoneyinvest: "Young Money Invest";
	thegoldfamily: "The Gold Family";
	bandspartners: "Bands Partners";
	jhcapital: "JH Capital";
	richkidsinc: "Rich Kids Inc";
}

export interface Event {
	name: EventName;
	completable: boolean;
	minimumDayInterval?: number;
	trigger(rootScope: RootScope): void;
}

export type ProductTypeName = ProductTypeNames[keyof ProductTypeNames];
export interface ProductTypeNames {
	VideoSharingService: "VideoSharingService";
	SocialMedia: "SocialMedia";
	StreamingService: "StreamingService";
	ShoppingPlatform: "ShoppingPlatform";
	DatingPlatform: "DatingPlatform";
	GamingPlatform: "GamingPlatform";
}

export type ProductExtra = "age_group1" | "age_group2" | "age_group3" | "male" | "female";
export interface ProductType {
	name: ProductTypeName;
	faIcon: string;
	features: Array<FeatureName | ProductExtra>;
	audienceMatches: Array<ProductExtra | MarketingInterest>;
}

export interface CompetitorHistory {
	day: number;
	stockPrice: number;
	user: number;
	week: number;
}

export * from "./enums";
