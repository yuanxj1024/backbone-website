/**
 * 用于生成模板
 * 创建view : node  tool.js xxxx.view   目录
 * 创建model : node  tool.js xxxx.model   目录
 */
var fs = require('fs');
var path = require('path');
var argv = process.argv;
var args = argv.slice(2);
var env = process.env;
var pwd = env.PWD;
var logInfo = {
  LANG: env.LANG,
  USER: env.USER
};
var file = {
  model: 'bin/tpl/model.js',
  view: 'bin/tpl/view.js'
};
console.log('dir path ---> ', pwd);
var task = args[0];
var target = args[args.length - 1];
if (task && target) {
  var all = task.split('.');
  var name = all[0];
  var type = all[1];
  if (!name) {
    logInfo.ERROR = 'enter file name';
    console.warn(logInfo)
    return;
  }
  if (!type) {
    logInfo.ERROR = 'enter file type';
    console.warn(logInfo);
    return;
  }
  var tplPath = path.resolve(file[type]);
  if (!/\/$/.test(target)) {
    target = target + '/'
  }
  var targetPath = path.resolve(target + name + '.' + type + '.js');
  fs.readFile(tplPath, {
    encoding: 'utf8'
  }, function (err, data) {
    if (err) {
      throw err
    }
    var e = fs.writeFileSync(targetPath, data, 'utf8');
    if (!e) {
      console.log('create ' + type + ' type file : ' + targetPath);
    } else {
      throw e;
    }
  });
} else {
  logInfo.ERROR = 'enter file name as .file type and target dir';
  console.warn(logInfo)
}
