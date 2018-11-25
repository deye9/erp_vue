<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12 md12>
            <v-widget title="Setup Access Control via Roles">
                <div slot="widget-content">
                    <v-combobox label="Select Role" autocomplete required :items="userRoles"
                    item-text="name" item-value="id" v-model="selectedRole" return-object
                    v-on:change="getPermissions"></v-combobox>
                </div>
            </v-widget>
        </v-flex>
        <!-- <v-flex sm5 md5>
            <v-card>
                <v-card-title class="d-flex justify-content-center">
                    <h4>Role Permissions</h4>
                </v-card-title>
                <v-card-text>
                    <div class="dual-list list-left col-md-5">
                        <div class="row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-search"></span>
                                </div>
                                <input type="text" name="SearchDualList" class="form-control" placeholder="search" />
                                <div class="input-group-append">
                                    <a class="input-group-text btn btn-default selector" title="select all">
                                        <i class="far fa-square"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ul class="list-group in_role" style="max-height: 250px; overflow-y: scroll;"></ul>
                    </div>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex sm2 md2>
            <v-btn color="primary" fab dark small px5>
                <v-icon>chevron_left</v-icon>
            </v-btn>
            <br />
            <v-btn color="primary" fab dark small px5>
                <v-icon>chevron_right</v-icon>
            </v-btn>
        </v-flex>

        <v-flex sm5 md5>
            <v-card>
                <v-card-title class="black--text pa-3">
                    <h4>Available Menu's</h4>
                </v-card-title>
                <v-card-text>
                    <div class="dual-list list-right col-md-5">
                        <div class="row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <a class="input-group-text btn btn-default selector" title="select all">
                                        <i class="far fa-square"></i>
                                    </a>
                                </div>
                                <input type="text" name="SearchDualList" class="form-control" placeholder="search" />
                                <div class="input-group-append">
                                    <span class="input-group-text fa fa-search"></span>
                                </div>
                            </div>
                        </div>
                        <ul class="list-group available_users" style="max-height: 250px; overflow-y: scroll;">

                        </ul>
                    </div>
                </v-card-text>
            </v-card>
        </v-flex> -->
        <div class="main-container">

            <div class="row">
                <div class="dual-list list-left col-md-5">
                    <div class="jumbotron">
                        <p class="text-center"><strong id="usersTitle"> Role Permissions </strong></p>

                        <div class="row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-search"></span>
                                </div>
                                <input type="text" name="SearchDualList" class="form-control" placeholder="search" />
                                <div class="input-group-append">
                                    <a class="input-group-text btn btn-default selector" title="select all">
                                        <i class="far fa-square"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ul class="list-group in_role" style="max-height: 250px; overflow-y: scroll;"></ul>
                    </div>
                </div>

                <div class="list-arrows col-md-1 text-center">
                    <button class="btn bg-blue btn-sm move-left">
                        <span class="fas fa-chevron-left"></span>
                    </button>

                    <button class="btn bg-blue btn-sm move-right">
                        <span class="fas fa-chevron-right"></span>
                    </button>
                </div>

                <div class="dual-list list-right col-md-5">
                    <div class="jumbotron">
                        <p class="text-center"><strong> Available Menu's </strong></p>
                        <div class="row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <a class="input-group-text btn btn-default selector" title="select all">
                                        <i class="far fa-square"></i>
                                    </a>
                                </div>
                                <input type="text" name="SearchDualList" class="form-control" placeholder="search" />
                                <div class="input-group-append">
                                    <span class="input-group-text fa fa-search"></span>
                                </div>
                            </div>
                        </div>
                        <ul class="list-group available_users" style="max-height: 250px; overflow-y: scroll;">

                        </ul>
                    </div>
                </div>
            </div>

            <div class="container-controls float-right">
                <button id="updatePermissions" name="updatePermissions" type="button" class="btn btn-info text-center"> Update Permissions </button>
            </div>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    var requestInit = {
        mode: "cors",
        method: "GET",
        cache: "no-cache",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": 'Token ' + sessionStorage.getItem('id_token')
        }
    };
    import VWidget from '../components/VWidget';
    export default {
        components: {
            VWidget
        },
        data: () => ({
            userRoles: [],
            selectedRole: null,
        }),
        computed: {},
        methods: {
            getPermissions() {
                alert(2);
                console.log(this.$data.selectedRole);
            }
        },
        created() {
            var myRequest = new Request('/graphql?query=query {getUserRoles{id, name, userCount, created_at}}', requestInit);
            return fetch(myRequest)
                .then(res => res.json())
                .then(json => this.$data.userRoles = json.data.getUserRoles)
                .catch(err => this.$store.commit('Snackbar', {color: 'error', text: 'An error occurred while retrieving registered Roles. Kindly try again.', show: true}));
        }
    };
</script>

<style scoped>
    .dual-list .list-group {
            margin-top: 8px;
        }
        .list-left li, .list-right li {
            cursor: pointer;
        }
        .list-arrows {
            padding-top: 100px;
        }
            .list-arrows button {
                margin-bottom: 20px;
            }
</style>
