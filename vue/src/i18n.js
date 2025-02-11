import { createI18n } from 'vue-i18n'; // 导入 createI18n
import en from './locales/en.json'; // 导入英文资源
import zh from './locales/zh.json'; // 导入中文资源

// 语言资源
const messages = {
    en,
    zh,
};

// 创建 i18n 实例
const i18n = createI18n({
    locale: 'zh', // 默认语言
    fallbackLocale: 'zh', // 回退语言
    messages, // 语言资源
});

export default i18n;