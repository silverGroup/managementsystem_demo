/**
 * @Description:相关路由管理
 * @Author:LY
 * @Date:2021-11-05
 * @LastEditTime:
 */
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
const constantFiles = require.context('./constantModules', true, /\.ts$/);
let constantModules = [];
constantFiles.keys().forEach((key) => {
    if (key == './index.ts')
        return false;
    constantModules = constantModules.concat(constantFiles(key).default);
});
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        meta: {
            hidden: true
        },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index.vue'),
                name: 'Home',
                meta: {
                    title: 'dashboard',
                    icon: '#icondashboard',
                    affix: true
                }
            }
        ]
    },
    ...constantModules
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes
});
export function resetRouter() {
    const newRouter = router;
    router.matcher = newRouter.matcher;
}
// const isAuthenticated=false
// router.beforeEach((to, from, next) => {
//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Home' })
//     //to and from are Route Object,next() must be called to resolve the hook}
//     next()
// })
export default router;
//# sourceMappingURL=index.js.map