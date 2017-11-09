const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');

// Compile pug into html
gulp.task('views', function() {
  return gulp.src('app/pug/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('.'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("app/styles/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['views', 'sass'], function () {
  browserSync.init({
    server: "."
  });

  gulp.watch("app/pug/*.pug", ['views']);
  gulp.watch("app/styles/*.scss", ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);
