import * as ServerSideEvents from "express-sse";

const sse = new ServerSideEvents()
export function eventRoute(app){
    app.get('/stream', sse.init);
}

export default sse;