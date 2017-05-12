var fs = require("fs"),
		path = require("path")
module.exports = function(key){
	var schema = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../../schema.json"),"utf8"))
	if(key) return schema[key]
	else return schema
}
