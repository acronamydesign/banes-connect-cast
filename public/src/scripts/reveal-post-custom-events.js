module.exports = function ($, Reveal ) {


    //interval
    var defaultSpeed = 20000;
    var autoslide;
    function setDefaultSpeed(){
        autoslide = setInterval(function(){
            Reveal.next();
        }, defaultSpeed);
    }
    setDefaultSpeed()

    Reveal.addEventListener( 'slidechanged', function( event ) {
        var isVideo = event.currentSlide.classList.contains('video')
        if(isVideo){

            $(".stat-bar").addClass("collapse");

            clearInterval(autoslide);
            var duration = $(event.currentSlide).data("duration")
            setTimeout(function(){
                setDefaultSpeed()
                Reveal.next()
            },duration)
        }
        else{
            $(".stat-bar").removeClass("collapse");
        }

    });	

}