var packageJson = require('../../package.json'),
		name = packageJson.name

module.exports = function(conf){
	console.log(name,"started on port:",conf.frontend_port)
	console.log(require('../../configuration/conf.json'))
}
