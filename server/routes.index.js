"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noroot_route_1 = require("./routes/noroot.route");
const consumer_route_1 = require("./routes/consumer.route");
const settings_route_1 = require("./routes/settings.route");
/**
 * This index function is intended to share the app and conf with its routes.
*/
function routeInjection(app, serverConf) {
    //disable root app
    noroot_route_1.disableRoot(app, serverConf);
    //main route
    consumer_route_1.consumerRoute(app, serverConf);
    //display config
    settings_route_1.settingsRoute(app, serverConf);
}
exports.routeInjection = routeInjection;
