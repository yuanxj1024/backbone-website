var path = require('path');
var glob = require('glob');

module.exports = getEntry;

function getEntry(sourcePath) {
  var entrys = {};
  var basename;
  glob.sync(sourcePath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    if (entry.indexOf('.js') > 0) {
      entrys[basename] = [entry];
    } else {
      entrys[basename] = entry;
    }
  });
  return entrys;
}
