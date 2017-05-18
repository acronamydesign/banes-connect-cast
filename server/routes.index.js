"use strict";
var noroot_route_1 = require("./routes/noroot.route");
var consumer_route_1 = require("./routes/consumer.route");
var settings_route_1 = require("./routes/settings.route");
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
