/// <reference path="../../Types/global.d.ts" />

module.exports = {
	initialize() {
		// ignore
	},
	onLoadGame() {
		const fw = Frameworks.find(f => f.name === "nitrosoft2020" as "FusionFramework1")!;
		fw.cuPerMs = 0.005;
		fw.maxFeatureLevel = 25000;
		fw.maxFeatures = 15;
		Frameworks[Frameworks.indexOf(fw)] = fw;
		window.addEventListener("keydown", (ev) => {
			// @ts-expect-error not about to type out `Remote`
			// eslint-disable-next-line
			if ((ev.code === "KeyI" && ev.ctrlKey && ev.shiftKey) || ev.code === "F12") Remote.openDevTools();
		});
	}
} as ModExports;
