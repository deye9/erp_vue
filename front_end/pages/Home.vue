<template>
    <v-app id="home">
        <v-toolbar dark color="primary" dense>
            <a href="/home" class="d-flex router-link-active">
                <img :src="tenant.logo" height='38px' width='38px'>
            </a>
            <v-toolbar-title class="white--text"> Welcome to {{tenant.name}} </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat @click="Login">Login</v-btn>
                <v-btn flat @click="Register">Register</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <div class="text-md-center">
                    <h1> {{tenant.name}} </h1>
                    <br />
                    <h2 class="my-3 headline"> {{tenant.catch_phase}} </h2>
                    <div class="links">
                        <a href="https://laravel.com/docs">Documentation</a>
                        <a href="https://laracasts.com">Laracasts</a>
                        <a href="https://laravel-news.com">News</a>
                        <a href="https://forge.laravel.com">Forge</a>
                        <a href="https://github.com/laravel/laravel">GitHub</a>
                    </div>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import auth from '../auth.js'
    export default {
        computed:  {
            tenant() {
                return this.$store.state.tenant
            }
        },
        methods: {
            Login() {
                this.$router.push({ path: '/login' });
            },
            Register() {
                this.$router.push({ path: '/register' });
            }
        },
        mounted: function() {
            if (location.pathname.toLocaleLowerCase().includes("/password/reset/"))
            {
                auth.mountresetcomponents();
            }
            this.$nextTick(function () {
                auth.check();
            });
        }
    }
</script>

<style scoped lang="css">
  h1 {
    font-size: 150px;
    font-weight: 700;
    color: #252932;
    line-height: 150px;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
    /* style="color: #636b6f;" */
  }
</style>
