module.exports = function revealCustomEvents(Reveal) {

    //look for videos
    Reveal.addEventListener( 'slidechanged', function( event ) {
        var isVideo = event.currentSlide.classList.contains('video')
        
        
        console.log(isVideo)
        

    });
    
}