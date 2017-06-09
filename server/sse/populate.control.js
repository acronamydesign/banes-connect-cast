"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_request_1 = require("../requests/location.request");
//get rendered templates
const view_mode_sorting_1 = require("../sorting/view-mode.sorting");
//Go and build the templates server side, when ready emit them to connected client
function playlistItemHandler(playlistItem, locationId, intendedIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewMode = playlistItem.view_mode;
        if (viewMode === "advert_image") {
            const template = yield view_mode_sorting_1.advert(playlistItem);
            return JSON.stringify({ template: template, index: intendedIndex });
        }
        //for the moment cannot run videos, disabled client side
        //try download them?
        //data-background-video may work?
        if (viewMode === "video") {
            const template = ""; //await video(playlistItem);
            return { template: template, index: intendedIndex, disabled: true };
        }
        if (viewMode === "feed") {
            const template = yield view_mode_sorting_1.feed(playlistItem);
            return { template: template, index: intendedIndex };
        }
        if (viewMode === "message") {
            const template = yield view_mode_sorting_1.message(playlistItem);
            return { template: template, index: intendedIndex };
        }
        if (viewMode === "article") {
            const template = yield view_mode_sorting_1.article(playlistItem);
            return { template: template, index: intendedIndex };
        }
    });
}
function populateCtrl(serverConf, locationId) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpointData = yield location_request_1.location(serverConf, locationId);
        //initial loaded content
        const slides = [];
        endpointData.forEach(function (playlistItem, intendedIndex) {
            let results = playlistItemHandler(playlistItem, locationId, intendedIndex);
            slides.push(results);
        });
        //Ready to send
        if (slides.length === endpointData.length) {
            return yield slides;
        }
    });
}
exports.populateCtrl = populateCtrl;
