import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router