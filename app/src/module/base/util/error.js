/**
 * @info 完成error包装
 */

'use strict';

var log = require('./log');

var error = function (msg, e) {
  log.error(msg, e);
}
module.exports = error;
