<template>
  <v-app>
    <v-container fluid>
      <h2>{{ prenom }}, voici ton fil d'actualité</h2>
      <v-card
        v-for="post in posts"
        :key="post.id"
        border
        class="mb-2"
        density="compact"
        prepend-avatar ="https://randomuser.me/api/portraits/women/10.jpg"
        variant="text "
      >

        {{ post.titre }}
        <v-img src="" cover>{{ post.attachment }}</v-img>

        <v-card-text v-model="contenu">
          {{ post.contenu }} <br> <br>
          {{ post.createdAt }}
        </v-card-text>

        <template v-slot:actions>
          <v-btn color="primary" variant="text">Voir plus</v-btn>
          <v-btn v-if="isConnected" @click="deletePoste">Supprimer</v-btn>
        </template>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isConnected: localStorage.getItem("userId"),
    prenom: localStorage.getItem("prenom"),
    //user : localStorage.getItem("user"),
    posts: [
      {
        titre: "",
        contenu: "",

        attachment: "",
        createdAt:"",
      },
    ],
  }),
  
  mounted() {
    const sexe = localStorage.getItem("sexe")
    
    /*isMan(),{
     sexe: 'H'
    }
    isWoman(), {
     sexe : 'F'
    }
    console.log(isMan) */
    
    const token = localStorage.getItem("token")
    fetch("http://localhost:5000/api/posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then(response => response.json())
    .then((post) => {
        console.log(post)
        this.posts = post.posts
    });
  },
  methods: {},
};
</script>

<style></style>
