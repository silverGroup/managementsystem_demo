import { createStore, createLogger } from 'vuex';
import { store as user } from '@/store/modules/user';
import { store as setting } from '@/store/modules/setting';
export const store = createStore({
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger({})] : [],
    modules: {
        user,
        setting
    }
});
export function useStore() {
    return store;
}
//# sourceMappingURL=index.js.map