

<template>
    <v-app>
        <h2 id="titre-profil">Bienvenue à toi cher collègue {{ prenom }} </h2>
        <div class="divos d-flex justify-space-around">
            <v-btn class="btn">
                <v-btn
                    color="info"
                    icon="mdi-television"
                    size="x-small"
                ></v-btn>
            Voir mon fil d'actualité</v-btn>
            <v-btn class="btn"
            @click= "articleCreation">
                <v-btn
                    color="secondary"
                    icon="mdi-pencil"
                    size="x-small"
                ></v-btn>         
            Créer une publication</v-btn>    
        </div>
        <v-card
        class="mx-auto"
        width="300px"
        >
        <v-img
            class="align-end text-white"
            height="200"
            src="public/Groupomania-profil.jpg"
            cover
        >
            <v-card-title id="titre-carte">Ta carte Groupomania</v-card-title>
        </v-img>
    
        <v-card-text>
            <div>Prénom :{{ prenom }}</div>
            <div>Nom {{ nom }}</div>
            <div>Adresse email : {{ email }}</div>
    
        </v-card-text>
    
        <v-card-actions>
            <v-btn color="red" 
            @click= "deleteAccount">
            Supprimer le compte
            </v-btn>
    
        </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        
    }),
    methods: {
            prenom : localStorage.getItem("prenom"),
            nom : localStorage.getItem("nom"),
            email : localStorage.getItem("email"),


        }
         
}   
</script>


<style>

#titre-profil{
    text-align: center;
    margin-bottom: 20px;
}

#titre-carte{
    color:black;
    background-color: rgba(255, 255, 255, 0.484);
    margin-bottom: 10px;
 }

 .divos{
     margin-bottom: 20px;
 }

.btn{
    padding: 15px;
}

 v-card{
     margin: 20px auto;
 }

</style>