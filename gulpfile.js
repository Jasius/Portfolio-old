var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var pump = require('pump');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/minified'))
        .pipe(livereload());
});
gulp.task('compress', function (cb) {
    pump([
            gulp.src('js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});
gulp.task('compile', ['sass'], function () {
    livereload.listen();
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['compress']);
})