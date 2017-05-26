"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const yargs = require("yargs");
const args = yargs.argv;
const app = express();
const config_1 = require("./config");
const routes_index_1 = require("./routes.index");
//load config
const serverConf = config_1.configure(app);
//load routes
routes_index_1.routeInjection(app, serverConf);
//greeter
console.log("Server starting with host " + args.host);
//app.listen(serverConf.port); 
