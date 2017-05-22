"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const YouTube = require("youtube-node");
const isUrl = require("is-url");
//init youtube api
const youTube = new YouTube();
youTube.setKey("AIzaSyAY7gaLqRDIudk4KesUmQNBuBZLjooTkRw");
function loadYoutubeVideo(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Requesting video for " + url);
        return new Promise((resolve, reject) => {
            if (isUrl(url)) {
                //Endpoint data
                let videoId = url.split("/").pop();
                youTube.getById(videoId, function (err, result) {
                    if (err) {
                        console.log(err);
                        resolve(false);
                    }
                    else {
                        function YTDurationToSeconds(duration) {
                            var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
                            var hours = (parseInt(match[1]) || 0);
                            var minutes = (parseInt(match[2]) || 0);
                            var seconds = (parseInt(match[3]) || 0);
                            return hours * 3600 + minutes * 60 + seconds;
                        }
                        let ms = YTDurationToSeconds(result.items[0].contentDetails.duration) * 1000;
                        resolve({ duration: ms, id: videoId });
                    }
                });
            }
            else {
                resolve(false);
            }
        })
            .catch(err => {
            if (err) {
                console.log(err);
            }
        });
    });
}
exports.loadYoutubeVideo = loadYoutubeVideo;
