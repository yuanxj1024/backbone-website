var MainView = require('./views/index/main.view');
var $ = require('jquery');
require('../stylesheets/index.scss');

$(function indexMain() {
  var mainView = new MainView();
  console.log(mainView);
});
