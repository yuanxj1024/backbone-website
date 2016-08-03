/**
 * @info 完成warn包装
 */

'use strict';

var log = require('./log');

var warn = function (msg, e) {
  log.warn(msg, e);
}
module.exports = warn;
