import {externalCtrl} from "./screen.external";
import {populateCtrl} from "./populate.control";

export function eventIndex(app, serverConf, io){

    io.on('connection', function(socket){
        socket.emit("identity-yourself");
        socket.on('identity', function(locationID){
            console.log(locationID+" joined!")
            socket.join(locationID);
            

            //browser fully loaded
            socket.on('ready', function(){
                populateCtrl(serverConf, locationID, io)
            })
            

            //disconnect
            socket.on('disconnect', function(){
                socket.leave(locationID);
                console.log(locationID+' disconnected');
            });
        });

    });

    //Posted events external
    externalCtrl(app);
}