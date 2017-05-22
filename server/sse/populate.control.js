"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const location_request_1 = require("../requests/location.request");
//get rendered templates
const view_mode_sorting_1 = require("../sorting/view-mode.sorting");
//helper
function socketScreen(io, locationId) {
    return io.to(locationId);
}
//Go and build the templates server side, when ready emit them to connected client
function playlistItemHandler(playlistItem, io, locationId, intendedIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewMode = playlistItem.view_mode;
        if (viewMode === "advert_image") {
            const template = yield view_mode_sorting_1.advert(playlistItem);
            socketScreen(io, locationId).emit("populate", { template: template, index: intendedIndex });
        }
        if (viewMode === "video") {
            const template = yield view_mode_sorting_1.video(playlistItem);
            socketScreen(io, locationId).emit("populate", { template: template, index: intendedIndex });
        }
        if (viewMode === "feed") {
            const template = yield view_mode_sorting_1.feed(playlistItem);
            socketScreen(io, locationId).emit("populate", { template: template, index: intendedIndex });
        }
        if (viewMode === "message") {
            const template = yield view_mode_sorting_1.message(playlistItem);
            socketScreen(io, locationId).emit("populate", { template: template, index: intendedIndex });
        }
        if (viewMode === "article") {
            const template = yield view_mode_sorting_1.article(playlistItem);
            socketScreen(io, locationId).emit("populate", { template: template, index: intendedIndex });
        }
    });
}
function populateCtrl(serverConf, locationId, io) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpointData = yield location_request_1.location(serverConf, locationId);
        //initial loaded content
        endpointData.forEach((playlistItem, intendedIndex) => {
            playlistItemHandler(playlistItem, io, locationId, intendedIndex);
        });
    });
}
exports.populateCtrl = populateCtrl;
