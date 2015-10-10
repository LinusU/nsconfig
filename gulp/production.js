'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    appRoot = process.cwd(),
    paths = {
        js: [appRoot + '/src/**/*.js'],
        jsTests: [appRoot + '/test/**/*-test.js']
    };

var defaultTasks = ['env:prod', 'prod:babel'];

gulp.task('env:prod', ['test:jshint', 'test:coverage'], function () {
    process.env.NODE_ENV = 'production';
});

gulp.task('prod:babel', function () {
    return gulp.src(paths.js)
        .pipe(plugins.babel())
        .pipe(gulp.dest(appRoot + '/dist'));
});

gulp.task('production', defaultTasks);