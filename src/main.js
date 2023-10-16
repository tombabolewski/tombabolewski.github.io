import { createApp } from 'vue';
import './styles/main.scss';
import App from './App.vue';
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js';
import '@assets/style/main.scss';

createApp(App)
    .use(VueFullPage)
    .mount('#app');
