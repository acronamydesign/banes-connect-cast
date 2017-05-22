"use strict";
const screen_external_1 = require("./screen.external");
const populate_control_1 = require("./populate.control");
function eventIndex(app, serverConf, io) {
    io.on('connection', function (socket) {
        socket.emit("identity-yourself");
        socket.on('identity', function (locationID) {
            console.log(locationID + " joined!");
            socket.join(locationID);
            //browser fully loaded
            socket.on('ready', function () {
                populate_control_1.populateCtrl(serverConf, locationID, io);
            });
            //disconnect
            socket.on('disconnect', function () {
                socket.leave(locationID);
                console.log(locationID + ' disconnected');
            });
        });
    });
    //Posted events external
    screen_external_1.externalCtrl(app);
}
exports.eventIndex = eventIndex;
