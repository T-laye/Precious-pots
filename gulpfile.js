var gulp = require("gulp");
var postcss = require("gulp-postcss");
var csswring = require("csswring");
var autoprefixer = require("autoprefixer-core");

gulp.task("css", function () {
  var processors = [csswring, autoprefixer];

  return gulp
    .src("./styles/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./dest"));
});
