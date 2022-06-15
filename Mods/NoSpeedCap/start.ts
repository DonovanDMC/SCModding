/// <reference path="../../Types/global.d.ts" />
// https://github.com/DonovanDMC/SCModding/tree/master/Mods/NoSpeedCap

module.exports = {
	initialize() {
		// ignore
	},
	onLoadGame() {
		// haven't gotten around to Game yet for types
		if (!(Game as { Lifecycle: { _employeeSpeeds: Record<never, never>; };}).Lifecycle._employeeSpeeds) (Game as { Lifecycle: { _employeeSpeeds: Record<never, never>; };}).Lifecycle._employeeSpeeds = {};
		// eslint-disable-next-line no-eval
		(Game as { Lifecycle: { _loadEmployeeSpeeds(): void; };}).Lifecycle._loadEmployeeSpeeds = eval((Game as { Lifecycle: { _loadEmployeeSpeeds(): void; };}).Lifecycle._loadEmployeeSpeeds.toString().replace("_.clamp(i.total,0,1500)", "Math.max(i.total,0)").replace("e._employeeSpeeds", "Game.Lifecycle._employeeSpeeds")) as () => void;
	}
} as ModExports;
