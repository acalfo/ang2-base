var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-cssnano');
var del = require('del');
var webpack = require('webpack-stream');
var child = require('child_process');
var fs = require('fs');

gulp.task('serve', [ 'build', 'server', 'watch' ]);

gulp.task('build', [ 'js', 'css' ], function() {
    return del.sync([ 'src/bundle.js' ])
});

gulp.task('js', ['webpack'], function() {
    return gulp.src('public/src/bundle.js', { base: 'public' })
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('webpack', [ 'clean' ], function() {
    return gulp.src('public/src/**/*.ts', { base: 'public' })
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('public/dist/app'));
});

gulp.task('css', function () {
    return gulp.src('public/src/**/*.css', { base: 'public' })
        .pipe(concat('app.css'))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/dist'))
});

gulp.task('server', function() {
    var server = child.spawn('node', ['server.js']);
    var log = fs.createWriteStream('server.log', {flags: 'a'});
    server.stdout.pipe(log);
    server.stderr.pipe(log);
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
    gulp.watch('public/src/js/**/*.js', ['js']);
    gulp.watch('public/src/js/**/*.js', ['js']);
    gulp.watch('public/src/templates/**/*.html', ['html']);
});

gulp.task('clean', function() {
    return del.sync(['public/dist/**']);
});