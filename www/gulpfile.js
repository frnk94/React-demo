"use strict";

var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var watchify = require('watchify');

var opts = {
	frontendDirectory: './public/js/',
	jsDirectory: './public/js/',
	mainJsOutput: './bundle.js',
	buildFolder: './public/js/',
	watchedFiles: []
};

gulp.task('compile', function() {
    var bundler = browserify({
        entries: [opts.frontendDirectory + 'router.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    })
    .bundle() // Create the initial bundle when starting the task

	.on('error', function(e) {
		gutil.log(gutil.colors.red('Bundle error:', e.message));
	})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(opts.jsDirectory));
});

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: [opts.frontendDirectory + 'router.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
	// When any files update
    .on('update', function () {
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle()
		.on('error', function(e) {
			gutil.log(gutil.colors.red('Bundle error:', e.message));
		})
// Create new bundle that uses the cache for high performance
        .pipe(source('bundle.js'))
		// This is where you add uglifying etc.
		.pipe(gulp.dest(opts.jsDirectory));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
	// Create the initial bundle when starting the task
    .bundle()
	.on('error', function(e) {
		gutil.log(gutil.colors.red('Bundle error:', e.message));
	})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(opts.jsDirectory));


});

gulp.task('default', ['browserify'], function() {
});

