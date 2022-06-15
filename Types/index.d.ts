/* eslint-disable @typescript-eslint/ban-types */
import type { Configuration, Options } from "./options";
import type { Workstation } from "./employees";
import type { Controller, Rack } from "./hosting";
import type { ActiveBuilding, MenuItem, Message } from "./misc";
import type { FinanceData } from "./money";
import type { Settings } from "./settings";

// these are NOT exhaustive, they're just what I've seen so far
export type View =
"menu" | "outsourcing" | "product" | "investmentProject" | "building" |
"inventory" | "company" | "manageinventory" | "competitors" | "employees" |
"finance" | "researchTree" | "purchase";
export type Mode = "cityMap";
export interface RootScope {
	Configuration: Configuration;
	Language: Record<string, string>;
	Message: Message;
	Version: string;
	activeBuilding: ActiveBuilding | null;
	daysPlayed: number;
	employeeType: null; // @TODO
	enableNextDayButton: boolean;
	financeData: FinanceData;
	menuItems: Array<MenuItem>;
	mode: Mode | null;
	officeBonus: number; // I've seen this be NaN, not sure if caused by mods
	options: Options;
	selectedController: Controller | null;
	selectedProductId: string | null;
	selectedRack: Rack | null;
	selectedWorkstation: Workstation | null;
	settings: Settings;
	tab: string | undefined | null;
	timeMachineActive: boolean;
	view: View | null;
	// This function does nothing but log a warning. I'm not going to properly document it.
	/** @deprecated Use Helpers.ShowNotification(message, color, hoursToShow, disableCountDownWhenTimeMachine) instead. */
	addNotification(e: unknown, t: unknown, n: unknown, a: unknown, i: unknown, r: unknown): void;
	/**
	 * Add a transaction
	 *
	 * @param {string} text - The text to show in the `Transactions` tab of Finance
	 * @param {number} amount - the amount to add (or remove, if negative) - zeros are ignored
	 * @param {boolean} [addToBalance=false] - if `amount` should actually be added to the balance (default: false)
	 */
	addTransaction(text: string, amount: number, addToBalance?: boolean): void;
	/** Close all currently open ui (requires unpause) */
	closeAllUi(): void;
	/**
	 * Show a confirmation prompt
	 *
	 * @param {unknown} e - unused in function body, seen used as empty string or null
	 * @param {string} body - the text body
	 * @param {Function} callback - a callback to call after confirming - not called if canceled
	 */
	confirm(unused: unknown, body: string, callback: () => void): void;
	/**
	 * Remove an employee from a workstation
	 *
	 * @param {string} id the workstation id
	 */
	deleteWorkstation(id: string): void;
	getPercentage(e: number, t: number, n: number | null): number;
}

export interface ModExports {
	initialize?(modPath: string): void;
	onBackgroundWorkerStart?(modPath: string): void;
	onLoadGame?(settings: Settings): void;
	onNewDay?(settings: Settings): void;
	onNewHour?(settings: Settings): void;
	onUnsubscribe?(callback: () => void): void;
	views?: Array<ModView>;
}

export interface ModView {
	name: string;
	viewPath: string;
	controller: Array<string | Function>;
}

export * from "./constants";
export * from "./employees";
export * from "./hosting";
export * from "./product";
export * from "./settings";
export * from "./database";
export * from "./helpers";
export * from "./misc";
export * from "./money";
export * from "./options";
