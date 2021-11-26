/**
 * @Description:用户管理相关路由管理
 * @Author:LY
 * @Date:2021-11-05
 * @LastEditTime:
 */
import {RouteRecordRaw} from 'vue-router'

const UserManagerRouter:Array<RouteRecordRaw> = [
    {
        path:'/login',
        name:'Login',
        component:()=>import('@/views/usermanager/login/index.vue')
    }
]

export default UserManagerRouter