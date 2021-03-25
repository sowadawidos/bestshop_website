const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps")
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

sass.compiler = require("sass"); //node-sass

function server(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}

function css() {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded"
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function watch(){
    gulp.watch("./scss/**/*.scss", gulp.series(css))
    gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.css = css;
exports.watch = watch;
exports.default = gulp.series(server, css, watch);