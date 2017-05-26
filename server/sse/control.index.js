"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const populate_control_1 = require("./populate.control");
const SSE = require("sse");
const cookie = require("cookie");
function eventIndex(app, serverConf, sseServer) {
    sseServer.listen(serverConf.port, serverConf.host, function () {
        const sse = new SSE(sseServer);
        sse.on('connection', function (client) {
            return __awaiter(this, void 0, void 0, function* () {
                /**
                 * Connection process.
                */
                const locationID = cookie.parse(client.req.headers.cookie).location;
                const templates = yield populate_control_1.populateCtrl(serverConf, locationID, client);
                new Promise((resolve, reject) => {
                    client.send("templates", JSON.stringify(templates));
                    resolve();
                })
                    .then(function () {
                    console.log(locationID + " subscribed to SSE!");
                    client.send("greeting", "Hello " + locationID + " you are now subscribed!");
                    client.send("handshake", 'SSE connected on ' + serverConf.port);
                });
            });
        });
        console.log("SSE listening on " + serverConf.port);
        console.log("Server listening on " + serverConf.port);
    });
    //    app.get('/stream', sse, function(req,res){
    //         res.sse("some server data")
    //     });
    // io.on('connection', function(socket){
    //     socket.emit("identity-yourself");
    //     socket.on('identity', function(locationID){
    //         console.log(locationID+" joined!")
    //         socket.join(locationID);
    //         //browser fully loaded
    //         socket.on('ready', function(){
    //             populateCtrl(serverConf, locationID, io)
    //         })
    //         //disconnect
    //         socket.on('disconnect', function(){
    //             socket.leave(locationID);
    //             console.log(locationID+' disconnected');
    //         });
    //     });
    // });
    //Posted events external
    //externalCtrl(app);
}
exports.eventIndex = eventIndex;
