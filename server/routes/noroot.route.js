"use strict";
var url = require("url");
function disableRoot(app, serverConf) {
    app.get('/', function (req, res) {
        var query = url.parse(req.url, true).query;
        res.cookie("location", query.location);
        res.redirect("/app");
    });
}
exports.disableRoot = disableRoot;
