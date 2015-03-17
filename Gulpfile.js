var gulp   = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		reload      = browserSync.reload;

gulp.task('default', ['browser-sync', 'styles', 'watch']);

gulp.task('styles', function() {
	gulp.src('./css/main.scss')
		.pipe(sass({
	  	"sourcemap=none": true
	  }))
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: { baseDir: "./" }
	});
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('css/**/*.scss', ['styles']);
	gulp.watch('**/*.html', reload);
});