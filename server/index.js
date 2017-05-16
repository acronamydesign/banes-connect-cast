const express = require('express'),
		app = express(),
		path = require('path'),
		fs = require('fs');

//auto load routes
const serverConf = require("./conf.js")(app);
require('./load_routes.js')(app, serverConf);
//greeter
console.log("Server starting...")
app.listen(serverConf.port);