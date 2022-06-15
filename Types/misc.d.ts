/* eslint-disable @typescript-eslint/ban-types */
import type { Component, ComponentName } from "./constants";

export interface Message {
	visible: boolean;
	message: null; // @TODO
	callback: Function | null;
	isConfirm: boolean;
	body?: string;
}

export interface ActiveBuilding {
	floors: number;
	gridOffset: Record<"top" | "left", number>; // @TODO can any other names be here?
	height: number;
	image: string;
	name: string; // @TODO specific names
	price: number;
	rent: number;
	size: Record<"width" | "height", number>;
	temperature?: number; // hosting
	thumbnailPath: string;
	type: "Office" | "Hosting";
	width: number;
	workstations?: number;
}
export interface DevComponent extends Component {
	id: string;
	isResearched: boolean;
	order: number;
}

export interface Cheats {
	GetComponents(amount: number): void;
	GetMoney(aount: number): void;
	CompleteAllTasks(): void;
	SkipADay(): void;
	EveryoneHappy(): void;
	UnlockEverything(): void;
	UnlockAllHelp(): void;
	TrainAll(): void;
}

export interface ManagerBonus {
	speed: number;
	isAtWork: boolean;
}

export type ComponentMap = {
	[K in ComponentName]?: number;
};
