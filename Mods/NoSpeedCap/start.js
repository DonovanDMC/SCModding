module.exports = {
    initialize: function () {
        // ignore
    },
    onLoadGame: function () {
        // haven't gotten around to Game yet for types
        if (!Game.Lifecycle._employeeSpeeds)
            Game.Lifecycle._employeeSpeeds = {};
        // eslint-disable-next-line no-eval
        Game.Lifecycle._loadEmployeeSpeeds = eval(Game.Lifecycle._loadEmployeeSpeeds.toString().replace("_.clamp(i.total,0,1500)", "Math.max(i.total,0)").replace("e._employeeSpeeds", "Game.Lifecycle._employeeSpeeds"));
    }
};
