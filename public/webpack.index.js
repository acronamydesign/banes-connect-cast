//Webpack 

require("node_modules/reveal.js/css/theme/white.css");
require('@styles/index.styl');

var $ = require('node_modules/domtastic/dist/domtastic.js');
var reveal = require("node_modules/reveal.js/js/reveal.js");
//get the location cookie.
var cookies = require("node_modules/cookie/index.js"),
    location = cookies.parse(document.cookie).location;
console.log("Location cookie: " +location);
window.location.hash = location;

document.addEventListener("DOMContentLoaded", function(event) {

    //only on reveal page
    if(document.querySelector(".reveal")){
        //Auto load styles and inject
        require("node_modules/reveal.js/css/reveal.css");
        //load clock
        require("@scripts/clock.js")();
        //configure reveal
        
        var revealConf = require("@scripts/reveal-conf.js"),
            revealCustomEvents = require("@scripts/reveal-custom-events.js");

        revealCustomEvents(reveal);

        reveal.initialize( revealConf );
    }
});

window.addEventListener("load", function(event) {
    var revealPostCustomEvents = require("@scripts/reveal-post-custom-events.js")
    require("@scripts/sse.js")($, reveal, location);
    revealPostCustomEvents($, reveal );
})