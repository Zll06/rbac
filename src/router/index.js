/*
 * @Author: your name
 * @Date: 2022-03-12 22:01:19
 * @LastEditTime: 2022-03-13 17:51:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue_x\src\router\index.js
 */
import Vue from "vue";
import VueRouter from 'vue-router';

import NotFound from '../components/HelloWorld.vue'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: () => import('../views/home/home.vue')
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

export default router