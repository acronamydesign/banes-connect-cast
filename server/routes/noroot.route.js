"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
function disableRoot(app, serverConf) {
    app.get('/', (req, res) => {
        const query = url.parse(req.url, true).query;
        res.cookie("location", query.location);
        res.redirect("/app");
    });
}
exports.disableRoot = disableRoot;
