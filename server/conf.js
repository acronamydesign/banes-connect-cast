const path = require('path'),
		express = require('express'),
		stylus = require('stylus'),
		fs = require('fs'),
		http = require('http'),
		favicon = require('serve-favicon'),
		bodyParser = require('body-parser')

const serverConf = {
	public: "../public",
	engine: "pug",
	port:8080,
	host:"localhost",
	parentSite:"connect-cast.dev/"
}

function usePublic(dir){
	return path.resolve(__dirname, serverConf.public, dir);
}
//attach to serverConf
serverConf.usePublic = usePublic;

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended:false}))

console.log("HERE", '/scripts', usePublic('scripts'))

	//static
	app.use('/scripts', 		express.static( usePublic('scripts') ));
	app.use('/styles', 			express.static( usePublic('styles') ));
	app.use('/images', 			express.static( usePublic('images') ));
	app.use('/staff/scripts', 	express.static( usePublic('scripts') ));
	app.use('/staff/styles', 	express.static( usePublic('styles') ));
	app.use('/staff/images', 	express.static( usePublic('images') ));
	
	app.use('/app/scripts', 		express.static( usePublic('scripts') ));
	app.use('/app/styles', 			express.static( usePublic('styles') ));
	app.use('/app/images', 			express.static( usePublic('images') ));
	app.use('/app/staff/scripts', 	express.static( usePublic('scripts') ));
	app.use('/app/staff/styles', 	express.static( usePublic('styles') ));
	app.use('/app/staff/images', 	express.static( usePublic('images') ));

	//Engines and serve
	app.set('views', 		usePublic(""));
	app.set('view engine', 	serverConf.engine);

	//Events (SSE)


	return serverConf;
}
