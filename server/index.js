"use strict";
var express = require("express");
var app = express();
var config_1 = require("./config");
var routes_index_1 = require("./routes.index");
//load config
var serverConf = config_1.configure(app);
//load routes
routes_index_1.routeInjection(app, serverConf);
//greeter
console.log("Server starting...");
app.listen(serverConf.port);
