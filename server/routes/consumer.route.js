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
function playlistItemHandler(playlistItem, intendedIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewMode = playlistItem.view_mode;
        if (viewMode === "advert_image") {
            const template = yield view_mode_sorting_1.advert(playlistItem);
            return template;
        }
        //for the moment cannot run videos, disabled client side
        //try download them?
        //data-background-video may work?
        if (viewMode === "video") {
            const template = '<section data-disable="true"></section>'; //await video(playlistItem);
            return template;
        }
        if (viewMode === "feed") {
            const template = yield view_mode_sorting_1.feed(playlistItem);
            return template;
        }
        if (viewMode === "message") {
            const template = yield view_mode_sorting_1.message(playlistItem);
            return template;
        }
        if (viewMode === "article") {
            const template = yield view_mode_sorting_1.article(playlistItem);
            return template;
        }
    });
}
function consumerRoute(app, serverConf) {
    //bind to server config
    app.get("/app", loadContent.bind(serverConf));
}
exports.consumerRoute = consumerRoute;
function loadContent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const locationID = req.cookies.location;
        const endpointData = yield location_request_1.location(this, locationID);
        const slides = [];
        endpointData.forEach(function (playlistItem, intendedIndex) {
            let results = playlistItemHandler(playlistItem, intendedIndex);
            slides.push(results);
        });
        let templates = yield Promise.all(slides);
        templates = templates.map(function (template) {
            return { template: template };
        });
        const renderData = {
            location: locationID,
            _: {
                env: process.env.NODE_ENV,
                templates: JSON.stringify(templates)
            }
        };
        res.render("index", renderData);
    });
}
