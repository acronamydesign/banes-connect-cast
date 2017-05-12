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
