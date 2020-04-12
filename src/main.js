import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routerConfig from './router/routerConfig'  // 路由拦截
//import viewImage from './utils/directive'  // 自定义指令 --- 内部测试
import lpdVimage from 'lpd-image'  // 自定义指令 --- npm
import 'vant/lib/index.css';
import "lib-flexible"
import utils from './utils/utils' //工具函数
Vue.config.productionTip = false

import * as rasterizeHTML from 'rasterizehtml';
import Vconsole from 'vconsole';
const vConsole = new Vconsole();

import axios from 'axios'
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

import Vant from 'vant';
import 'vant/lib/index.css';
/* 注册公共弹窗 */
import CommonDialog from "./CommonDialog"
import modalHelper from "./CommonDialog/modalHelper"
Vue.prototype["$CommonDialog"] = CommonDialog;
Vue.prototype["$modalHelper"] = modalHelper;

Vue.use(Vant);

Vue.use(vConsole)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
