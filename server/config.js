"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const http = require("http");
const socket = require("socket.io");
//server side events
const control_index_1 = require("./sse/control.index");
const publicPath = "../public";
const serverConf = {
    public: publicPath,
    engine: "pug",
    port: 8080,
    socketIoPort: 3001,
    host: "localhost",
    parentSite: "connect-cast.dev/",
    youtubeApiKey: "AIzaSyAY7gaLqRDIudk4KesUmQNBuBZLjooTkRw",
    usePublic: (dir) => {
        return path.resolve(__dirname, publicPath, dir);
    }
};
const usePublic = serverConf.usePublic;
function configure(app) {
    //start socket io
    const socketIoServer = http.createServer(app);
    const io = socket(socketIoServer);
    //middlewhare
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    //make socket io portable
    app.set('socketio', io);
    //static
    app.use("/socket.io.js", express.static(path.resolve("node_modules", "socket.io-client", "dist", "socket.io.js")));
    app.use('/scripts', express.static(usePublic('app')));
    app.use('/styles', express.static(usePublic('styles')));
    app.use('/images', express.static(usePublic('src/images')));
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
    socketIoServer.listen(serverConf.socketIoPort, () => {
        console.log("Socket.io is listening on port " + serverConf.socketIoPort);
    });
    //Events (SSE)
    control_index_1.eventIndex(app, serverConf, io);
    return serverConf;
}
exports.configure = configure;
