function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function countdownRun(message,cb){
    console.log("[remote event]: "+message);
    setTimeout(function() {
        console.log(3)
    }, 1000);
    setTimeout(function() {
        console.log(2)
    }, 2000);
    setTimeout(function() {
        console.log(1)
    }, 3000);
    setTimeout(function() {
        cb();
    }, 4000);
}

//pass in reveal to cotroll the screens
module.exports = function refresh($, reveal, location ) {
    var io = require('socket.io-client'),
        socket = io("http://localhost:3001");

    
    /**
     * Identity
    */
    socket.on("identity-yourself",()=>{
        console.log("Server whants to know who I am...")
        console.log("I am "+location+"!")
        socket.emit("identity", location);
        socket.emit("ready");
    })

    //this may be posible
    function arrangeIndex(){

    }

    socket.on("populate",(data)=>{
        //malformed data will not render
        var target = $(".reveal .slides");
        if(data.template){
            var tense = target.children().length === 0 ? "present" : "future";
            var template = data.template;
            template = template.replace("{{tense}}",tense);
            template = template.replace("{{index}}",data.index);
            target.append(template);
            
            $( '.navigate-right' ).addClass("enabled")
            
            reveal.sync();
        }

    })


    /**
     * Control tasks
    */
    // es.addEventListener("ctrl", function(event) {
    //     var locationId =  getParameterByName('location');
    //     var instruction = JSON.parse(event.data),
    //         task = instruction.operation,
    //         //target a screen by its location query string (must match)
    //         target = instruction.location
        
    //     console.log(instruction)
    //     console.log('ID:',locationId)

    //     /**
    //      * reload event
    //      */
    //     //no warnings are thrown :(
    //     if(task === "refresh" || task === "reload"){
    //         if(target === locationId){
    //             countdownRun("refresing browser @"+locationId+"...",()=>location.reload())
    //         }
    //         else if(!target){
    //             countdownRun("refresing browser",()=>location.reload())
    //         }
    //     }

    //     /**
    //      * Reveal control left or right
    //     */
    //     if(task === "next" || task === "prev"){
    //         if(target === locationId){
    //             var direction = task === "next"? "left" : "right";
    //             console.log("[remote event] navigate "+direction+".")
    //             reveal[direction]()
    //         }
    //         else if(!target){
    //             console.log("[remote event] * please specify a target location.")
    //         }
    //     }


    // });
}