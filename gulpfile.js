var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var del = require('del');
var KarmaServer = require('karma').Server;

// webpack stuff
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require("./webpack.config.js");


// VARIABLES
// ---------------------------------------------
var outputFolder = './build';

var sources = {
  scripts: 'src/app/**/*.ts',
  sass: 'src/style/**/*.scss',
  index: 'src/index.html'
};

var devCompiler = webpack(webpackConfig);
var devServer;

// TASKS
// ----------------------------------------------

gulp.task("index", function() {
  return gulp
    .src(sources.index)
    .pipe(gulp.dest(outputFolder));
});

gulp.task("ts-lint", function() {
  return gulp
    .src(sources.scripts)
    .pipe($.tslint())
    .pipe($.tslint.report('prose', {emitError: false}));
});

gulp.task('sass', function() {
  return gulp.src(sources.sass)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest(outputFolder))
});


gulp.task('clean', function(cb) {
  del([outputFolder], cb);
});


gulp.task('webpack:build', function(cb) {
  devCompiler.run(function (err, stats) {
    if (err) {
      throw new $.util.PluginError("webpack:build", err);
    }
    $.util.log("[webpack:build-dev]", stats.toString({
      exclude: ['node_modules'],
      colors: true
    }));
    cb();
  });
});

gulp.task('webpack:server', function() {
  devServer = new webpackDevServer(devCompiler, {
    contentBase: outputFolder,
    hot: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    stats: {
      colors: true,
      exclude: ['node_modules']
    }
  });

  devServer.listen(3000, "localhost", function(err) {
    if (err) {
      throw new $.util.PluginError("webpack:server", err);
    }
    $.util.log("Server running on http://localhost:3000");
  });
});


gulp.task("test:watch", function(cb) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, cb).start();
});


gulp.task("watch", function() {
  gulp.watch(sources.scripts, gulp.parallel("ts-lint"));
  gulp.watch(sources.sass, gulp.parallel("sass"));
  gulp.watch(sources.index, gulp.parallel("index"));
});


gulp.task(
  "dev",
  gulp.series("clean", "sass", "index", gulp.parallel("test:watch", "webpack:server", "watch"))
);

gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("sass", "index", "webpack:build"))
);
