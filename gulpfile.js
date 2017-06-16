var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');


//CSS
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
});


//HTML
gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
});

//JS
gulp.task('js', function () {
    return gulp.src(['./src/script/*.js', '!./src/js/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});

//Image
gulp.task('images', function () {
    return gulp.src(['./src/face/QQ/*'])
        .pipe(imagemin({
            interlaced: true,//gif
            progressive: true, //jpeg
            optimizationLevel: 5, //png
            svgoPlugin: [{ removeViewBox: true}] //svg
        }))
        .pipe(gulp.dest('./dist/face/QQ'))
});

gulp.task('build:watch', function () {
    var options = [
        './src/scss/style.scss',
        './src/*.html',
        './src/script/*.js'
    ];
    gulp.watch(options, ['sass', 'html', 'js'])
});



