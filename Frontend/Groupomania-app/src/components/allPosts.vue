<template>
    <v-app>

        <v-container fluid>
            <v-card
                v-for="post in posts"
                :key="post.id"
                border
                class="mb-2"
                density="compact"
                prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
                :title = "post.name"
                variant="text"
                >
                <v-img src="https://picsum.photos/512/128?image=660" cover></v-img>
    
                <v-card-text>
                    Contenu créé par le user
                </v-card-text>
    
                <template v-slot:actions>
                    <v-btn color="primary" variant="text">Voir plus</v-btn>
                </template>
            </v-card>
        </v-container>

    </v-app>
</template>

<script>

export default {
     data: () => ({
         posts : [{
            name: "test1",
            contenu: "content1"
         },
         {
             name: "test2",
            contenu: "content2"
         }]
     }),
     mounted() {
         fetch ('http://localhost:5000/api/posts/', {
            headers : {
                "Content-Type" : "application/json"
             },
            })
            .then(response =>{
                this.posts = response
            })
     }
}

</script>