var api = {},
		fs = require("fs"),
		path = require("path")

module.exports = function(key){
	var _this = this
	function build_api(){
	var api_dirs = fs.readdirSync(__dirname)

	for(i in api_dirs)
		if(!/\./g.test(api_dirs[i])) recurse(api_dirs[i])
	}
	var build_api = build_api.bind(api)()

	function recurse(apiKeys){
		api[apiKeys] = {}
		var apiKeysPath = path.join(__dirname,apiKeys),
				api_files = fs.readdirSync(apiKeysPath)

		for(i in api_files)
			if(/js/g.test(api_files[i].split(".")[1]))
				api[apiKeys][api_files[i].split(".")[0]] = require(path.join(apiKeysPath,api_files[i]))
	}

	if(key) return api[key]
	else return api
}
