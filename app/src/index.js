import $ from 'jquery';
import Backbone from 'Backbone';
import MainView from './views/index/main.view.js';

require('amazeuiLib/dist/css/amazeui.min.css');

const view = new MainView();

console.log($, '\rnindex\r\n', Backbone, '\r\nMainView', view);
