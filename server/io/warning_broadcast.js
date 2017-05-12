//#! SERVER
module.exports = function(app,io){
	//when socket io is established open up /update for data signals from drupal
	app.post('/ebs',function(req, res){
		io.emit('ebs', {data:req.body})
		console.log('Incoming data Ebs broadcast')
		res.end('')
	})

}
