"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");


// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

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
    .pipe(gulp.dest("./pages/css/"))
    .pipe(browsersync.stream());
}

function watchStyles() {
  gulp.watch("./assets/scss/**/*.scss", styles);
  gulp.series(browserSyncReload)
}

const watch = gulp.parallel(watchStyles, browserSync);

exports.styles = styles;
exports.watch = watch;
