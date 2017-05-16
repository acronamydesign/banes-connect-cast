const http = require('http'),
  $ = require('../template_fns/route_locals.js'),
  path = require('path'),
  url = require('url'),
  os = require('os'),
  rp = require('request-promise'),
  conf = require('../../configuration/conf.json'),
  util = require('util')

function hyphanate(str) {
  return str.replace(/\_/g, '-')
}

var request = {}
request.port = 80
request.method = 'GET'

module.exports = function (app, conf) {

console.log("here",conf)

  app.get('/settings', function (req, res) {
    res.send(conf)
  })

  function init() {

    app.get('/app', qs)
    app.get('/app:audience', qs)

    function qs(req, res) {

      if (url.parse(req.url, true).query) {

        var q = url.parse(req.url, true).query,
          loc = q.location,
          vic = q.vicinity,
          par = conf.parentSite,
          reqPath = par + path.join('get', hyphanate(loc)),
          query = ['?locations=' + loc].join(''),
          debugMode = q.debug || false

        //Request Options
        options = {
          uri: reqPath,
          qs: query,
          headers: {
            'User-Agent': 'Request-Promise'
          },
          json: true
        }
        //Request as promise
        console.log('requesting', reqPath)
        rp(reqPath)
          .then(function (data) {

            if (debugMode) {
              res.send(JSON.parse(data))
            } else {
              var params = {
                location: loc,
                audience: req.params.audience
              }
              console.log(params)
              //if all data was sent then pass to filter for cleaning.
              console.log('##Before Vicinity', 'Go get data from Drupal json based on request url')
              require('../filter/filter_vicinity.js')(data, params, (cleanData, feeds) => {
                if (feeds.length > 0 || cleanData.length > 0) {
                  if (feeds.length > 0) {
                    console.log('Feeds: true')
                  }
                  if (cleanData.length > 0) {
                    console.log('Drupal Nodes: true')
                  }
                  console.log('###After filter_vicinity.js', 'we got data so lets prepare the data for view output')
                }
                else {
                  console.log('[WARNING]')
                  console.log('###After filter_vicinity.js', 'we have no DATA! please debug the file!')
                  throw 'No data available for template engine to display, this can happen even if data was recieved!'
                }

                console.log(' ')
                console.log('................................................')
                console.log('[step 2: prepare data for template engine]')
                console.log('................................................')


                console.log('feeds', feeds || 'no feed')
                console.log(' ')

                if (feeds.length === 0) {

                  res.render('index', {
                    $: require('../template_fns/route_locals.js')(cleanData),
                    data: cleanData,
                    location: loc,
                    vicinity: vic,
                    server: conf
                  })

                }
                else {


                  feeds.forEach((item) => {
                    console.log(item)
                    rp(item)
                      .then((data) => {

                        //CAUSEING PROBLEMS
                        item.content = data
                        var feedReady = cleanData.filter((node) => {
                          console.log('node data', node)
                          if (node.nid === item.nid) {
                            //#note feeds are requested here
                            node.content = require('../filter/filter_feeds.js')(item).content
                            return node
                          }
                        })

                        console.log('#### feedReady')

                        //!!Feeds have been parsed and ready to render the entire screen!!
                        res.render('index', {
                          $: require('../template_fns/route_locals.js')(cleanData),
                          data: cleanData,
                          location: loc,
                          vicinity: vic,
                          server: conf
                        })

                      })
                      .catch((err) => {
                        if (err) {
                          console.log(err)
                          res.render('err',
                            {
                              data: {
                                title: 'General Error',
                                server: conf
                              }
                            })
                        }
                      })

                  })
                }

              })
            }
          })
          .catch((err) => {
            if (err) {
              console.log(err)
              res.render('err', {
                data: {
                  title: 'Connection lost',
                  server: conf,
                  error: err
                }
              })
            }

          })
      } //endif
      else {
        res.render('err', {
          data: {
            title: 'Something went wrong',
            server: conf
          }
        })
      }

    }

  }
  init()
}
