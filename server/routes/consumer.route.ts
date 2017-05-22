import {
    routeHelper,
    hasQueryString, 
    hypertextProtocal, 
    stringFunctions
} from "../template_fns/route.helper";
import * as path from "path";
import * as os from "os";
import * as url from "url";
import * as util from "util";
import * as request from "request-promise";
import {Request, Response} from "express";
import * as urlJoin from "url-join";
//allow content to be pushed as it arives
import * as push from "../sse/push.control";

export function consumerRoute( app, serverConf ){    
    //bind to server config
    app.get("/app", loadContent.bind(serverConf));
}

async function loadContent( req:Request, res:Response ){
    const location = req.cookies.location
    const renderData = {
        location:location,
        _:{
            data:{}
        }
    }

    res.render("index", renderData);
    
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
