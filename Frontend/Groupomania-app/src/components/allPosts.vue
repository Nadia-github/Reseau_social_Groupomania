<template>
  <v-app>
    <v-container fluid>
      <h2 class="titre_deconnecte">Bonjour {{ prenom }}, alors quoi de neuf ?</h2>
      <div class="divos justify-space-around">
        <a href="/createpost" class="link-a">
          <v-btn @click="articleCreation" class="btn_createpost">
            <v-btn id="btn_icon" color="grey" icon="mdi-pencil" size="x-small"></v-btn>
            Créer une publication</v-btn
          >
        </a>
      </div>
      <v-btn @click="logout" id="btn-logout">Déconnexion </v-btn>
      <v-card
        v-for="post in posts"
        :key="post.id"
        border
        class="mb-2"
        density="compact"
        prepend-avatar ="https://randomuser.me/api/portraits/women/10.jpg"
        variant="text "
      >
        <div id="titre_disposition">{{ post.titre }}</div>
        
       
        {{ post.attachment }}

        <v-card-text v-model="contenu">
          {{ post.contenu }} <br> <br>
          <div id="dateCreation">Commentaire créé le : {{ post.createdAt }}</div>
        </v-card-text>

        <template v-slot:actions>
          <v-btn color="primary" variant="text">Voir plus</v-btn>
          <v-btn @click="deletePost">Supprimer</v-btn>
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
  methods: {
    deletePost() {
      const token = localStorage.getItem("token")
      fetch("http://localhost:5000/api/posts/", {
        method : "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then(() => {
          localStorage.removeItem(this.post)
        });
    },
    logout: function () {
      localStorage.clear();
      this.$router.push("/");
    },

  },
};
</script>

<style>

.divos {
  margin-bottom: 30px;
  margin-top: 10px;
  text-transform:none;
}

#btn_icon{
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.link-a:hover{
  background: none;
}

.btn_createpost{
  background-color: rgba(240, 233, 233, 0.708);
  text-transform:none;
}

.btn_createpost:hover{
  background-color: rgba(216, 203, 203, 0.708);
  text-transform:none;
}

#titre_disposition{
  padding: 5px 16px;
}

#dateCreation{
  font-style: italic;
  font-size: smaller;
}

#btn-logout{
  display: block;
  position:absolute;
  right: 0;
}

.titre_deconnecte{
  margin: 20px auto;
}

</style>
