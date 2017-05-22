
import * as request from "request-promise";

export async function loadFeedData( endpoint ){

    console.log("Requesting feed for "+ endpoint);
    //Endpoint data
    let endpointData = await request(endpoint);

    endpointData = JSON.parse(endpointData);

    return endpointData.nodes.map(item=>item.node);
}
