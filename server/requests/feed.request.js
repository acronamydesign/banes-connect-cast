"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const request = require("request-promise");
function loadFeedData(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Requesting feed for " + endpoint);
        //Endpoint data
        let endpointData = yield request(endpoint);
        endpointData = JSON.parse(endpointData);
        return endpointData.nodes.map(item => item.node);
    });
}
exports.loadFeedData = loadFeedData;