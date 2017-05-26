import {externalCtrl} from "./screen.external";
import {populateCtrl} from "./populate.control";
import * as SSE from "sse";
import * as cookie from "cookie";

export function eventIndex(app, serverConf,sseServer){
    

    sseServer.listen(serverConf.port, serverConf.host, function() {
        const sse = new SSE(sseServer);
        sse.on('connection', async function(client) {
            /**
             * Connection process.
            */
            const locationID = cookie.parse(client.req.headers.cookie).location
            const templates = await populateCtrl(serverConf, locationID, client);

            new Promise((resolve,reject)=>{
                client.send("templates", JSON.stringify(templates));
                resolve()
            })
            .then(function(){
                console.log(locationID + " subscribed to SSE!");
                client.send("greeting", "Hello "+locationID+" you are now subscribed!")
                client.send("handshake",'SSE connected on '+serverConf.port);
            })

        });

        

        console.log("SSE listening on "+serverConf.port)
        console.log("Server listening on "+serverConf.port)
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