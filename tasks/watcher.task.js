module.exports = function(){
	var gulp = this.gulp,
			api = this.api,
			jade = this.jade,
			path = this.path,
			livereload = this.livereload

	var eyeball = {
		stylesBuilt: 	path.join( api( "path" ).resolve( "src", "stylesBuilt" ), 	"**/*.css"  ),
		styles:		path.join( api( "path" ).resolve( "src", "styles" ), 		"/**/*.styl"),
		scripts:	path.join( api( "path" ).resolve( "src", "scripts" ), 		"/**/*.js"),
		templates:	path.join( api( "path" ).resolve( "src", "templates" ), 	"/**/*.jade"),
		images:		path.join( api( "path" ).resolve( "src", "images" ), 		"/**/*")
	}

	livereload({ start: true })

	gulp.task("watcher",function(){
		gulp.watch( eyeball.stylesBuilt,["stylesBuilt"]);
		gulp.watch( eyeball.styles, 	["styles"]);
		gulp.watch( eyeball.scripts, 	["scripts"]);
		gulp.watch( eyeball.templates, 	["templates"]);
		gulp.watch( eyeball.images, 	["images"])
	})
}
