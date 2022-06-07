<template>
    <h2>
        A toi de jouer, crée ton post !
    </h2>
    <v-app>
        <v-form
        ref="form"
        v-model="form"
        class="pa-4 pt-6"
        >
        <v-text-field
          v-model="titre"
          filled
          color="pink"
          label="Titre"
          style="min-height: 96px"
          :rules="[rules.required]"
        ></v-text-field>

        <v-textarea
          v-model="contenu"
          color="pink"
          label="Contenu"
          rows="3"
          :rules="[rules.required]"
        ></v-textarea>

        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp, image/gif"
          placeholder="Ajoute une image ou un GIF"
          prepend-icon="mdi-camera"
          label="Choisi ton media"
        ></v-file-input>

      </v-form>
      <v-divider></v-divider>
      <v-card-actions>

        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="grey accent-4"
          depressed
        >
          Valider le post
        </v-btn>
      </v-card-actions>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    dialog: false,
    titre: undefined,
    contenu: undefined,
    form: false,
    isLoading: false,
    rules: {
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      required: v => !!v || 'Ce champs est requis',
    }
    }),
   
   
  }
</script>