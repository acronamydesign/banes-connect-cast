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

//helper
function socketScreen(io, locationId:string):SocketIO.Namespace{
    return io.to(locationId)
}


//Go and build the templates server side, when ready emit them to connected client
async function playlistItemHandler(playlistItem, io, locationId, intendedIndex){

    const viewMode = playlistItem.view_mode;

    if(viewMode==="advert_image"){
        const template = await advert(playlistItem);
        socketScreen(io, locationId).emit("populate", {template:template, index:intendedIndex});
    }
    if(viewMode==="video"){
        const template = await video(playlistItem);
        socketScreen(io, locationId).emit("populate", {template:template, index:intendedIndex});
    }
    if(viewMode==="feed"){
        const template = await feed(playlistItem);
        socketScreen(io, locationId).emit("populate", {template:template, index:intendedIndex});
    }
    if(viewMode==="message"){
        const template = await message(playlistItem);
        socketScreen(io, locationId).emit("populate", {template:template, index:intendedIndex});
    }
    if(viewMode==="article"){
        const template = await article(playlistItem);
        socketScreen(io, locationId).emit("populate", {template:template, index:intendedIndex});
    }
}

export async function populateCtrl(serverConf, locationId, io){
    const endpointData = await location(serverConf, locationId);
    //initial loaded content
    endpointData.forEach( (playlistItem, intendedIndex)=> {
        playlistItemHandler(playlistItem, io, locationId, intendedIndex)
    });
}