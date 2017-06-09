var path = require('path'),
		fs = require('fs')

module.exports = function(app,conf){

	const routeFilesPath = path.join(__dirname,'routes');
	fs.readdir(routeFilesPath,(err,resArr)=>{
		if(err){
			console.log(err)
		}
		for(let i in resArr){ 
			require( path.join( routeFilesPath, resArr[i]) )( app, conf )
		}
	})

}
