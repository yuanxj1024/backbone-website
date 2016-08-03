var $ = require('jquery');
$(function () {
  var MainView = require('./views/code/main.view');
  var mainView = new MainView();
  console.log(mainView);
  require('../stylesheets/code.scss');
});
