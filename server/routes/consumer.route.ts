import {
    routeHelper,
    hasQueryString, 
    hypertextProtocal, 
    stringFunctions
} from "../template_fns/route.helper";
import * as path from "path";
import * as os from "os";
import * as url from "url";
import * as util from "util";
import * as request from "request-promise";
import {Request, Response} from "express";
import * as urlJoin from "url-join";
import {populateCtrl} from "../sse/populate.control";
import {location} from "../requests/location.request";
import * as jsonCleaner from "json-cleaner";

//get rendered templates
import {
    advert, 
    article, 
    feed, 
    message, 
    video
} from "../sorting/view-mode.sorting";

export interface PlaylistItem{
    /**
     * How to render this slide
    */
    viewMode:"advert_image"|"video"|"feed"|"message"|"article";
    /**
     * Has this slide been processed
    */
    processed:boolean;
    /**
     * The weight that this content should apear
    */
    weight:number;
    /**
     * It is highly likely that this slide has a title
    */
    title?:string;
    /**
     * Articles use this to display as a heading.
    */
    image:string;
    /**
     * Articles contain content as a simple string to be processed.
    */
    content:string;
}


//Go and build the templates server side, when ready emit them to connected client
async function playlistItemHandler(playlistItem, intendedIndex){

    const viewMode = playlistItem.view_mode;

    if(viewMode==="advert_image"){
        const template = await advert(playlistItem);
        return template;
    }

    //for the moment cannot run videos, disabled client side
    //try download them?

    //data-background-video may work?
    if(viewMode==="video"){
        const template = '<section data-disable="true"></section>'; //await video(playlistItem);
        return template;
    }
    if(viewMode==="feed"){
        const template = await feed(playlistItem);
        return template;
    }
    if(viewMode==="message"){
        const template = await message(playlistItem);
        return template;
    }
    if(viewMode==="article"){
        const template = await article(playlistItem);
        return template;
    }
}



export function consumerRoute( app, serverConf ){    
    //bind to server config
    app.get("/app", loadContent.bind(serverConf));
}

async function loadContent( req:Request, res:Response ){

    const locationID = req.cookies.location    
    const endpointData = await location(this, locationID);

    const slides = []

    endpointData.forEach(function(playlistItem, intendedIndex){
        let results = playlistItemHandler(playlistItem, intendedIndex)
        slides.push(results);
    });

    let templates = await Promise.all(slides);

    templates = templates.map(function(template){
        return {template:template}
    })

    const renderData = {
        location:locationID,
        _:{
            env:process.env.NODE_ENV,
            templates:JSON.stringify(templates)
        }
    }

    res.render("index", renderData);
    
}
