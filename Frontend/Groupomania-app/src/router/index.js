import { createRouter, createWebHistory } from "vue-router";
import connexion from "@/components/connexion.vue"
import inscription from "@/components/inscription.vue"
import profil from "@/components/profil.vue"


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
    },
    {
    path: '/profil',
    name: 'profil',
    component: profil
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;