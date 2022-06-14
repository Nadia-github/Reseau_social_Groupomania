<template>
  <h2>A toi de jouer {{ prenom }}, crée ton post !</h2>
  <v-app>
    <v-form>
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
          label="Exprime toi"
          rows="3"
          :rules="contenuRules"
        ></v-textarea>
      </v-form>
      <v-file-input
        v-model="attachment"
        type = file
        accept="image/*"
        label="Ajoute une image ou un gif si tu le souhaites"
      ></v-file-input>

      <v-spacer></v-spacer>
      <v-btn
        :disabled="!valid"
        class="white--text"
        color=" accent-4"
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
    titreRules: [(v) => !!v || "Le titre est requis",
    (v) => (v && v.length >= 5) || "Le titre doit faire au moins de 5 caractères",
    ],
    contenu: "",
    contenuRules: [(v) => !!v || "Le contenu est requis",
    (v) => (v && v.length >= 20) || "Votre texte doit faire au moins de 20 caractères",
    ],
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
      console.log(this.attachment[0]);
      const formData = new FormData()
      formData.append ("titre", this.titre) 
      formData.append ("contenu", this.contenu) 
      formData.append ("attachment", this.attachment[0]) 
        
      fetch("http://localhost:5000/api/posts/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData
      })
        .then((response) => {
          window.location.href="/posts"
        })
        .then((post) =>{
          localStorage.setItem("userId", post.userId);
          localStorage.setItem("sexe", post.sexe)
        })
        console.log("attachment");
    },
  },
};
</script>

<style></style>
