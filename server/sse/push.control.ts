import { PlaylistItem } from "../routes/consumer.route";
import sse from "./control";

export function advert( playlistItem:PlaylistItem ){
    console.log(playlistItem)
    
    sse.send(playlistItem, "populate");

    //for tracking
    return playlistItem;
}

export function article( playlistItem:PlaylistItem ){
    
    sse.send(playlistItem, "populate");

    //for tracking
    return playlistItem;
}

export function feed( playlistItem:PlaylistItem ){
    
    sse.send(playlistItem, "populate");

    //for tracking
    return playlistItem;
}

export function message( playlistItem:PlaylistItem ){
    
    sse.send(playlistItem, "populate");

    //for tracking
    return playlistItem;
}

export function video( playlistItem:PlaylistItem ){
    
    sse.send(playlistItem, "populate");

    //for tracking
    return playlistItem;
}