import {
  BaseView,
} from 'ExtendBackbone';

// var IndexModel = require('../../models/index/main.model');
const tpl = require('./template/sayhi.html');

export default BaseView.extend({
  el: '#indexContainer',
  data: {
    name: 'Aaron',
  },
  rawLoader() {
    return '';
  },
  beforeMount() {
    //  初始化一些自定义属性
    this.indexParameter = {
      id: 110,
    };
  },
  afterMount() {
    //  获取DOM Node
    this.imgContainer = this.findDOMNode('#imgContainer');
  },
  ready() {
    console.log(111, this.data);
    this.renderPage();
  },
  beforeDestroy() {
    //  进入销毁之前,将引用关系设置为null
    this.img = null;
    this.indexParameter = null;
    this.indexModel = null;
  },
  destroyed() {
    //  销毁之后
  },
  renderPage() {
    const html = this.compileHTML(tpl, {
      name: '王小二',
    });
    this.$el.find('#sayHi').html(html);
  },
});
