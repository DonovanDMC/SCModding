"use strict";
/// <reference path="../../Types/global.d.ts" />
module.exports = {
    initialize() {
        // ignore
    },
    onLoadGame() {
        const fw = Frameworks.find(f => f.name === "nitrosoft2020");
        fw.cuPerMs = 0.005;
        fw.maxFeatureLevel = 25000;
        fw.maxFeatures = 15;
        Frameworks[Frameworks.indexOf(fw)] = fw;
        window.addEventListener("keydown", (ev) => {
            // @ts-expect-error not about to type out `Remote`
            // eslint-disable-next-line
            if ((ev.code === "KeyI" && ev.ctrlKey && ev.shiftKey) || ev.code === "F12")
                Remote.openDevTools();
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0RBQWdEO0FBRWhELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDaEIsVUFBVTtRQUNULFNBQVM7SUFDVixDQUFDO0lBQ0QsVUFBVTtRQUNULE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGVBQXFDLENBQUUsQ0FBQztRQUNuRixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQixFQUFFLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUMzQixFQUFFLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDekMsa0RBQWtEO1lBQ2xELDJCQUEyQjtZQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLO2dCQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDYSxDQUFDIn0=