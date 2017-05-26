"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function settingsRoute(app, serverConf) {
    app.get('/app/settings', (req, res) => res.send(serverConf));
}
exports.settingsRoute = settingsRoute;
