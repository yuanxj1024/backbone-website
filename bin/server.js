var config = require("./webpack.dev.config.js");
var webpack = require('webpack');
var getEntry = require('./getEntry.js');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var WebpackDevServer = require('webpack-dev-server');
var port = 8760;

for (var item in config.entry) {
  config.entry[item].unshift("webpack-dev-server/client?http://localhost:" + port + "/", 'webpack/hot/dev-server');
}
config.plugins.push(new OpenBrowserPlugin({
  url: 'http://localhost:' + port
}));

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  stats: {
    colors: true // 用颜色标识
  },
  contentBase: 'app/src'
});
server.listen(port);
