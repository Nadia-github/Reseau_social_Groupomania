<template>
  <v-app>
    
      <h2 class="titre_deconnecte">Bonjour {{ prenom }}, alors quoi de neuf ?</h2>
      <div class="divos justify-space-around">
        <a href="/createpost" class="link-a">
          <v-btn class="btn_createpost">
            <v-btn margin="0 auto" id="btn_icon" color="grey" icon="mdi-pencil" size="x-small"></v-btn>
            Créer une publication</v-btn
          >
        </a>
      </div>
      <v-btn @click="logout" id="btn-logout">Déconnexion </v-btn>
      <v-main class="main">
        <v-container fluid>
          <v-card 
          v-for="post in posts"
          :key="post.id"    
          style="border-radius:20px; 
          "
          class="mb-2 card-remix"
          density="compact"
          color-elevation="blue"
          
        >
          <div class="presentation">
            <img class="img-id" v-if="post.user.sexe == 'H'" src="/homme.png" alt="homme">
            <img class="img-id" v-if="post.user.sexe == 'F'" src="/femme.png" alt="femme">
           
            <h4>{{ post.user.prenom }}  {{ post.user.nom }} </h4>
          </div>
          <div id="titre_disposition" style="text-align: center">{{ post.titre }}</div>
          
          <img v-if="post.attachment" v-bind:src="post.attachment" id="img-attachment"/>
        
        

          <v-card-text style="text-align: justify; display: flex; flex-direction: column;">
            <div>{{ post.contenu }}</div> <br> <br>
            <div id="dateCreation">Commentaire créé le :  //dateTime(category.created_at)// </div>
          </v-card-text>

          <template v-slot:actions>
            <v-btn v-if="post.userId === userId || isAdmin" @click="deletePost(post)" id="deletePost">Supprimer</v-btn>
          </template>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>

export default {
  data: () => ({
    isAdmin: localStorage.getItem("isAdmin"),
    isConnected: localStorage.getItem("userId"),
    prenom: localStorage.getItem("prenom"),
    nom: localStorage.getItem("nom"),
    userId: localStorage.getItem("userId"),
    posts: [

    ],
  }),
  
  mounted() {    
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
    
    deletePost(post) {
      const token = localStorage.getItem("token")   
      fetch("http://localhost:5000/api/posts/"+post.id, {
        method : "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },    
      })
      window.location.reload();
    },

    logout: function () {
      localStorage.clear();
      this.$router.push("/");
    },

  },
    /*dateTime(value) {
      return moment(value).format("DD-MM-YYYY");
  },*/

};
</script>

<style>

.v-btn{
  cursor: pointer;
}

.card-remix {
    box-shadow: 0px 1px 10px 3px rgba(203, 198, 198, 0.95);;
    background-color: rgb(245, 239, 239);
    padding: 10px;
}

.card-remix:hover {
    box-shadow: 0px 1px 10px 3px rgba(189, 177, 177, 0.95);
    background-color: rgb(255, 255, 255);
    transform: scale(1.02);
}
.presentation{
  align-items: baseline;
  display: flex;
  padding: 0 16px;
  margin-top: 20px;
}

.presentation h4{
  margin-left: 7px;
}

.img-id{
  width: 25px;
  height: 25px;
}
.divos {
  margin : 10px auto;
  text-transform:none;
}

#btn_icon{
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.link-a:hover{
  background: none;
  color:#616161;
}

.link-a{
  color: white;
}

.btn_createpost{
  background-color: #616161;
  text-transform:none;
  box-shadow: 3px 5px 5px rgba(189, 177, 177, 0.95);
  border-radius: 0;
}

.btn_createpost:hover{
  background-color: rgb(245, 239, 239);
  text-transform:none;
}

#titre_disposition{
  padding: 5px 16px;
  font-weight: bold;
  margin: 0 auto;
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
  margin: 30px auto;
}

#img-attachment{
  width: 70%;
  height: auto;
  margin: 10px auto;
  justify-content: center;
  display :flex;
  box-shadow: 0px 1px 10px 3px rgba(155, 146, 146, 0.95);

}

#deletePost{
  text-transform: initial;
  color: rgba(213, 189, 189, 0.95);
  font-style:normal;
  position: absolute;
  right: 0;
}

@media (max-width: 455px) {
  #app {
    width: 100%;
    padding: 0rem;
  }

  .card-remix{
    padding-left: 0; padding-right: 0;
  }
  
  #titre_disposition{
    padding: 10px 16px;
  }

  .titre_deconnecte{
  padding: 0px 10px;
  font-size: 18px;
}


}

</style>
