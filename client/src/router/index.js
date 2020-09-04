import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from "../views"

// Layouts
import BuilderLayout from '../layouts/BuilderLayout'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Views.Home
        },
        {
            path: '/builder',
            component: BuilderLayout,
            children: [
                {
                    path: '',
                    name: 'Builder',
                    component: Views.Builder
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: Views.About
        },
        {
            path: '*',
            name: "NotFound",
            component: Views.NotFound
        }
    ]
})

export default router
