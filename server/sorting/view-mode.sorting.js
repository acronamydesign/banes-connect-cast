"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const cheerio = require("cheerio");
const smartText = require("smart-text-snippet");
const isUrl = require("is-url");
//requests
const feed_request_1 = require("../requests/feed.request");
const youtube_request_1 = require("../requests/youtube.request");
//auto color
function isLight(hex_color) {
    let c, sum, threshold;
    threshold = 382.6;
    //fixes
    //if has a '#' remove it
    if (/^#/.test(hex_color)) {
        c = hex_color.replace(/^#/, '');
    }
    else {
        c = hex_color;
    }
    //if unhashed code is === to 3 then its a shortcode so fix it.
    if (c.length === 3) {
        c = c + c;
    }
    //now break it down into parts
    sum = parseInt(c[0] + c[1], 16);
    sum += parseInt(c[2] + c[3], 16);
    sum += parseInt(c[4] + c[5], 16);
    //if the sum is over the luminosity threshold then its light else.
    return sum > threshold;
}
;
//helpers
function imageSrcFromElement(image) {
    image = cheerio.load(image);
    //return src
    return image("img").attr("src");
}
//trim and concatinate
function chuncks(str, size) {
    let options = {
        len: size,
        breakChars: [' ', '\n', '\r\n', '"', '<'],
        stopChars: ['.', '!', '?'] // characters used as sentence enders.
    };
    smartText.chunk(str, options);
    return smartText.chunk(str, options);
}
function chunkFeedItemTemplate(title, body, image) {
    let pages = chuncks(body, 300);
    return pages.map((paragraph, index) => {
        return `
<section class="feed feed-content future" data-page='${index}' data-background-image="${image}">
    <header class="details">
        <span class="now-reading">${title}</span>
    </header>
    <article>
        ${paragraph}
    </article>
    <footer>
        <span class="page-number">
            page: ${(index + 1) + " <span class='devider'></span> " + pages.length}
        <span>
        <span class="feed-icon"></span>
    </footer>
</section>
`;
    }).join("");
}
function chunkFeedTemplate(playlistItem, feedData) {
    return feedData.map((feedItem, index) => {
        let title = feedItem.title, image = feedItem.field_img.src, body = feedItem.body, date = feedItem["Date Published"];
        return `
<section class="future ${playlistItem["view_mode"]} ${playlistItem["view_mode"]}-splash" data-background-image="${image}">
    <h1>${title}</h1>
    <h4>Published: ${date}</h4>
</section>
${chunkFeedItemTemplate(title, body, image)}
`;
    }).join("");
}
function chunkTemplate(title, content, image, viewMode) {
    return content.map((paragraph, index) => {
        return `
<section class="${viewMode} ${viewMode}-content future" data-page='${index}' data-background-image="${image}">
    <header class="details">
        <span class="now-reading">${title}</span>
    </header>
    <article>
        ${paragraph}
    </article>
    <footer>
        <span class="page-number">
            page: ${(index + 1)} <span class="devider"></span> ${content.length}
        <span>
    </footer>
</section>
`;
    }).join("");
}
function advert(playlistItem) {
    return __awaiter(this, void 0, void 0, function* () {
        //if there is an image then allow it to show else resolve false.
        return new Promise((resolve, reject) => {
            let image;
            if (playlistItem.hasOwnProperty("bg-image") && typeof playlistItem["bg-image"] === "string") {
                image = imageSrcFromElement(playlistItem["bg-image"]);
            }
            else {
                image = false;
            }
            let template = `
<section index="{{index}}" class="{{tense}} ${playlistItem['view_mode']}" data-background-image='${image}' >
    
</section>
`;
            if (image) {
                resolve(template);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.advert = advert;
function article(playlistItem) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let image = imageSrcFromElement(playlistItem.image);
            let template = `
<section index="{{index}}" class="{{tense}} ${playlistItem['view_mode']}" data-background-color="#222" data-background-image='${image}' >
    <h1>${playlistItem.title}</h1>
</section>

${chunkTemplate(playlistItem.title, chuncks(playlistItem.content, 300), image, playlistItem['view_mode'])}
`;
            resolve(template);
        });
    });
}
exports.article = article;
function feed(playlistItem) {
    return __awaiter(this, void 0, void 0, function* () {
        let feedData;
        if (playlistItem.hasOwnProperty("feed_url") &&
            typeof playlistItem["feed_url"] === "string" &&
            isUrl(playlistItem["feed_url"])) {
            //get feed data
            feedData = yield feed_request_1.loadFeedData(playlistItem["feed_url"]).catch(function (err) {
                if (err) {
                    console.log(err);
                    feedData = false;
                }
            });
        }
        else {
            feedData = false;
        }
        return new Promise((resolve, reject) => {
            let template = chunkFeedTemplate(playlistItem, feedData);
            if (feedData) {
                resolve(template);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.feed = feed;
function message(playlistItem) {
    return __awaiter(this, void 0, void 0, function* () {
        let color;
        if (playlistItem.hasOwnProperty("bg_color") && typeof playlistItem["bg_color"] === "string") {
            color = cheerio.load(playlistItem["bg_color"]);
            color = color("div").css("background-color");
        }
        else {
            color = "#fff";
        }
        let textColor = isLight(color) ? "#000" : "#fff";
        return new Promise((resolve, reject) => {
            let template = `
<section index="{{index}}" class="{{tense}} ${playlistItem['view_mode']}" data-background-color='${color}' >
    <h1 style="color:${textColor};">${playlistItem.title}</h1>
</section>
`;
            resolve(template);
        });
    });
}
exports.message = message;
function video(playlistItem) {
    return __awaiter(this, void 0, void 0, function* () {
        let video = yield youtube_request_1.loadYoutubeVideo(playlistItem["video_url"]);
        return new Promise((resolve, reject) => {
            let template = `
<section data-duration="${video.duration}" data-background-iframe="https://www.youtube.com/embed/${video.id}?autoplay=1&&cc_load_policy=1" index="{{index}}" class="{{tense}} ${playlistItem['view_mode']}" ></section>
`;
            if (video) {
                resolve(template);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.video = video;
