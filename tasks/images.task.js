module.exports = function(){
		var gulp = this.gulp,
			api = this.api,
			path = this.path,
			colors = this.colors,
			imagemin = this.imagemin,
			pngquant = this.pngquant,
			livereload = this.livereload

	console.log(colors.yellow("[Rebuilding] => Images"))

	var src = api("path").resolve("src","images"),
			dest = api("path").resolve("dest")

	var formats = path.join(src,"/**/*")

	return gulp.src(formats)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		 }))
		.pipe(gulp.dest(path.join(dest,"images")))
		//.pipe(livereload())
}
