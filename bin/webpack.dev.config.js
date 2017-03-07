var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var containerPath = path.resolve('./');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[name].css');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var getEntry = require('./getEntry');
var alias = require('../app/alias');
var compile = require('./compile');
var compileConfig = require('../app/compile.config.json');


//  对complie配置文件进行处理
compileConfig = compile(compileConfig);

//  配置入口文件

var entrys = getEntry('./app/src/*.js');

//  添加插件
var plugins = [];

//  切割css文件
plugins.push(extractSASS);
plugins.push(new webpack.HotModuleReplacementPlugin());


// 第三方插件
entrys['vendor'] = compileConfig.vendor;

//  提取公共文件
plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js?[hash:8]'
}));


//  处理html
var pages = getEntry('./app/src/*.pug');

for (var chunkname in pages) {
  var conf = {
    filename: chunkname + '.html',
    template: pages[chunkname],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: false
    },
    chunks: ['vendor', chunkname],
    hash: true,
    complieConfig: compileConfig
  }
  var titleC = compileConfig.title || {};
  var title = titleC[chunkname];
  if (title) {
    conf.title = title;
  }
  plugins.push(new HtmlWebpackPlugin(conf));
}

//  配置webpack
var config = {
  entry: entrys,
  output: {
    path: path.resolve(containerPath, './app/src'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.html$/,
      use: ['raw-loader'],
      exclude: /(node_modules)/
    }, {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /(node_modules)/
    }, {
      test: /\.css$/i,
      use: extractSASS.extract({
        use: ['css-loader']
      })
    }, {
      test: /\.scss$/i,
      use: extractSASS.extract({
        use: ['css-loader!sass-loader']
      })
    }, {
      test: /.pug$/,
      use: ['pug-loader'],
      exclude: /(node_modules)/
    }, {
      test: /\.(png|jpg|gif|jpge)$/,
      use: ['url-loader?limit=8192&name=img/[name].[ext]']
    }, {
      test: /\.(woff|woff2|svg|eot|ttf)$/,
      use: ['url-loader?limit=8192&name=fonts/[name].[ext]']

    }]
  },
  plugins: plugins,
  resolve: {
    alias: alias,
    extensions: ['.js', '.css', '.scss', '.pug', '.png', '.jpg']
  },
  externals: {}
};
module.exports = config;
