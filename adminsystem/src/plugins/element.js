import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from '@/language';
// import { useStore } from 'vuex'
export default function loadComponent(app) {
    app.use(ElementPlus, {
        i18n: i18n.global.t
    });
}
//# sourceMappingURL=element.js.map