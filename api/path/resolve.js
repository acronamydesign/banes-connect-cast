var path = require('path'),
		get_schema = require('./get_schema.js'),
		root_src = path.resolve(__dirname,"../../")

module.exports = function(key,sub_key){

	//this is a tailored function to resolve the schema json paths
	function resolver(str){
		return path.resolve(root_src,str)
	}

	if(key)
		if(sub_key) return resolver(get_schema(key)[sub_key])
		else return resolver(get_schema(key))
	else return get_schema() //debug
}
