import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store/setup';
import './styles/global.css';

createApp(App).use(store).mount('#app');
