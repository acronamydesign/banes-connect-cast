"use strict";
var ServerSideEvents = require("express-sse");
var sse = new ServerSideEvents();
function eventRoute(app) {
    app.get('/stream', sse.init);
}
exports.eventRoute = eventRoute;
exports.__esModule = true;
exports["default"] = sse;
