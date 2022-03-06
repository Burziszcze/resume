"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

function styles() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("./assets/css/"))
    .pipe(gulp.dest("./pages/css/"));
}

exports.styles = styles;
exports.watch = function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
};
