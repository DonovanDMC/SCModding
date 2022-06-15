import type {
	SimpleDevelopmentTask,
	AdvancedDevelopmentTask,
	StoppedTask,
	SupporterTask,
	RecruiterTask,
	GenericTask
} from "./tasks";
import type { DevComponent } from "../misc";
import type { EmployeeLevel, EmployeeTypeName } from "../constants";

export type EmployeeGender = "Male" | "Female";
export type EmployeeAvatar = string; // @TODO strictly type avatar names
export type Employee =
DeveloperEmployee | LeadDeveloperEmployee | SupporterEmployee |
DesignerEmployee | SysAdminEmployee | ManagerEmployee |
HrManagerEmployee | RecruiterEmployee | ResearcherEmployee |
MarketerEmployee | SalesExecutiveEmployee | OutsourcingExecutiveEmployee |
ChiefExecutiveOfficerEmployee;
export interface BaseEmployee {
	age: number;
	animationSpeed: number;
	avatar: EmployeeAvatar;
	callInSickDaysLeft: number;
	competitorProductId: string;
	components: Array<unknown>; // @TODO
	creationTime: number;
	demands: Array<Demand>;
	employeeTypeName: EmployeeTypeName;
	employees: Array<unknown>; // @TODO couldn't find any instances of this having values
	gender: EmployeeGender;
	hired: string | Date; // iso timestamp string in some places, Date object in others (differs even in same array)
	hiringResult: HiringResult;
	hoursLeft: number;
	id: string;
	idleMinutes: null;
	instantHireAvailable?: boolean;
	instantHireSalary?: number;
	/** Example: Instant hire requires both salary and demand to be researched. */
	instantHireTooltip?: string;
	isTraining: boolean;
	lastBonusDay?: number;
	lastCompetitorJobOffer?: number;
	lastSendHomeLength?: number;
	lastEmotionName: string;
	lastTab: string;
	level: EmployeeLevel;
	managerId: string | null;
	maxSpeed: number;
	minutesTillNextEmotion: number;
	mood: number;
	name: string;
	negotiation?: Negotiation;
	originalName: string;
	overtimeMinutes: number;
	progress: number;
	requiredWer: number;
	researchDemands: boolean;
	researchSalary: boolean;
	salary: number;
	schedule: Schedule;
	sendHomeDaysLeft?: number;
	sickHoursLeft: number;
	speed: number;
	superstar: boolean;
}

// both demands & salary are present even if one or both of researchDemands & researchSalary is false
// the instantHire properties don't show up until hired
export type Candidate = Omit<BaseEmployee, "hired" | "hiringResult" | "instantHireAvailable" | "instantHireSalary" | "instantHireTooltip" | "isTraining" | "lastBonusDay" | "lastCompetitorJobOffer" | "lastSendHomeLength" | "lastEmotionName" | "lastTab" | "managerId" | "minutesTillNextEmotion" | "negotiation" | "sendHomeDaysLeft">;

export interface DeveloperEmployee extends BaseEmployee {
	employeeTypeName: "Developer";
	activeQueueIndex: number;
	queue: Array<QueueEntry>; // empty if managed
	task?: SimpleDevelopmentTask;
}

export interface LeadDeveloperEmployee extends BaseEmployee {
	employeeTypeName: "LeadDeveloper";
	activeQueueIndex: number;
	queue: Array<QueueEntry>; // empty if managed
	task?: AdvancedDevelopmentTask;
}

export interface SupporterEmployee extends BaseEmployee {
	employeeTypeName: "Supporter";
	queue: []; // present, but seemingly always to be empty
	task: SupporterTask | StoppedTask | null;
	supportTeamId: string | null;
}

export interface DesignerEmployee extends BaseEmployee {
	employeeTypeName: "Designer";
	activeQueueIndex: number;
	queue: Array<QueueEntry>; // empty if managed
	task?: AdvancedDevelopmentTask;
}

export interface SysAdminEmployee extends BaseEmployee {
	employeeTypeName: "SysAdmin";
	activeQueueIndex: number;
	queue: Array<QueueEntry>; // empty if managed
	task?: AdvancedDevelopmentTask;
}

export interface ManagerEmployee extends BaseEmployee {
	employeeTypeName: "Manager";
	numberOfControlledEmployees: number;
	planId: string | null;
}

export interface HrManagerEmployee extends BaseEmployee {
	employeeTypeName: "HrManager";
	autoGrantRaise: boolean;
	newSchedule: Schedule;
	managerId: never;
}

export interface RecruiterEmployee extends BaseEmployee {
	employeeTypeName: "Recruiter";
	task?: RecruiterTask;
}

export interface ResearcherEmployee extends BaseEmployee {
	employeeTypeName: "Researcher";
	task?: GenericTask;
}

export interface MarketerEmployee extends BaseEmployee {
	employeeTypeName: "Marketer";
	queue: Array<QueueEntry>;
	task?: SimpleDevelopmentTask;
}

export interface SalesExecutiveEmployee extends BaseEmployee {
	employeeTypeName: "SalesExecutive";
	leadFilters: LeadFilter;
	leads: Array<Lead>;
	task?: GenericTask;
}

export interface OutsourcingExecutiveEmployee extends BaseEmployee {
	employeeTypeName: "OutsourcingExecutive";
	task?: GenericTask | null;
}

// unless modded:
// salary always 0
// superstar alway false
// call in sick days never used
// mood always 100
export interface ChiefExecutiveOfficerEmployee extends BaseEmployee {
	employeeTypeName: "ChiefExecutiveOfficer";
	// from testing, you can technically set this to any valid employee type, but they likely won't function correctly,
	// and may even break the game or any installed mods
	skill: "Manager" | "Developer" | "Designer" | "Recruiter";
	numberOfControlledEmployees?: number;
	planId?: string | null;
	queue?: Array<QueueEntry>;
	task: null | SimpleDevelopmentTask | AdvancedDevelopmentTask | RecruiterTask;
}

export interface Demand {
	type: string;
	value: string | number; // number for WorkHours
}

export interface HiringResult {
	interested: boolean;
	investmentProjectName: "SolarPower" | null; // in the base game, this is always SolarPower (for superstar employees)
	label?: string; // absent when investmentProjectName is null, Example: This candidate only wants to work for companies who have completed the investment of <b>Space-based Solar Power</b>.
}

export interface Schedule {
	daysOff: Array<number>;
	end: ScheduleTime;
	start: ScheduleTime;
	trainingDays: Array<number>;
}

export interface ScheduleTime {
	hour: number;
	minute: number;
}

export interface QueueEntry {
	autoRepeat: boolean;
	completedMinutes: number;
	component: DevComponent;
	state: "Running";
	totalMinutes: number;
}

export type WorkstationType = "BeginnerWorkstation" | "IntermediateWorkstation" | "ExpertWorkstation" | "programmerDesk" | "executiveDesk";
export interface Workstation {
	bonus: number;
	deskName: WorkstationType;
	employee: Employee | null;
	id: string;
}

export interface Negotiation {
	completed: boolean;
	offers: Array<Offer>;
	salary: number;
	signingBonus: number;
}

export interface Offer {
	accepted?: boolean;
	fromCandidate: boolean;
	id: string;
	salary?: number;
	signingBonus?: number;
	total: number;
}

export interface LeadFilter {
	min: number;
	max: number | null;
}

export interface Lead {
	competitorProductId: string;
	id: string;
	impressions: number;
	timestamp: string | Date;  // iso timestamp string in some places, Date object in others (differs even in same array)
}

export * from "./tasks";
