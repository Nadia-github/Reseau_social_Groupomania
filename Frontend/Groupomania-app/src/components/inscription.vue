<template>
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
                :items="sexe"
                label="Sexe"
                required
                @select="selectSexe"
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
        
            <v-btn
            :disabled="!valid"
            color="#ffcbcb"
            class="mr-4"
            @click="validate"
            >
            Je valide mon inscription
            </v-btn>

        </v-form>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        valid: true,       
        Nom:"",
        nomRules:[
        (v) => !!v || "Le nom est requis",    
        ],
        Prénom:"",
        prenomRules: [
        (v) => !!v || "Le prénom est requis",
        ],
        sexe: ['Homme', 'Femme'],
        Email: "",
        emailRules: [
        (v) => !!v || "L'E-mail est requis",
        (v) => /.+@.+\..+/.test(v) || "L'E-mail doit être valide",
        ],
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Requis',
        }
    }),

    methods: {
        validate() {
        console.log(this.email)
        },
        selectSexe() {
        console.log(this.sexe)
        }
    },
    
    }
</script>
