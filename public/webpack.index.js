//Webpack 

require("node_modules/reveal.js/css/theme/white.css");
require('@styles/index.styl');

var $ = require('@scripts/libs/jquery-1.12.4.opera-tv-mod.js');
var reveal = require("node_modules/reveal.js/js/reveal.js");
var revealConf = require("@scripts/reveal-conf.js");
var es = new EventSource("/sse");

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
        
        var revealCustomEvents = require("@scripts/reveal-custom-events.js");

        revealCustomEvents(reveal);

    }
});

es.addEventListener("templates", function(event){
    var data = JSON.parse(event.data);

    $(function(){
        var target = $(".reveal .slides");
        data.forEach(function(data) {
            if(data.template && !data.disabled){
                var tense = target.children().length === 0 ? "present" : "future";
                var template = data.template;
                template = template.replace("{{tense}}",tense);
                template = template.replace("{{index}}",data.index);
                
                $(".overlay").addClass("show");
                $(".reveal .slides").append(template)

                setTimeout(function(){
                    $(".overlay").removeClass("show");
                },2000)

                //reveal.sync()
            }
        });
    })

})


// es.addEventListener("populate", function(event){ 
//     var data = JSON.parse(event.data);
//     // //malformed data will not render
//     var target = $(".reveal .slides");

//     if(data.template){
//         var tense = target.children().length === 0 ? "present" : "future";
//         var template = data.template;
//         template = template.replace("{{tense}}",tense);
//         template = template.replace("{{index}}",data.index);
        
//         $(".overlay").addClass("show");
//         $(".reveal .slides").append(template)

//         setTimeout(function(){
//             $(".overlay").removeClass("show");
            
//         },2000)

//         reveal.sync()
//     }
// })

/*initial data*/
var loadPoll;
es.addEventListener("handshake", function(greeting){
    loadPoll = setInterval(function(){
        console.log("document state: "+document.readyState)
        if(document.readyState === "complete"){
            clearInterval(loadPoll);
            console.log(greeting.data)
            //between sse connected
            console.log("Data sent as lump, no realtime capabilities.")
            //start reveal
            reveal.initialize( revealConf );
        }
    },100)
})

window.onload = function(){
    var revealPostCustomEvents = require("@scripts/reveal-post-custom-events.js")
    revealPostCustomEvents($, reveal );
}