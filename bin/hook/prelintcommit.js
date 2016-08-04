var fs = require('fs');
var childProcess = require('child_process');
var spawnSync = childProcess.spawnSync;

var report = spawnSync('');
if (report.status) {
  console.log('请review你的源代码，让其通过eslint的检查');
}
process.exit(report.status);
