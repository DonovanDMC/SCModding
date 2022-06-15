import type { Controller } from "./controller";
import type { Rack, RackPerformance } from "./rack";
import type { Orientation, RackDeviceName } from "../constants";

export type HostingBuildingName = `${"Small" | "Medium" | "Large"}Hosting`;
export interface Hosting {
	buildingName: HostingBuildingName;
	controllers: Array<Controller>;
	grid: Array<HostingGridItem>;
	inventory: HostingInventory;
	performance: HostingPerformance;
	racks: Array<Rack>;
}

export type HostingItemName = `aircon${1 | 2 | 3 | 4}` | "centralizedClockrateController" | `${"small" | "tall" | "large"}_rack`;
export interface HostingGridItem {
	controllerId?: string;
	floor: number;
	itemName: HostingItemName;
	orientation: Orientation;
	rackId?: string;
	workstationId?: undefined;
	x: number;
	y: number;
}

// if an inventory item gets set to a value, it will not disappear when falling to zero
export type HostingInventory = {
	[K in RackDeviceName]?: number;
};

export interface HostingPerformance {
	generatedHeat: [number, number, number];
	highestThroughput: number;
	lowestThroughput: number;
	producedCu: number;
	rackPerformances: Array<RackPerformance>;
	temperatures: [number, number, number];
	totalCacheThroughput: number;
	totalDatabaseThroughput: number;
	totalPower: number;
	totalWebserverThroughput: number;
}

export * from "./controller";
export * from "./rack";
