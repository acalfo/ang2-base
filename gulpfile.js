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

gulp.task('build', [ 'js', 'css']);

gulp.task('js', [ 'cleanjs' ], function() {
    return gulp.src('public/src/**/*.ts', { base: 'public' })
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('css', [ 'cleancss' ], function () {
    return gulp.src('public/src/**/*.css')
        .pipe(concat('app.css'))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/dist/css'))
});

gulp.task('html', function() {
    return gulp.src('public/src/app/**/*.html', { base: 'public/src/app' })
        .pipe(gulp.dest('public/dist/templates'));
});

gulp.task('server', function() {
    var server = child.spawn('node', ['server.js']);
    var log = fs.createWriteStream('server.log', {flags: 'a'});
    server.stdout.pipe(log);
    server.stderr.pipe(log);
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
    gulp.watch('public/src/**/*.ts', [ 'js' ]);
    gulp.watch('public/src/**/*.css', [ 'css' ]);
    gulp.watch('public/src/**/*.html', [ 'js' ]);
});

gulp.task('cleanjs', function() {
    return del.sync(['public/dist/js/**']);
});

gulp.task('cleancss', function() {
    return del.sync(['public/dist/css/**']);
});