var $ = require('jquery');
var MainView = require('./views/code/main.view');
require('../stylesheets/code.scss');
$(function () {
  var mainView = new MainView();
  console.log(mainView);
});
