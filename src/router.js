import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('./components/Detail.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
