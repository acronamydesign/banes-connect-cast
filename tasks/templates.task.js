module.exports = function(){
		var gulp = this.gulp,
			api = this.api,
			path = this.path,
			colors = this.colors,
			livereload = this.livereload

	console.log(colors.green("[Rebuilding] => Templates"))

	var src = api("path").resolve("src","templates"),
		dest = api("path").resolve("dest")

	return gulp.src(path.join(src,"/**/*.jade"))
		.pipe(gulp.dest(path.join(dest,"templates")))
		.pipe(livereload())

}
