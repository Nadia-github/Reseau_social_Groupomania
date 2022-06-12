<template>
  <router-link v-if="isConnected" to="/profil">Profil</router-link>
  <v-app>
    <h2>Inscris-toi ici !</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="nom"
        :rules="nomRules"
        label="Nom"
        required
      ></v-text-field>

      <v-text-field
        v-model="prenom"
        :rules="prenomRules"
        label="Prénom"
        required
      ></v-text-field>

      <v-select
        :items="sexeList"
        label="Sexe"
        required
        v-model="sexe"
        item-title="nom"
        item-value="valeur"
      ></v-select>

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

      <v-btn :disabled="!valid" color="#ffcbcb" class="mr-4" @click="validate">
        Je valide mon inscription
        <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    Nom: "",
    nomRules: [(v) => !!v || "Le nom est requis"],
    Prénom: "",
    prenomRules: [(v) => !!v || "Le prénom est requis"],
    sexeList: [
      {
        nom: "Homme",
        valeur: "H",
      },
      {
        nom: "Femme",
        valeur: "F",
      },
    ],
    sexe: "",
    Email: "",
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
    validate() {
      fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
          nom: this.nom,
          prenom: this.prenom,
          sexe: this.sexe,
          email: this.email,
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          localStorage.setItem("prenom", this.prenom);
          localStorage.setItem("nom", this.nom);
          localStorage.setItem("sexe", this.sexe);
          localStorage.setItem("email", this.email);
          window.location.href = "/";
        })
        .catch(function(error) {
        alert(error);
        console.log(error);
      });
    },
    isConnected: localStorage.getItem("userId"),
  },

  selectSexe() {
    console.log(this.sexe);
  },
};
</script>
