<template>
    <v-app id="home">
        <v-toolbar dark color="primary" dense>
            <a href="#/home" class="d-flex router-link-active">
                <img src='https://cdn.vuetifyjs.com/images/logos/v-alt.svg' height='38px' width='38px'>
            </a>
            <v-toolbar-title class="white--text">Welcome to Pentaville.</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat @click="Login">Login</v-btn>
                <v-btn flat>Register</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <div class="text-md-center">
                    <h1>Registration Page.</h1>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        methods: {
            Login () {
                this.$router.push({ path: '/login' });
            }
        }
    };
</script>
