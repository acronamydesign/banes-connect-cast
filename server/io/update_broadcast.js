//#! SERVER
module.exports = function(app,io,init){
	//when socket io is established open up /update for data signals from drupal
	app.get('/app/update',function(req,res){
		init()
		console.log('Updating')
		res.send('<script> window.history.back()</script>')

	})

	//app.post('/update',function(req, res){
	//	init()//hard restart the screen and pull down data
	//	console.log(req.body)
	//	//io.emit('update',{location:req.body})
	//	console.log('Incoming update')
//		res.send('Update compleate please refresh the screens.')
//	})

}
