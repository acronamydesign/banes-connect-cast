import * as path from "path";
import * as express from "express";
import * as stylus from "stylus";
import * as fs from "fs";
import * as favicon from "serve-favicon";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as http from "http";
import * as io from "socket.io";
import * as yargs from "yargs";

const args = yargs.argv

//server side events
import {eventIndex} from "./sse/control.index"


interface ServerCofig{
    /**
     * The public location which files are served from.
    */
    public:string;
    /**
     * The rendering engine used by express.
    */
    engine:string;
    /**
     * The port on which this server runs.
    */
    port:number;
    /**
     * The host ip on which this server runs.
    */
    host:string;
    /**
     * The parent site to consume endpoints.
    */
    parentSite:string;
    /**
     * The Youtube Api Key used by Banes.
    */
    youtubeApiKey:string;
    /**
     * A helpfull function to return the path to the public dir.
    */
    usePublic:(dir:string)=>string;
}

const publicPath = "../public";
const serverConf:ServerCofig = {
	public: publicPath,
	engine: "pug",
	port:8080,
	host:args.host,
	parentSite:args.host,
	youtubeApiKey:"AIzaSyAY7gaLqRDIudk4KesUmQNBuBZLjooTkRw",
    usePublic:(dir)=>{
        return path.resolve(__dirname, publicPath, dir);
    }
}

const usePublic = serverConf.usePublic;

export function configure(app){

    //start sse
    //const sseServer = http.createServer(app);
 


    //start socket io
    // const socketIoServer = http.createServer(app);
    // const IO = io.listen(socketIoServer);


    //middlewhare
	app.use(bodyParser.urlencoded({extended:false}))
    app.use(cookieParser())

	//static
	app.use("/socket.io.js",    express.static( path.resolve("node_modules","socket.io-client","dist","socket.io.js") ) );
    app.use('/scripts', 		express.static( usePublic('app') ));
	app.use('/styles', 			express.static( usePublic('styles') ));
	app.use('/images', 			express.static( usePublic('src/images') ));
	app.use('/staff/scripts', 	express.static( usePublic('scripts') ));
	app.use('/staff/styles', 	express.static( usePublic('styles') ));
	app.use('/staff/images', 	express.static( usePublic('images') ));
	
	app.use('/app/scripts', 		express.static( usePublic('app') ));
	app.use('/app/styles', 			express.static( usePublic('styles') ));
	app.use('/app/images', 			express.static( usePublic('images') ));
	app.use('/app/staff/scripts', 	express.static( usePublic('scripts') ));
	app.use('/app/staff/styles', 	express.static( usePublic('styles') ));
	app.use('/app/staff/images', 	express.static( usePublic('images') ));

	//Engines and serve
	app.set('views', 		usePublic(""));
	app.set('view engine', 	serverConf.engine);
	
	return serverConf;
}
