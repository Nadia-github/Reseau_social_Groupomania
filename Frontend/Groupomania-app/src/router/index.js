import { createRouter, createWebHistory } from "vue-router";
import connexion from "@/components/connexion.vue";
import inscription from "@/components/inscription.vue";
import profil from "@/components/profil.vue";
import createPost from "@/components/createPost.vue";
import about from "@/components/about.vue";
import allPosts from "@/components/allPosts.vue";
import connexionNewUser from "@components/connexionNewUser.vue";


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
    path: '/createPost',
    name: 'createPost',
    component: createPost,
    },
    {
    path: '/about',
    name: 'about',
    component: about,
    },
    {
    path: '/posts',
    name: 'posts',
    component: allPosts,
    },
    {
        path: '/connexionNewUser',
        name: 'connexionNewUser',
        component: connexionNewUser,
        }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;