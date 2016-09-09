var gulp = require('gulp'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('style', function(){
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
    gulp.src(angular).pipe(gulp.dest('app/js/lib/angular/')).pipe(gulp.dest('src/js/lib/angular/'));
    gulp.src(angularRoute).pipe(gulp.dest('app/js/lib/angular/')).pipe(gulp.dest('src/js/lib/angular/'));
    gulp.src(jQuery).pipe(gulp.dest('app/js/lib/jquery/')).pipe(gulp.dest('src/js/lib/jquery/'));
    gulp.src(bootstrap).pipe(gulp.dest('app/js/lib/bootstrap/')).pipe(gulp.dest('src/js/lib/bootstrap/'));

    gulp.src([
        'src/js/app.js'
    ]).pipe(concat('electron-demo.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('html', function(){
    gulp.src('src/partials/**/*')
        .pipe(gulp.dest('app/partials'));

    gulp.src(['src/index.html', 'src/index.js'])
        .pipe(gulp.dest('app'));
});

gulp.task('default', ['html', 'style', 'js'], function(){

});
