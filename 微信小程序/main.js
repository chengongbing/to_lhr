import App from './App'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

import uView from './uni_modules/vk-uview-ui';
Vue.use(uView);


import config from './utils/config.js';
import request from './utils/request.js'
import store from './store/index.js'
Vue.prototype.$store=store;
Vue.prototype.$c=config;
Vue.prototype.$H=request;


// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif