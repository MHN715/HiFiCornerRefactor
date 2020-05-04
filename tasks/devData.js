const gulp = require('gulp');
const connect = require('gulp-connect');

function devData(){
    return gulp
        .src("./src/devData/*")
        .pipe(gulp.dest("tmp/assets/devData"))
        .pipe(connect.reload());
}

function watchDEVDATA(){
    return gulp
        .watch("./src/devData/*", {
            ignoreInitial: false
        }, devData)
}

module.exports = {
    watchDEVDATA
}