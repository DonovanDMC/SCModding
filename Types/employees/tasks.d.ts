import type { EmployeeLevel, EmployeeTypeName } from "../constants";
import type { DevComponent } from "../misc";

export type AnyTask = GenericTask | StoppedTask | SimpleDevelopmentTask | AdvancedDevelopmentTask | SupporterTask | RecruiterTask;

export interface GenericTask {
	completedMinutes: number;
	state: "Running";
	totalMinutes: number;
}

export interface StoppedTask {
	state: "Stopped";
}

// Developer, Marketer
export interface SimpleDevelopmentTask extends GenericTask {
	component: DevComponent;
}

// Lead Developer, Designer, SysAdmin
export interface AdvancedDevelopmentTask extends SimpleDevelopmentTask {
	module: DevComponent;
}

export interface SupporterTask {
	completedMinutes?: number;
	state: "Running" | "Stalled";
	totalMinutes?: number;
	tickedId: string | null;
}

export interface RecruiterTask extends GenericTask {
	employeeTypeName: EmployeeTypeName;
	level: EmployeeLevel;
	researchDemands: boolean;
	researchSalary: boolean;
}
