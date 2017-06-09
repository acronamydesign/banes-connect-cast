import {disableRoot} from "./routes/noroot.route";
import {consumerRoute} from "./routes/consumer.route";
import {settingsRoute} from "./routes/settings.route";

/**
 * This index function is intended to share the app and conf with its routes.
*/
export function routeInjection( app, serverConf ){
    //disable root app
    disableRoot(app, serverConf);
    //main route
    consumerRoute(app, serverConf);
    //display config
    settingsRoute(app, serverConf);
}