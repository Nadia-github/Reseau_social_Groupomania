<template>
    <v-app>
        <v-card width="60%" class="mx-auto">
            <v-layout>
                <v-app-bar>
            
                    <v-main>
                    <v-container fluid>
                        <v-card
                            border
                            class="mb-2"
                            density="compact"
                            prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
                            title="Prénom Nom"
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
                    </v-main>
                </v-app-bar>
            </v-layout>
        </v-card>
    </v-app>
</template>

<script>

export default articlesAffichage

</script>