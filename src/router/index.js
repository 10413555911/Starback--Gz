import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            meta: {
                title: '加班/休假'
            },
            component: () => import('@/views/Home/index')
        },
        {
            path: '/login',
            meta: {
                title: '登录'
            },
            component: () => import('@/views/Login/index')
        }, {
            path: '/search',
            meta: {
                title: '筛选'
            },
            component: () => import('@/views/Sear/index')
        }, {
            path: '/details/:type/:id',
            meta: {
                title: '加班'
            },
            props: true,
            component: () => import('@/views/details/index')
        }, {
            path: '/applican/:id',
            component: () => import('@/views/applican/index')
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
})
export default router