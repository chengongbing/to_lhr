import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.css'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './i18n'; // 引入 i18n 配置

createApp(App).use(store).use(router).use(ElementPlus, {locale: zhCn,}).use(i18n).mount('#app')