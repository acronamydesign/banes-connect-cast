import {location} from "../requests/location.request";

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
async function playlistItemHandler(playlistItem, locationId, intendedIndex){

    const viewMode = playlistItem.view_mode;

    if(viewMode==="advert_image"){
        const template = await advert(playlistItem);
        return JSON.stringify({template:template, index:intendedIndex});
    }

    //for the moment cannot run videos, disabled client side
    //try download them?

    //data-background-video may work?
    if(viewMode==="video"){
        const template = ""; //await video(playlistItem);
        return {template:template, index:intendedIndex, disabled:true};
    }
    if(viewMode==="feed"){
        const template = await feed(playlistItem);
        return {template:template, index:intendedIndex};
    }
    if(viewMode==="message"){
        const template = await message(playlistItem);
        return {template:template, index:intendedIndex};
    }
    if(viewMode==="article"){
        const template = await article(playlistItem);
        return {template:template, index:intendedIndex};
    }
}

export async function populateCtrl(serverConf, locationId){

    const endpointData = await location(serverConf, locationId);
    //initial loaded content
    const slides = []

    endpointData.forEach(function(playlistItem, intendedIndex){

        let results = playlistItemHandler(playlistItem, locationId, intendedIndex)
        slides.push(results);
    });

    //Ready to send
    if(slides.length === endpointData.length){
        return await slides
    }
}