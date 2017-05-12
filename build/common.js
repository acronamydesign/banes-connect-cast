//add dependencies to this file to be called with "this" in any function context

var common = {
	colors:require("colors"),
	gulp:require("gulp"),
	stylus:require("gulp-stylus"),
	browserify:require("gulp-browserify"),
	jade:require("gulp-jade"),
	livereload:require("gulp-livereload"),
	fs:require("fs"),
	path:require("path"),
	api:require("../api/_api.js"),
	run:require("../tasks/_tasks.js"),
	imagemin:require('gulp-imagemin'),
	pngquant:require('imagemin-pngquant')
}

var run = common.run.bind(common),
		api = common.api.bind(common)

common.api = api
common.run = run

module.exports = common
