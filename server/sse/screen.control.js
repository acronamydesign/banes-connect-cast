"use strict";
var control_1 = require("./control");
function refreshCtrl(app) {
    //@ctrl :: param to event fire in browser.
    //send event to all screens
    app.post("/ctrl/:operation", function (req, res) {
        control_1["default"].send(req.params, "ctrl");
        res.send("Running task: " + req.params.operation);
    });
    //@ctrl/location-id :: param to event fire in browser.
    //send ctrl event to a location matching the query string id
    app.post("/ctrl/:location/:operation", function (req, res) {
        control_1["default"].send(req.params, "ctrl");
        res.send("Running task: @" + req.params.location + ": " + req.params.operation);
    });
}
exports.refreshCtrl = refreshCtrl;
