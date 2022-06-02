<template>
    <nav>
      <router-link to="/">connexion</router-link>
      <router-link to="/inscription">inscription</router-link>
    </nav>
    <header>
      <h1>
        The Groupomania network
      </h1>
    </header>
    <main>
       <router-view/>
    </main>
    <footer>
      © copyright Groupomania 2022
    </footer>
</template>


<script>
import connexion from "@/components/connexion.vue";
import inscription from "@/components/inscription.vue";
import router from './router';

export default {
  name: "App",
  components: {},
    data: () => ({
    //
  }),
};
</script>
