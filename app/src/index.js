var $ = require('jquery');
$(function indexMain() {
  var MainView = require('./views/index/main.view');
  var mainView = new MainView();
  console.log(mainView);
  require('../stylesheets/index.scss');
});
