var gulp = require('gulp');
var browser = require('browser-sync');
var browserSync = browser.create();
var gutil = require('gulp-util');
var webConfig = require('./app/src/module/config.default.js');
var fs = require('fs');
var rimraf = require('rimraf');

gulp.task('server', function () {
  browserSync.init({
    server: './app/www',
    port: 3300
  });
  gulp.watch('./app/**/*.*', function (file) {
    browserSync.reload();
  })
});

gulp.task('build', function () {
  return gulp.src([
      'app/plugins/*.*',
      'app/plugins/**/*.*',
    ], {
      base: 'app/'
    })
    .pipe(gulp.dest('app/www/'))
});
gulp.task('copy-to-dist', function () {
  return gulp.src([
      'app/plugins/*.*',
      'app/plugins/**/*.*',
    ], {
      base: 'app/'
    })
    .pipe(gulp.dest('./dist'))
});



gulp.task('webpack', function (callback) {
  var webpack = require('webpack');
  var productConfig = require('./bin/webpack.product.config.js');
  webpack(productConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString());
    callback();
  });
});

gulp.task('clean', function () {
  rimraf.sync('./dist');
});

//读取./src/config.demo.js ,修正config.js
gulp.task('rebuild:config',['clean'], function () {
  if (process.env.NODE_ENV == 'product') {
    webConfig.scheme = 'release';
  } else {
    webConfig.scheme = 'alpha';
  }
  var txt = 'var config = ' + JSON.stringify(webConfig) + '; module.exports = config;';
  fs.writeFile('./app/src/module/config.js', txt, function (err) {
    // gulp.start(['copy-to-dist']);
  });

});
