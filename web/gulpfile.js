const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const rimraf = require("rimraf");
const path = require("path");

// clean dist
gulp.task("clean", (cb) => rimraf(path.join(__dirname, "dist"), cb));

// build with webpack
gulp.task("webpack", () =>
	gulp
		.src("src/index.ts")
		.pipe(webpackStream(require("./webpack/webpack.config.prod")))
		.pipe(gulp.dest("dist"))
);

gulp.task("default", gulp.series("clean", "webpack"));
