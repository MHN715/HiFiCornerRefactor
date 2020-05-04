const gulp = require('gulp');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

function image() {
    return gulp
        .src("./src/img/**/*")
        .pipe(imagemin([
            imagemin.mozjpeg({quality: 80, progressive: true}),
            ]))
        .pipe(gulp.dest("tmp/assets/img"))
        .pipe(connect.reload());
}

function watchIMG(){
    return gulp 
        .watch("./src/img/**/*", {
            ignoreInitial: false
        }, image);
}

module.exports = {
    watchIMG
}