<template>
    <nav>
      <router-link to="/">Connexion</router-link>
      <router-link to="/inscription">Inscription</router-link>
      <router-link v-if="isConnected" to="/profil">Profil</router-link>
    </nav>
    <header>
      <h1>
        Le réseau
      </h1>
      <img src="../public/icon-left-font-monochrome-white.png" alt="logo Groupomania" class="logo"> 
    </header>
    <main>
       <router-view/>
    </main>
    
    <v-app>
    <v-footer>
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-grey text-center"
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  background-color: grey;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.red {
  text-decoration: none;
  color: rgba(189, 0, 0, 0.418);
  transition: 0.4s;
}



@media (hover: hover) {
  a:hover {
    background-color: hsla(328, 82%, 9%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
   
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  img {
     width: 30%;
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
