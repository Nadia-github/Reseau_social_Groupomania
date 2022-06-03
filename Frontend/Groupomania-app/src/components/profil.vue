

<template>
    <v-app>
    <h2>Connecte-toi et tu auras accès à ton profil </h2>
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
            color="#ffcbcb"
            class="mr-4"
            @click="accesProfil"
            >
            Valider
            </v-btn>
            <p>Toujours pas inscrit ?</p>
            <v-btn
                :disabled="valid"
                color="#91"
                class="mr-5"
                @click="accesProfil"
                >
                s'inscrire
            </v-btn>
        </v-form>
    </v-app>}
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
        accesProfil() {
        console.log(this.email)
        },
    },
    
    }
</script>