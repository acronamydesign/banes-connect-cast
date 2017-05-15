const express = require('express'),
		app = express(),
		path = require('path'),
		fs = require('fs'),
		conf = require('../configuration/conf.json')// include global settings

// TBA
// //favicon buggering requests so lets serve one
// app.use(favicon(path.resolve(__dirname,serverConf.public,'themes','favicon.gif')))

//auto load routes
require('./load_routes.js')(app)
require('./messages/greeting.js')(serverConf)
