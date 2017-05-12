var reveal = require('reveal.js'),
		$ = require('jquery'),
		moment = require('moment'),
		Observe = require('./actions/Object.observe.poly.js');


//make if full screenish
reveal.addEventListener( 'slidechanged', function( event ) {
	if(
		event.currentSlide.className.split(' ').indexOf('video')>=0 ||
		event.currentSlide.className.split(' ').indexOf('advert_image')>=0
	){
		$('body').css({backgroundColor:'#000'})
		$('.progress').animate({height:"5px"})
	}

	else if(
		event.currentSlide.className.split(' ').indexOf('article')>=0
	){
		$('body').css({backgroundColor:'#fefefe'})
		$('.progress').animate({height:"20px"})
		$('.stat-bar').animate({top:0+'px'})
	}

	else{
		$('body').css({backgroundColor:'#333a42'})
		$('.progress').animate({height:"20px"})
		$('.stat-bar').animate({top:0+'px'})
	}

	console.log(event.currentSlide.className)

});

//Dynamic interval timer to allow for independent auto sliding. pretty handy for videos
//usage:
//app.setInterval(.. time in ms ..)
//app.useDefaultInterval(.. narmalize ..)
var timer;
window.app = {}
window.app.interval = {
	t:20000,
	default:20000
}
function dynamicInterval(t,cb){
	clearInterval(timer)
	timer = setInterval(function(){
		cb()
	},t)
}
dynamicInterval(window.app.interval.t,next)
Object.observe(window.app.interval,function(){
	dynamicInterval(window.app.interval.t,next)
})
function next(){
	reveal.next()
}
window.app.setInterval = function(ms){
	window.app.interval.t = ms
	return console.info('Changing the interval to',ms+'ms')
}
window.app.setDefaultInterval = function(){
	window.app.setInterval(window.app.interval.default)
}

require('./actions/moment.js')(moment)
require('./actions/reveal_conf.js')(reveal)
require('./actions/socket.io.js')($)


//load when ready
$('body').append([
	'<script id="gapi" src="https://apis.google.com/js/client.js"></script>'
].join(''))

//watch gapi then requre script env as callback
var target = document.getElementById('gapi')
var observer = new MutationObserver(function(mutations) {
	require('./actions/video.js')($,reveal)
	console.log('gApi loaded')
});
var config = {
	attributes: true,
	childList: false,
	characterData: false
};
// pass in the target node, as well as the observer options
try{
	observer.observe(target, config);
}
catch(e){
	if(e) console.warn('Video script handler has failed to load, falling back gracefully')
	$('.video').remove()
}
