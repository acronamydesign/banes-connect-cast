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
module.exports = function refresh( reveal ) {
    var es = new EventSource('/stream');
    /**
     * Populate
    */
    es.addEventListener("populate", function(event){
        //console.log(event)
        reveal.add("",0);
    })

    /**
     * Control tasks
    */
    es.addEventListener("ctrl", function(event) {
        var locationId =  getParameterByName('location');
        var instruction = JSON.parse(event.data),
            task = instruction.operation,
            //target a screen by its location query string (must match)
            target = instruction.location
        
        console.log(instruction)
        console.log('ID:',locationId)

        /**
         * reload event
         */
        //no warnings are thrown :(
        if(task === "refresh" || task === "reload"){
            if(target === locationId){
                countdownRun("refresing browser @"+locationId+"...",()=>location.reload())
            }
            else if(!target){
                countdownRun("refresing browser",()=>location.reload())
            }
        }

        /**
         * Reveal control left or right
        */
        if(task === "next" || task === "prev"){
            if(target === locationId){
                var direction = task === "next"? "left" : "right";
                console.log("[remote event] navigate "+direction+".")
                reveal[direction]()
            }
            else if(!target){
                console.log("[remote event] * please specify a target location.")
            }
        }


    });
}