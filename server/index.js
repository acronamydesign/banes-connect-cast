"use strict";
const express = require("express");
const app = express();
const config_1 = require("./config");
const routes_index_1 = require("./routes.index");
//load config
const serverConf = config_1.configure(app);
//load routes
routes_index_1.routeInjection(app, serverConf);
//greeter
console.log("Server starting...");
//app.listen(serverConf.port); 
