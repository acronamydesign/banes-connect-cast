//#! SERVER
module.exports = function(app,io){

	var schedule = require('node-schedule'),
			http = require('http')

	var rule = new schedule.RecurrenceRule();
	rule.minute = [1,5,11,19,20,25,30,35,40,45,50,55];

	var j = schedule.scheduleJob(rule, function(){
		requestWeather()
	});


	//Request weather and fallback
	var yahoo = {
		method: 'GET',
		host:'query.yahooapis.com',
		path:'/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%22UKXX0012%22&format=json',
		headers: { 'Content-Type': 'application/json' }
	}
	function requestWeather(){
		var yahooRequest = http.request(yahoo,function(res){
			res.setEncoding('utf8');
			res.on('end', function(chunk){
				try{
					//yahoo is providing invalid json so im gona pull it out using regex
					if(/\"condition\"\:\{(\s*?.*?)*?\}/g.test(chunk)){
						var sliced = chunk.match(/\"condition\"\:\{(\s*?.*?)*?\}/g)[0],
							sliced = JSON.parse('{'+sliced+'}')
							//pass to browser
							io.emit('weather', {data:sliced})
					}
				}
				catch(err){
					if(err)console.log('error parsing data',err)
				}
			})
		})
		yahooRequest.on('error',function(){
			console.log("failed to get weather")
			yahooRequest.end()
		})
		yahooRequest.end()
	}

//			http.request(yahoo,function(res){
//				res.setEncoding('utf8');
//				res.on('data', function(chunk){
//					var conditions = JSON.parse(chunk).query.results.channel.item.condition,
//							temp = (parseInt(conditions.temp) -32)*5/9,
//							meta = conditions.text
//
//				})
//			}).end()


	//io.emit('weather', {data:req.body})

}
