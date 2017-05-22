import {
    routeHelper,
    hasQueryString, 
    hypertextProtocal, 
    stringFunctions
} from "../template_fns/route.helper";
import * as urlJoin from "url-join";
import * as request from "request-promise";

export async function location( serverConf, locationID:string ){
    const location = locationID,
            parentSite = hypertextProtocal( serverConf.parentSite, "http://" ),
            endpoint = urlJoin( parentSite, "get", stringFunctions.hyphanate(location) );
    
    console.log("Requesting content for", location, "at "+endpoint);
    //Endpoint data
    let endpointData = await request(endpoint);

    endpointData = JSON.parse(endpointData);

    return endpointData;
}