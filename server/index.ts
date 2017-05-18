import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import {Application} from "express";

const app:Application = express();

import {configure} from "./config";
import {routeInjection} from "./routes.index";

//load config
const serverConf = configure( app );
//load routes
routeInjection( app, serverConf );

//greeter
console.log("Server starting...");
app.listen(serverConf.port);