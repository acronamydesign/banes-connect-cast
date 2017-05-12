var path = require('path'),
		express = require('express'),
		stylus = require('stylus'),
		fs = require('fs'),
		path = require('path'),
		http = require('http'),
		bodyParser = require('body-parser')

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended:false}))

	//static
	app.use('/scripts', express.static(path.resolve(__dirname,'../public/scripts')));
	app.use('/styles', express.static(path.resolve(__dirname,'../public/themes')));
	app.use('/images', express.static(path.resolve(__dirname,'../public/images')));
	app.use('/staff/scripts', express.static(path.resolve(__dirname,'../public/scripts')));
	app.use('/staff/styles', express.static(path.resolve(__dirname,'../public/themes')));
	app.use('/staff/images', express.static(path.resolve(__dirname,'../public/images')));

	app.set('views', path.resolve(__dirname,this.public));
	app.set('view engine', this.engine);

	//patching depricated socket.io
	var server = require('http').createServer(app);
	var io = require('socket.io')(server);
	server.listen(8080,'127.0.0.1');

	//var port = app.listen(this.frontend_port),
	//		io = require('socket.io').listen(port)

	return io
}
