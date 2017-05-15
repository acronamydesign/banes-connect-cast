const path = require('path'),
		express = require('express'),
		stylus = require('stylus'),
		fs = require('fs'),
		path = require('path'),
		http = require('http'),
		favicon = require('serve-favicon'),
		bodyParser = require('body-parser')

const serverConf = {
	public: "../public",
	engine: "pug",
	port:8080,
	host:"localhost"
}

function requirePublic(filename){
	return require( path.resolve(__dirname, serverConf.public, filename) );
}
//attach to serverConf
serverConf.requirePublic = requirePublic;

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended:false}))

	//static
	app.use('/scripts', express.static( requirePublic('../public/scripts') ));
	app.use('/styles', express.static( requirePublic('../public/styles') ));
	app.use('/images', express.static( requirePublic('../public/images') ));
	app.use('/staff/scripts', express.static( requirePublic('../public/scripts') ));
	app.use('/staff/styles', express.static( requirePublic('../public/styles') ));
	app.use('/staff/images', express.static( requirePublic('../public/images') ));
	
	//Engines and serve
	app.set('views', path.resolve(__dirname, serverConf.public));
	app.set('view engine', serverConf.engine);

	//Events (SSE)


	return serverConf;
}
