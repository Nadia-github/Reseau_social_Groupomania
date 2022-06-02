<template>
  <div>
    <div id="nav">
      <router-link to="/">connexion</router-link>
      <router-link to="/inscription">inscription</router-link>
    </div>
    <header>
      <h1>
        The Groupomania network
      </h1>
    </header>
    <main>
      <connexion/> 
    </main>
    <footer>
      © copyright Groupomania 2022
    </footer>
    <router-view/>
  </div>
</template>


<script>
import connexion from "@/components/connexion.vue";
import RouterLink from "@/router"
export default {
  name: "App",
  components: {connexion},
  data: () => ({
    //
  }),
};
</script>
