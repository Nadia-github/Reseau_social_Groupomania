<template>
  <v-app>
    <h2 id="titre-profil">Bienvenue à toi {{ prenom }}</h2>
    <v-btn @click="logout" id="btn-logout">Déconnexion </v-btn>
    <v-card class="mx-auto card" >
      <v-img  v-if="sexe == 'H'" 
        class="align-end text-white" 
        height="200"
        src="/you-boy-2.gif" alt="homme"
        cover
      >
        <v-card-title id="titre-carte">Ta carte Groupomania</v-card-title>
      </v-img>
      <v-img  v-if="sexe == 'F'" 
        class="align-end text-white" 
        height="200"
        src="/you-girl.gif" alt="femme"
        cover
      >
        <v-card-title id="titre-carte">Ta carte Groupomania</v-card-title>
      </v-img>


      <v-card-text>
        <img class="img-id" v-if="sexe == 'H'" src="/homme.png" alt="homme">
        <img class="img-id" v-if="sexe == 'F'" src="/femme.png" alt="femme">
        <div class="gras">Prénom :  {{ prenom }}</div>
        <div class="gras">Nom :  {{ nom }}</div>
        <div>Adresse email :  {{ email }}</div>
        <div>Id utilisateur : {{ userId }}</div>
        <br>
        <div v-if="sexe == 'F'">Caractéristique : super-héroïne du quotidien </div>
        <div v-if="sexe == 'H'">Caractéristique : super-héro du quotidien </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" @click="deleteAccount"> Supprimer le compte </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sexe: localStorage.getItem("sexe"),
    prenom: localStorage.getItem("prenom"),
    nom: localStorage.getItem("nom"),
    email: localStorage.getItem("email"),
    userId: localStorage.getItem("userId"),
  }),
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push("/");
    },
    deleteAccount() {
      const token = localStorage.getItem("token")
      fetch("http://localhost:5000/api/auth/", {
        method : "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then(() => {
          localStorage.removeItem("user");
          localStorage.clear();
          window.location.href = "/";
        });
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

#titre-profil{
  margin-top : 30px;
}

#titre-carte {
  color: black;
  background-color: rgba(255, 255, 255, 0.822);
  margin-bottom: 10px;
}

.btn {
  padding: 15px;
}

.v-card {
  margin: 30px auto;
}

.mx-auto{
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.gras{
  font-weight: bold;
}

@media (max-width: 455px) {
  .card{
    width: 100%;
  }
}
</style>
