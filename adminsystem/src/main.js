import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { store } from '@/store';
import { loadAllPlugins } from '@/plugins';
import * as directives from '@/directives';
import '@/styles/comon.css';
const app = createApp(App);
loadAllPlugins(app);
Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
});
app.use(store).use(router).mount('#app');
//# sourceMappingURL=main.js.map