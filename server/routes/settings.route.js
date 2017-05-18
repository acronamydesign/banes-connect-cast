"use strict";
function settingsRoute(app, serverConf) {
    app.get('/app/settings', function (req, res) { return res.send(serverConf); });
}
exports.settingsRoute = settingsRoute;
