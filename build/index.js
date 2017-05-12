var _common = require("./common.js"),
		_schema = require("../schema.json")

function context(){
	var fs = this.fs,
			path = this.path,
			api = this.api,
			gulp = this.gulp,
			run = this.run

	gulp.task("watcher",run("watcher"))
	gulp.task("styles",run("theme"))
	gulp.task("scripts",run("scripts"))
	gulp.task("templates",run("templates"))
	gulp.task("images",run("images"))
	gulp.tast("stylesBuilt",run("stylesBuilt"))

	//not a gulp file so lets run default
	gulp.start(["watcher","scripts","stylesBuilt","styles"])

}
var context = context.bind(_common)()

