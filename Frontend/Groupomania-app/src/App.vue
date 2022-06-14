<template>
  <nav>
    <router-link v-if="!isConnected" to="/">Accueil</router-link>
    <router-link v-if="!isConnected" to="/inscription">Inscription</router-link>
    <router-link v-if="isConnected" to="/posts">Fil d'actualité</router-link>
    <router-link v-if="isConnected" to="/profil">Profil</router-link>
    <router-link to="/about">A propos</router-link>
  </nav>
  <header>
    <h1>Ton réseau</h1>
    <img
      src="../icon-left-font-monochrome-white V2.png"
      alt="logo Groupomania"
      class="logo"
    />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="footer">
    <v-card
      elevation="10"
      rounded="0"
      width="100%"
      class="bg text-center ma-xs-2"
    >
    
      <v-card-text>
        <a href="https://www.groupomania.fr/" class="a_icon"><v-btn class="mx-4" icon="mdi-home" variant="plain"></v-btn></a>
        <a href="mailto:support@groupomania.fr" class="a_icon"><v-btn class="mx-4" icon="mdi-email" variant="plain"></v-btn></a>
        <a href="http://www.google.com/calendar/event?action=TEMPLATE&text=Example%20Event&dates=20131124T010000Z/20131124T020000Z&details=Event%20Details%20Here&location=123%20Main%20St%2C%20Example%2C%20NY" class="a_icon">
          <v-btn class="mx-4" icon="mdi-calendar" variant="plain"></v-btn>
        </a>
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-white">
        {{ new Date().getFullYear() }} —
        <strong>© copyright Groupomania</strong>
      </v-card-text>
    </v-card>
  </footer>
</template>

<script>
import connexion from "@/components/connexion.vue";
import inscription from "@/components/inscription.vue";
import router from "./router";

export default {
  name: "App",
  components: {},
  data: () => ({
    isConnected: localStorage.getItem("token"),
  }),
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style>
@import "@/assets/base.css";

#btn-logout {
  cursor: pointer;
  width: 20%;
  text-transform: none;
  font-size: 12px;
  top: -20px;
  display: flex;
}

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
  color: #fff;
  padding: 5px 20px;
  display: flex;
  place-items: center;
  justify-content: center;
  margin: 30px 0;
  box-shadow: 0px 1px 14px 3px rgba(158, 158, 158, 0.95);
}

.logo {
  display: block;
  margin-left: 10px;
}

h1 {
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

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2em;
}

.footer {
  margin-bottom: 0;
  background-color: #616161;
}

.bg{
  background-color: #616161;
}

.a_icon:hover{
  background: none;
}

.a_icon{
  color: rgb(244, 224, 224);
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
  #app {
    width: 90%;
  }
  #btn-logout {
    width: 40%;
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
