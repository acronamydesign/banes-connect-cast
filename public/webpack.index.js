//Webpack 


require('@styles/index.styl');

document.addEventListener("DOMContentLoaded", function(event) {

    //get the location cookie.
    var cookies = require("node_modules/cookie/index.js"),
        location = cookies.parse(document.cookie).location;
    console.log("Location cookie: " +location);
    window.location.hash = location;

    //only on reveal page
    if(document.querySelector(".reveal")){
        //Auto load styles and inject
        require("node_modules/reveal.js/css/reveal.css");
        //load clock
        require("@scripts/clock.js")();
        //configure reveal
        var reveal = require("node_modules/reveal.js/js/reveal.js"),
            revealConf = require("@scripts/reveal-conf.js")(reveal),
            revealCustomEvents = require("@scripts/reveal-custom-events.js"),
            revealPostCustomEvents = require("@scripts/reveal-post-custom-events.js")
        
        revealCustomEvents(reveal);
        //start reveal
        reveal.initialize();
        //after load add events
        reveal.addEventListener( 'ready', function( event ) {
            revealPostCustomEvents(reveal);
            require("@scripts/sse.js")(reveal);
        });
    }
});

