(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(moment){

function loadClock(){
	var custom = {
		d:moment().format('dddd MMM Do - H:mm').split(' ')[0],
		m:moment().format('dddd MMM Do - H:mm').split(' ')[1],
		dn:moment().format('dddd MMM Do - H:mm').split(' ')[2],
		t:moment().format('dddd MMM Do - H:mm').split(' ')[4]
	}

	custom.d = custom.d.substring(0,3)
	custom.dn = parseInt(custom.dn).toString()

	var c = custom

	document.querySelector('.stat-right .date').innerHTML = c.d+" "+c.m+" "+c.dn
	document.querySelector('.stat-right .time').innerHTML = c.t

}
loadClock()

setInterval(loadClock,1000)

}

},{}]},{},[1])