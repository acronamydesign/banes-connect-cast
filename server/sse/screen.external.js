"use strict";
function externalCtrl(app) {
    //@ctrl :: param to event fire in browser.
    //send event to all screens
    app.post("/ctrl/:operation", (req, res) => {
        //sse.send(req.params, "ctrl");
        //res.send("Running task: "+req.params.operation)
    });
    //@ctrl/location-id :: param to event fire in browser.
    //send ctrl event to a location matching the query string id
    app.post("/ctrl/:location/:operation", (req, res) => {
        //sse.send(req.params, "ctrl");
        //res.send("Running task: @"+req.params.location+": "+req.params.operation)
    });
}
exports.externalCtrl = externalCtrl;
