import { createRouter, createWebHistory } from "vue-router";

import Customize from "./pages/Customize.vue";
import Pay from "./pages/Pay.vue";

const router = createRouter({
    history:createWebHistory(),

    routes:[
        {
            path:'/',
            component: Customize
        },
        {
            path:'/pay',
            component:Pay
        }
    ]
})

export default router