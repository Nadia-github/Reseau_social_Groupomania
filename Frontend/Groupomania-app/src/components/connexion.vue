<template>
    <v-app>
        <h2>Connectez-vous à la team Groupomania</h2>
        <v-form ref="form" v-model="valid" lazy-validation>

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
            color="blue"
            class="mr-4"
            @click="validate"
            >
            Valider
            </v-btn>

        </v-form>
        <p>Pas encore inscrit ?</p>
        <v-btn
            :disabled="valid"
            color="grey"
            class="mr-4"
            @click="suscribe"
            >
            s'inscrire
            </v-btn>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
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
        suscribe() {
        console.log(this.password)
        }
    },
    
    }
</script>
