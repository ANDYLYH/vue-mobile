// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import FastClick from 'fastclick'
//立即响应点击事件
//移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，
//这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick。
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//引入flexible
import 'lib-flexible'
Vue.config.productionTip = false
//控制台
export const loadScript = (url, callback) => {
 const script = document.createElement('script')
 script.onload = () => callback()
 script.src = url
 document.body.appendChild(script)
}

loadScript(
'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
 () => {
// eslint-disable-next-line
new VConsole()
 })


router.beforeEach((to, from, next) => {
    // 窗口回顶部
    window.scrollTo(0, 0);
    window.document.title= "佳样年华-"+to.meta.title;
    next() // 确保一定要调用 next()
  }
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
