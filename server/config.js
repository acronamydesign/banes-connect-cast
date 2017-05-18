"use strict";
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
//server side events
var control_1 = require("./sse/control");
var screen_control_1 = require("./sse/screen.control");
var publicPath = "../public";
var serverConf = {
    public: publicPath,
    engine: "pug",
    port: 8080,
    host: "localhost",
    parentSite: "connect-cast.dev/",
    youtubeApiKey: "AIzaSyAY7gaLqRDIudk4KesUmQNBuBZLjooTkRw",
    usePublic: function (dir) {
        return path.resolve(__dirname, publicPath, dir);
    }
};
var usePublic = serverConf.usePublic;
function configure(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    //static
    app.use('/scripts', express.static(usePublic('app')));
    app.use('/styles', express.static(usePublic('styles')));
    app.use('/images', express.static(usePublic('images')));
    app.use('/staff/scripts', express.static(usePublic('scripts')));
    app.use('/staff/styles', express.static(usePublic('styles')));
    app.use('/staff/images', express.static(usePublic('images')));
    app.use('/app/scripts', express.static(usePublic('app')));
    app.use('/app/styles', express.static(usePublic('styles')));
    app.use('/app/images', express.static(usePublic('images')));
    app.use('/app/staff/scripts', express.static(usePublic('scripts')));
    app.use('/app/staff/styles', express.static(usePublic('styles')));
    app.use('/app/staff/images', express.static(usePublic('images')));
    //Engines and serve
    app.set('views', usePublic(""));
    app.set('view engine', serverConf.engine);
    //Events (SSE)
    control_1.eventRoute(app);
    screen_control_1.refreshCtrl(app);
    return serverConf;
}
exports.configure = configure;
