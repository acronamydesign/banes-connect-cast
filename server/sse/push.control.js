"use strict";
var control_1 = require("./control");
function advert(playlistItem) {
    console.log(playlistItem);
    control_1["default"].send(playlistItem, "populate");
    //for tracking
    return playlistItem;
}
exports.advert = advert;
function article(playlistItem) {
    control_1["default"].send(playlistItem, "populate");
    //for tracking
    return playlistItem;
}
exports.article = article;
function feed(playlistItem) {
    control_1["default"].send(playlistItem, "populate");
    //for tracking
    return playlistItem;
}
exports.feed = feed;
function message(playlistItem) {
    control_1["default"].send(playlistItem, "populate");
    //for tracking
    return playlistItem;
}
exports.message = message;
function video(playlistItem) {
    control_1["default"].send(playlistItem, "populate");
    //for tracking
    return playlistItem;
}
exports.video = video;
