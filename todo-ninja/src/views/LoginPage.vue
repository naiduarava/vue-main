<template>
    <div class="d-flex align-center flex-column">
        <v-card
        width= 40%
        class="mt-10"
        >
            <v-card-title class="text-center mb-5">
                Login
            </v-card-title>
            <v-row class="d-flex align-center flex-column">
                <v-col
                cols="12"
                sm="6"
                md="8"
                >
                    <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                md="8"
                >
                    <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    ></v-text-field>
                </v-col>
                <v-btn
                color="error"
                class="mr-4  mb-5"
                @click="login"
                >
                    Login
                </v-btn>
            </v-row>
            <v-card-text class="text-center">
                Don't have an account already? 
                <router-link to ="/signup" >SignUp</router-link>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "@/fb";
require('firebase/compat/auth')
export default {
    name: "LoginPage",
    data() {
        return{
            email: "",
            password: "",

            timeout: 2000,
            snackbar: false,
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        console.log(user);
                        this.$router.push({path: '/ToDo' })
                        this.snackbar= true;
                    },
                    (err) => {
                        alert(err);
                    }
            );
        },
    }
}
</script>
