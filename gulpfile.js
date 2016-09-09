var gulp = require('gulp'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('styles', function(){
    gulp.src(['src/css/*.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/css/'));
});

gulp.task('js', function(){
    var angular = 'bower_components/angular/angular.min.js',
        angularRoute = 'bower_components/angular-route/angular-route.min.js',
        jQuery = 'bower_components/jquery/dist/jquery.min.js',
        bootstrap = 'bower_components/bootstrap/dist/js/bootstrap.min.js';
    gulp.src(angular).pipe(gulp.dest('app/js/angular/')).pipe(gulp.dest('src/js/angular/'));
    gulp.src(angularRoute).pipe(gulp.dest('app/js/angular/')).pipe(gulp.dest('src/js/angular/'));
    gulp.src(jQuery).pipe(gulp.dest('app/js/jquery/')).pipe(gulp.dest('src/js/jquery/'));
    gulp.src(bootstrap).pipe(gulp.dest('app/js/bootstrap/')).pipe(gulp.dest('src/js/bootstrap/'));

    gulp.src([
        'src/js/app.js'
    ]).pipe(concat('electron-demo.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
    .pipe(gulp.dest('src/js/'));
});