<template>
    <nav>
      <router-link to="/">Connexion</router-link>
      <router-link to="/inscription">Inscription</router-link>
      <router-link v-if="isConnected" to="/profil">Profil</router-link>
      <router-link to="/about">A propos</router-link>

    </nav>
    <header>
      <h1>
        Ton réseau
      </h1>
      <img src="../public/icon-left-font-monochrome-white V2.png" alt="logo Groupomania" class="logo"> 
    </header>
    <main>
       <router-view/>
    </main>
    
    <v-app>
    <v-footer>
      <v-card 
        elevation="10"
        rounded="0"
        width="100%"
        class="bg-grey text-center ma-xs-2"
      >
        <v-card-text>
          <v-btn
            class="mx-4"
            icon="mdi-home"
            variant="plain"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="mdi-email"
            variant="plain"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="mdi-calendar"
            variant="plain"
          ></v-btn>
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="text-white">
          {{ new Date().getFullYear() }} — <strong>© copyright Groupomania</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>

</template>


<script>
import connexion from "@/components/connexion.vue";
import inscription from "@/components/inscription.vue";
import router from './router';

export default {
  name: "App",
  components: {},
    data: () => ({
    isConnected : localStorage.getItem("userId")
  }),
};
</script>

<style>
@import "@/assets/base.css";

#app {
  width: 70%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  background-color: #616161;
  background-size: 200px 500px;
  max-height: 100vh;
  border-radius: 0;
  color: #FFF;
  padding: 5px 20px;
  display: flex;
  place-items: center;
  justify-content:center;
  margin: 30px 0;
  box-shadow: 0px 1px 14px 3px rgba(158, 158, 158, 0.95);
}

.logo {
  display: block;
  margin-left:  10px;
}

h1{
  padding-bottom: 5px;
  font-size: 1.6em;
  font-weight: bold;
}

a,
.red {
  text-decoration: none;
  color: rgba(189, 0, 0, 0.418);
  transition: 0.4s;
}

nav{
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2em;
}

.v-footer{
  padding: 0;
}


@media (hover: hover) {
  a:hover {
    background-color: hsla(328, 82%, 9%, 0.2);
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

img {
     width: 170px;
     height: 71px;
}

@media (max-width: 800px) {
  #app{
    width: 90%;
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    padding: 0 2rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
