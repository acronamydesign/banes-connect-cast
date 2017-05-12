//set config form ./configuration/conf.json
var developer = require('./configuration/conf.json').developer

require('./server/index.js')

if(developer) require('./build/index.js')
