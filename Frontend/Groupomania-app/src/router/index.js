import { createRouter, createWebHistory } from "vue-router";
import connexion from "@/components/connexion.vue";
import inscription from "@/components/inscription.vue";
import profil from "@/components/profil.vue";
import articleCreation from "@/components/articleCreation.vue";
import about from "@/components/about.vue";


const routes = [
    {
    path: '/',
    name: 'connexion',
    component: connexion,
    },
    {
    path: '/inscription',
    name: 'inscription',
    component: inscription,
    },
    {
    path: '/profil',
    name: 'profil',
    component: profil,
    },
    {
    path: '/creationdepost',
    name: 'articleCreation',
    component: articleCreation,
    },
    {
    path: '/about',
    name: 'about',
    component: about,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;