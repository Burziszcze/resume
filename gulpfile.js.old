"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

// CSS task
function css() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./assets/css/"))
    .pipe(gulp.dest("./pages/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./assets/css/"))
    .pipe(gulp.dest("./pages/css/"));
}

// Watch files
function watchFiles() {
  gulp.watch("./assets/scss/**/*", css);
}

// define complex tasks
const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.watch = watch;
exports.build = build;

exports.default = watch;
