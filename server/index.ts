import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import {Application} from "express";
import * as yargs from "yargs";
const args = yargs.argv


console.log(args)

const app:Application = express();

import {configure} from "./config";
import {routeInjection} from "./routes.index";

//load config
const serverConf = configure( app );
//load routes
routeInjection( app, serverConf );

//greeter
console.log("Server starting with host "+ args.host);
app.listen(serverConf.port);