var path = require('path'),
		fs = require('fs')

module.exports = function(app,io,conf){

	var routeFilesPath = path.join(__dirname,'routes')
	fs.readdir(routeFilesPath,function(err,resArr){
		if(err) console.log(err)
		for(i in resArr) require(path.join(routeFilesPath,resArr[i]))(app,io,conf)
	})

}
