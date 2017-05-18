"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var route_helper_1 = require("../template_fns/route.helper");
var request = require("request-promise");
var urlJoin = require("url-join");
//allow content to be pushed as it arives
var push = require("../sse/push.control");
function consumerRoute(app, serverConf) {
    //bind to server config
    app.get("/app", loadContent.bind(serverConf));
}
exports.consumerRoute = consumerRoute;
function loadContent(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        //initial load
        function playlistItemHandler(playlistItem) {
            if (playlistItem.viewMode === "advert_image") {
                return push.advert(playlistItem);
            }
            if (playlistItem.viewMode === "video") {
                return push.video(playlistItem);
            }
            if (playlistItem.viewMode === "feed") {
                return push.feed(playlistItem);
            }
            if (playlistItem.viewMode === "message") {
                return push.message(playlistItem);
            }
            if (playlistItem.viewMode === "article") {
                return push.article(playlistItem);
            }
        }
        var location, serverConf, parentSite, endpoint, endpointData, playlist, renderData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    location = req.cookies.location, serverConf = this, parentSite = route_helper_1.hypertextProtocal(serverConf.parentSite, "http://"), endpoint = urlJoin(parentSite, "get", route_helper_1.stringFunctions.hyphanate(location));
                    console.log("Requesting content for", location);
                    return [4 /*yield*/, request(endpoint)];
                case 1:
                    endpointData = _a.sent();
                    endpointData = JSON.parse(endpointData);
                    playlist = endpointData.map(function (item, index) {
                        var playlistItem = {
                            viewMode: item.view_mode,
                            processed: false,
                            weight: index
                        };
                        return playlistItemHandler(playlistItem);
                    });
                    console.log(playlist);
                    renderData = {
                        title: location,
                        _: {
                            data: endpointData.length
                        }
                    };
                    res.render("index", renderData);
                    return [2 /*return*/];
            }
        });
    });
}
// const filterVicinity = require('../filter/filter_vicinity.js'),
//       filterFeeds = require('../filter/filter_feeds.js'),
//       templateLocals = require('../template_fns/route_locals.js')
// function hyphanate(str) {
//   return str.replace(/\_/g, '-')
// }
// module.exports = function (app, conf) {
// app.get('/app', init)
// function init(req, res) {
//   if (url.parse(req.url, true).query) {
//     const q =                 url.parse( req.url, true ).query,
//           loc =               q.location,
//           vic =               q.vicinity,
//           parentSite =        `http://${conf.parentSite}`,
//           reqPath =           `${parentSite}${path.join('get', hyphanate(loc))}`,
//           queryString =       `?locations=${loc}`,
//           debugMode =         q.debug || false
//     //Data to be sent to views
//     const renderData = {
//       location: loc,
//       vicinity: vic,
//       server:   conf
//     }
//     //Request as promise
//     console.log('requesting', reqPath)
//     rp(reqPath).then((data)=>{
//         if(debugMode){res.send(JSON.parse(data))}
//         var params = {
//           location: loc,
//           audience: req.params.audience
//         }
//         console.log(params)
//         //if all data was sent then pass to filter for cleaning.
//         console.log('##Before Vicinity', 'Go get data from Drupal json based on request url')
//         filterVicinity(data, params, conf, (cleanData, feeds) => {
//           if (feeds.length > 0 || cleanData.length > 0) {
//             if (feeds.length > 0) { console.log('Feeds: true') }
//             if (cleanData.length > 0) { console.log('Drupal Nodes: true') }
//             console.log('###After filter_vicinity.js', 'we got data so lets prepare the data for view output')
//           }
//           else {
//             console.log('[WARNING]')
//             console.log('###After filter_vicinity.js', 'we have no DATA! please debug the file!')
//             throw 'No data available for template engine to display, this can happen even if data was recieved!'
//           }
//           renderData.$ = templateLocals(cleanData);
//           renderData.data = cleanData;
//           console.log(' ')
//           console.log('................................................')
//           console.log('[step 2: prepare data for template engine]')
//           console.log('................................................')
//           console.log('feeds', feeds || 'no feed')
//           console.log(' ')
//           if (feeds.length === 0) {
//             res.render('index', renderData)
//           }
//           else {
//             feeds.forEach((item) => {
//               console.log(item)
//               rp(item)
//                 .then((data) => {
//                   //CAUSEING PROBLEMS
//                   item.content = data
//                   var feedReady = cleanData.filter(node => {
//                     console.log('node data', node)
//                     if (node.nid === item.nid) {
//                       //#note feeds are requested here
//                       node.content = filterFeeds( item ).content
//                       return node
//                     }
//                   })
//                   console.log('#### feedReady')
//                   //!!Feeds have been parsed and ready to render the entire screen!!
//                   res.render('index', renderData)
//                 })
//                 .catch((err) => {
//                   if (err) {
//                     console.log(err)
//                     res.render('err',{
//                       data: {
//                         title: 'General Error',
//                         server: conf
//                       }
//                     })
//                   }
//                 })
//               })
//             }
//           })
//       })
//       .catch((err) => {
//         if (err) {
//           console.log(err)
//           res.render('err', {
//             data: {
//               title: 'Connection lost',
//               server: conf,
//               error: err
//             }
//           })
//         }
//       })
//   } //endif
//   else {
//     res.render('err', {
//       data: {
//         title: 'Something went wrong',
//         server: conf
//       }
//     })
//   }
// }
// }
