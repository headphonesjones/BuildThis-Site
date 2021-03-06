'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', ['copydl', 'bundle', 'watch-schema', 'watch-test'], function() {
  browserSync({
    server: {
        baseDir: './'
    },
    browser: 'google chrome'
  });
});