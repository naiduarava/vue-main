<template>
     <div class="d-flex align-center flex-column">
        <v-card
        width= 40%
        class="mt-10"
        >
            <v-card-title class="text-center mb-5">Sign Up</v-card-title>
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
                    type="password"
                    label="Password"
                    required
                    ></v-text-field>
                </v-col>
                <div @click="closetask">
                    <v-btn
                    color="error"
                    class="mr-4  mb-5"
                    @click="signup"
                    >
                    Sign Up
                    </v-btn>
                </div>
            </v-row>
            <v-card-text class="text-center">Have an account already? 
                <router-link to ="/">Login</router-link>
            </v-card-text>
        </v-card>  
    </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "@/fb";
require('firebase/compat/auth');
export default {
    name: "SignUp",
    data() {
        return{
            email: "",
            password: "",
        };
    },
    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        console.log(user);
                    },
                    (err) => {
                        alert(err);
                    }
            );
        },
        closetask(){
            this.email = '',
            this.password= ''
        }
    },
};
</script>

