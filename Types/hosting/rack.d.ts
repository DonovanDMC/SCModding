import type { RackDeviceName, RackDeviceState } from "../constants";

export interface Rack {
	controllerId: string | null;
	id: string;
	/** small_rack, tall_rack, large_rack */
	itemName: string;
	layout: Array<Device>;
	name: string;
	originalName: string;
}

export type Device = FilledDevice | EmptyDevice;
export interface FilledDevice {
	clockRate: number;
	deviceName: RackDeviceName;
	id: string;
	lastPatchDay: number;
	powered: boolean;
	units: number;
}

export interface EmptyDevice {
	deviceName: null;
	id: string;
	units: 1;
}

export interface RackPerformance {
	devices: Array<PerformanceDevice>;
	generatedHeat: number;
	id: string;
	rackTemperature: number;
	totalCacheThroughput: number;
	totalConsumedPower: number;
	totalDatabaseThroughput: number;
	totalWebserverThroughput: number;
}

export interface PerformanceDevice {
	cacheThroughput: number | null;
	consumedPower: number;
	databaseThroughput: number | null;
	id: string;
	state: RackDeviceState;
	temperature: number;
	webserverThroughput: number;
}
