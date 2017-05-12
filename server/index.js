var express = require('express'),
		app = express(),
		http = require('http'),
		jade = require('jade'),
		path = require('path'),
		fs = require('fs'),
		favicon = require('serve-favicon'),
		conf = require('../configuration/conf.json')// include global settings

var useConf = {}
useConf.public = '../public'
useConf.engine = conf.templateEngine
useConf.frontend_port = conf.port
useConf.host = conf.localhost

//favicon buggering requests so lets serve one
app.use(favicon(path.resolve(__dirname,useConf.public,'themes','favicon.gif')))

//set config
var io = require('./conf.js')
	.bind(useConf)(app)

//auto load routes
require('./load_routes.js')(app,io,useConf)
require('./messages/greeting.js')(useConf)
