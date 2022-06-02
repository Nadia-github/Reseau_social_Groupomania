import { createRouter, createWebHistory } from "vue-router";
import connexion from "@/components/connexion.vue"
import inscription from "@/components/inscription.vue"

const routes = [
    {
    path: '/',
    name: 'connexion',
    component: connexion
    },
    {
    path: '/inscription',
    name: 'inscription',
    component: inscription
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;