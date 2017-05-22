"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const route_helper_1 = require("../template_fns/route.helper");
const urlJoin = require("url-join");
const request = require("request-promise");
function location(serverConf, locationID) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = locationID, parentSite = route_helper_1.hypertextProtocal(serverConf.parentSite, "http://"), endpoint = urlJoin(parentSite, "get", route_helper_1.stringFunctions.hyphanate(location));
        console.log("Requesting content for", location, "at " + endpoint);
        //Endpoint data
        let endpointData = yield request(endpoint);
        endpointData = JSON.parse(endpointData);
        return endpointData;
    });
}
exports.location = location;
