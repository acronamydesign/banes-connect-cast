//load all tasks

module.exports = function(key){
	var fs = require('fs'),
		path = require('path')
		_this_file = __filename.split("/").pop(),
		tasks_export = {}

	var tasks = fs.readdirSync(__dirname)

	for(i in tasks)
		if(tasks[i] != _this_file)
			require_tasks(path.join(__dirname,tasks[i]),tasks[i].split(".")[0])


	function require_tasks(taskPath, namespace){
		tasks_export[namespace] = require(taskPath)
	}
	if(key) return tasks_export[key].bind(require("../build/common.js"))
	else return tasks_export
}
