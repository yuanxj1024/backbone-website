/**
 * 插件别名配置
 */
var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
  ExtendBackbone: path.resolve(containerPath, './app/src/module/base'),
  amazeuiLib:  path.resolve(containerPath, './node_modules/amazeui')
};

module.exports = alias;
