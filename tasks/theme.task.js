module.exports = function(){
		var gulp = this.gulp,
			api = this.api,
			path = this.path,
			colors = this.colors,
			stylus = this.stylus,
			livereload = this.livereload,
			bootstrap = require('bootstrap-styl'),
			koutoSwiss = require('kouto-swiss')

	console.log(colors.blue("[Rebuilding] => Theme"))

	var src = api("path").resolve("src","styles"),
		dest = api("path").resolve("dest"),
			options = {
				use:[
					bootstrap(),
					koutoSwiss()
				]
			}

	return gulp.src(path.join(src,"/**/*.styl"))
		.pipe(stylus(options))
		.pipe(gulp.dest(path.join(dest,"themes")))
		.pipe(livereload())


}
