//#! BROWSER
var moment = require('moment')


module.exports = function($){

	var socket = window.socket

	//emergency broadcast system
	socket.on('ebs', function (broadcast) {
		console.log(broadcast)
		console.log(window.location)
		var fade = {
			in:3000,
			out:1000
		}
		$('body').append([
			'<div class="overlay '+broadcast.data.type+'">',
				'<small>','Emergency Broadcast:'.toUpperCase(),'</small>',
				'<h1>'+broadcast.data.title+'</h1>',
				'<p>'+broadcast.data.message+'</p>',
			'</div>'
		].join(''))
		//Clear message
		setTimeout(function(){
			$('.overlay').fadeOut(fade.out,function(){
				$('.overlay').remove()
			})
		},moment.duration(parseInt(broadcast.data.duration),'minutes')._milliseconds)
	});

	socket.on('weather',function(weather){
		var uC = Math.round((parseInt(weather.data.condition.temp) - 32) * 5 / 9)+"C"
		$('.stat-center').text(weather.data.condition.text+" "+uC)
	})

	socket.on('update',function(data){
		window.location.reload()
	})

}
