<template>
  <h2>A toi de jouer {{ prenom }}, crée ton post !</h2>
  <v-app>
    <v-form v-model="valid" ref="form" class="pa-4 pt-6">
      <v-text-field
        v-model="titre"
        required
        color="pink"
        label="Titre"
        style="min-height: 96px"
        :rules="titreRules"
      ></v-text-field>

      <v-textarea
        v-model="contenu"
        required
        color="pink"
        label="Ecris un commentaire"
        rows="3"
        :rules="contenuRules"
      ></v-textarea>

      <v-file-input
        v-model="attachment"
        accept="image/png, image/jpeg, image/bmp, image/gif"
        placeholder="Ajoute une image ou un GIF"
        prepend-icon="mdi-camera"
        label="Ajoute une image ou un GIF"
      ></v-file-input>

      <v-spacer></v-spacer>
      <v-btn
        :disabled="!valid"
        class="white--text"
        color="grey accent-4"
        @click="validerPost"
      >
        Valider le post
      </v-btn>
    </v-form>
    <v-divider></v-divider>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    titre: "",
    titreRules: [(v) => !!v || "Le titre est requis"],
    contenu: "",
    contenuRules: [(v) => !!v || "Le contenu est requis"],
    attachment: "",
    rules: {
      required: (value) => !!value || "Requis",
    },
    prenom: localStorage.getItem("prenom"),
    nom: localStorage.getItem("nom"),
    email: localStorage.getItem("email"),
    userId: localStorage.getItem("userId"),
  }),
  methods: {
    validerPost() {
      const token = localStorage.getItem("token")
      fetch("http://localhost:5000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          titre: this.titre,
          contenu: this.contenu,
          attachment: this.attachment,
        }),
      })
        .then((response) => {
          window.location.href="/posts"
        })
        
    },
  },
};
</script>

<style></style>
