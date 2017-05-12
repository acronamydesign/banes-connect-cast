module.exports = function(){
		var gulp = this.gulp,
			api = this.api,
			path = this.path,
			colors = this.colors,
			livereload = this.livereload,
			browserify = this.browserify

	console.log(colors.cyan("[Rebuilding] => Scripts"))

	var src = api("path").resolve("src","scripts"),
			dest = api("path").resolve("dest")

	return gulp.src(path.join(src,"/**/*.js"))
		.pipe(browserify())
		.pipe(gulp.dest(path.join(dest,"scripts")))
		.pipe(livereload())
}
