module.exports = function (gulp, paths) {
  return function () {
    gulp.src(paths.src.baseDir + '/CNAME')
    .pipe(gulp.dest(paths.build.baseDir))
  };
};