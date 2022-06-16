<template>
  <router-link v-if="isConnected" to="/profil">Profil</router-link>
  <v-app>
    <h2>Félicitations, tu fais désormais parti de la team Groupomania !</h2>
    <h3>Connecte-toi dès à présent :</h3>
    <v-form ref="form" v-model="valid" lazy-validation>
      <img src="/NetworkRed.png" alt="image réseau" class="network"/>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Mot de passe"
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn :disabled="!valid" color="#ffcbcb" class="mr-4" @click="connect">
        Valider
        <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
      </v-btn>
      <p class="dmd">Pas encore inscrit ?</p>
      <a href="/inscription" id="btn-inscription">
        <v-btn :disabled="valid" color="#91" class="mr-5" @click="suscribe">
          s'inscrire
        </v-btn>
      </a>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "L'E-mail est requis",
      (v) => /.+@.+\..+/.test(v) || "L'E-mail doit être valide",
    ],
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Requis",
    },
  }),

  methods: {
    
    connect() {
      fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          localStorage.setItem("email", this.email);
          localStorage.setItem("prenom", user.prenom);
          localStorage.setItem("nom", user.nom);
          localStorage.setItem("sexe", user.sexe);
          localStorage.setItem("token", user.token);
          localStorage.setItem("userId", user.userId);
          localStorage.setItem("isAdmin", user.isAdmin)
          
          if(user.token){
            window.location.href = "/posts"
            }
        })
        .catch(function(error) {
        alert(error);
        console.log(error);
        });
    },
    isConnected: localStorage.getItem("userId"),
    suscribe() {
      console.log(this.password);
    },
  },
};
</script>

<style>

.network{
    margin: 0 auto;
    margin-bottom: 30px;
    align-items: center;
    display: block;
}

.dmd {
  margin: 10px 0;
}
#btn-inscription:hover {
  margin-top: 10px;
  background: none;
}

a:hover {
  background: none;
}
</style>
