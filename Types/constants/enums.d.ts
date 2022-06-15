export type EmployeeTypeName = EmployeeTypeNames[keyof EmployeeTypeNames];
export interface EmployeeTypeNames {
	Developer: "Developer";
	LeadDeveloper: "LeadDeveloper";
	Designer: "Designer";
	SalesExecutive: "SalesExecutive";
	Manager: "Manager";
	Researcher: "Researcher";
	SysAdmin: "SysAdmin";
	HrManager: "HrManager";
	Marketer: "Marketer";
	Supporter: "Supporter";
	ChiefExecutiveOfficer: "ChiefExecutiveOfficer";
	Recruiter: "Recruiter";
	OutsourcingExecutive: "OutsourcingExecutive";
}

export type GameEvent = GameEvents[keyof GameEvents];
export interface GameEvents {
	WorkstationChange: "WorkstationChange";
	EmployeeChange: "EmployeeChange";
	GridChange: "GridChange";
	ResearchChange: "ResearchChange";
	ProductChange: "ProductChange";
	ContractChange: "ContractChange";
	ClientChange: "ClientChange";
	SelectedWorkstationChange: "SelectedWorkstationChange";
	LoanChange: "LoanChange";
	InventoryChange: "InventoryChange";
	SpeedChange: "SpeedChange";
	CandidateChange: "CandidateChange";
	OnNewHour: "OnNewHour";
	UiUpdate: "UiUpdate";
	MailChange: "MailChange";
	NotificationChange: "NotificationChange";
	ProductMilestoneCompleted: "ProductMilestoneCompleted";
	ModChange: "ModChange";
	MilestoneTrigger: "MilestoneTrigger";
	RackChange: "RackChange";
	OnNewDay: "OnNewDay";
	OnNewYear: "OnNewYear";
	OnLoadGame: "OnLoadGame";
	ControllerRuleTrigger: "ControllerRuleTrigger";
	HelpTopicChange: "HelpTopicChange";
	OutsourcingChange: "OutsourcingChange";
	JitterChange: "JitterChange";
}

export type EmployeeLevel = EmployeeLevels[keyof EmployeeLevels];
export interface EmployeeLevels {
	Beginner: "Beginner";
	Intermediate: "Intermediate";
	Expert: "Expert";
}

export type Priority = Priorities[keyof Priorities];
export interface Priorities {
	Low: "Low";
	Medium: "Medium";
	High: "High";
}

export type ContractType = ContractTypes[keyof ContractTypes];
export interface ContractTypes {
	FixedPrice: "FixedPrice";
	LimitedRFQ: "LimitedRFQ";
}

export type ComponentType = ComponentTypes[keyof ComponentTypes];
export interface ComponentTypes {
	Component: "Component";
	Module: "Module";
	Server: "Server";
}

export type EmployeeTypeGroup = EmployeeTypeGroups[keyof EmployeeTypeGroups];
export interface EmployeeTypeGroups {
	Development: "Development";
	Sales: "Sales";
	Management: "Management";
}

export type EmployeeState = EmployeeStates[keyof EmployeeStates];
export interface EmployeeStates {
	SentHome: "SentHome";
	Sick: "Sick";
	Working: "Working";
	Idle: "Idle";
	Awaiting: "Awaiting";
	Unassigned: "Unassigned";
}

export type TaskState = TaskStates[keyof TaskStates];
export interface TaskStates {
	Running: "Running";
	Stalled: "Stalled";
	Completed: "Completed";
	Stopped: "Stopped";
}

export type NotificationType = NotificationTypes[keyof NotificationTypes];
export interface NotificationTypes {
	Info: "Info";
	Warning: "Warning";
}

export type FeatureProperty = FeatureProperties[keyof FeatureProperties];
export interface FeatureProperties {
	Quality: "Quality";
	Efficiency: "Efficiency";
}

export type ProductState = ProductStates[keyof ProductStates];
export interface ProductStates {
	Stable: "Stable";
	Unstable: "Unstable";
	Critical: "Critical";
}

export type DemandType = DemandTypes[keyof DemandTypes];
export interface DemandTypes {
	Benefit: "Benefit";
	Furniture: "Furniture";
	WorkHours: "WorkHours";
	DeskType: "DeskType";
	FireEmployee: "FireEmployee";
}

export type Difficulty = Difficulties[keyof Difficulties];
export interface Difficulties {
	Easy: "Easy";
	Medium: "Medium";
	Hard: "Hard";
}

export type BuildingType = BuildingTypes[keyof BuildingTypes];
export interface BuildingTypes {
	Office: "Office";
	Hosting: "Hosting";
}

export type RackDeviceState = RackDeviceStates[keyof RackDeviceStates];
export interface RackDeviceStates {
	ReducedPerformance: "ReducedPerformance";
	OverheatProtection: "OverheatProtection";
	Running: "Running";
	NotConfigured: "NotConfigured";
}

export type FeatureCategoryName = FeatureCategories[keyof FeatureCategories];
export interface FeatureCategories {
	Revenue: "Revenue";
	Users: "Users";
	Enhancement: "Enhancement";
}

export type PriceRange = PriceRanges[keyof PriceRanges];
export interface PriceRanges {
	Cheap: "Cheap";
	Moderate: "Moderate";
	Expensive: "Expensive";
}
