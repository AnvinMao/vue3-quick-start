import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import vueI18n from './locales';

import '@/assets/styles/main.scss';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(vueI18n);

app.mount('#app');
