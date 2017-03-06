/**
 * 插件别名配置
 */
var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
  extendBackbone: path.resolve(containerPath, './app/src/module/base')
};

module.exports = alias;
