<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-flex lg12 v-show="!isNew">
                <v-card>
                    <v-toolbar card color="white">
                        <v-text-field flat solo prepend-icon="search" placeholder="Type something" v-model="search" hide-details class="hidden-sm-and-down" clearable></v-text-field>
                        <v-btn dark color="primary" @click="addNewUser">
                            Add New
                            <v-icon dark>add</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-card-text class="pa-0">
                        <v-data-table :headers="complex.headers" :search="search" :items="complex.items" :rows-per-page-items="[10,25,50,{text:'All','value':-1}]" class="elevation-1" item-key="name"
                        select-all v-model="complex.selected">
                            <template slot="items" slot-scope="props">
                                <td>
                                <v-checkbox primary hide-details v-model="props.selected"></v-checkbox>
                                </td>
                                <td>
                                    <v-avatar size="32">
                                    <img :src="props.item.avatar" alt="">
                                    </v-avatar>
                                </td>
                                <td>{{ props.item.name }}</td>
                                <td>{{ props.item.email }}</td>
                                <td>{{ props.item.jobTitle }}</td>
                                <td>{{ props.item.phone }}</td>
                                <td>
                                    <v-btn depressed outline icon fab dark color="primary" small>
                                    <v-icon>edit</v-icon>
                                    </v-btn>
                                    <v-btn depressed outline icon fab dark color="pink" small>
                                    <v-icon>delete</v-icon>
                                    </v-btn>
                                </td>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <v-widget title="User Details" v-show="isNew">
                    <div slot="widget-header-action">
                        <img :src="logo" class="img-responsive center-block" :alt="user.name" :title="user.name" style="width:36px;height:36px;">
                    </div>
                    <div slot="widget-content">
                        <div class="row">
                            <div class="col-4"> ID: </div>
                            <div class="col-8"> {{user.id}} </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-4"> Full Name: </div>
                            <div class="col-8"> {{user.name}} </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-4"> Job Title: </div>
                            <div class="col-8"> {{user.jobTitle}} </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-4"> Marital Status: </div>
                            <div class="col-8"> {{user.marital}} </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-4"> E-mail Address: </div>
                            <div class="col-8"> {{user.email}} </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-6"> Employment Status: </div>
                            <div class="col-6"> {{user.status}} </div>
                        </div>
                    </div>
                </v-widget>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <v-widget title="User Picture" v-show="isNew">
                    <div slot="widget-content">
                        <img :src="logo" class="img-responsive center-block" alt="Logo holder" style="width:200px;height:260px;" id="imgPreview" name="imgPreview">
                    </div>
                </v-widget>
            </v-flex>
            <v-flex sm12 md6 sm6 v-show="isNew">
                <v-widget title="Roles">
                    <div slot="widget-header-action">
                        <v-btn fab dark small color="indigo">
                            <v-icon>add</v-icon>
                        </v-btn>
                    </div>
                    <div slot="widget-content">
                    <v-alert color="success" icon="new_releases" :value="true">
                        This is a success alert with a custom icon.
                    </v-alert>
                    <v-alert color="warning" :value="true" icon="message">
                        This is a warning alert with a custom icon.
                    </v-alert>
                    <v-alert color="info" icon="star" :value="true">
                        This is a info alert with a custom icon.
                    </v-alert>
                    <v-alert color="error" :value="true">
                        This is an error alert with no icon.
                    </v-alert>
                    </div>
                </v-widget>
            </v-flex>
            <v-flex lg12 v-show="isNew">
                <v-widget title="Permissions">
                    <div slot="widget-header-action">
                        <v-btn fab dark small color="indigo">
                            <v-icon>add</v-icon>
                        </v-btn>
                    </div>
                    <div slot="widget-content">
                        <v-flex lg12>
                             <v-card>
                    <v-toolbar card color="white">
                        <v-text-field flat solo prepend-icon="search" placeholder="Type something" v-model="search" hide-details class="hidden-sm-and-down" clearable></v-text-field>
                        <v-btn dark color="primary" @click="addNewUser">
                            Add New
                            <v-icon dark>add</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-card-text class="pa-0">
                        <v-data-table :headers="complex.headers" :search="search" :items="complex.items" :rows-per-page-items="[10,25,50,{text:'All','value':-1}]" class="elevation-1" item-key="name"
                        select-all v-model="complex.selected">
                            <template slot="items" slot-scope="props">
                                <td>
                                <v-checkbox primary hide-details v-model="props.selected"></v-checkbox>
                                </td>
                                <td>
                                    <v-avatar size="32">
                                    <img :src="props.item.avatar" alt="">
                                    </v-avatar>
                                </td>
                                <td>{{ props.item.name }}</td>
                                <td>{{ props.item.email }}</td>
                                <td>{{ props.item.jobTitle }}</td>
                                <td>{{ props.item.phone }}</td>
                                <td>
                                    <v-btn depressed outline icon fab dark color="primary" small>
                                    <v-icon>edit</v-icon>
                                    </v-btn>
                                    <v-btn depressed outline icon fab dark color="pink" small>
                                    <v-icon>delete</v-icon>
                                    </v-btn>
                                </td>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
                        </v-flex>
                    </div>
                </v-widget>
            </v-flex>
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
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": 'Token ' + sessionStorage.getItem('id_token')
        }
    };
    import VWidget from '../components/VWidget';
    import { Items as Users } from '../api/user';
    export default {
        components: {
            VWidget
        },
        data () {
            return {
                user: {
                    id: 0,
                    sex: null,
                    name: null,
                    logo: null,
                    email: null,
                    status: null,
                    marital: null,
                    jobTitle: null,
                },
                search: '',
                isNew: false,
                complex: {
                    selected: [],
                    headers: [
                    {
                        text: 'Avatar',
                        value: 'avatar'
                    },
                    {
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: 'Email',
                        value: 'email'
                    },
                    {
                        text: 'Department',
                        value: 'department'
                    },
                    {
                        text: 'Phone',
                        value: 'phone'
                    },
                    {
                        text: 'Action',
                        value: ''
                    },
                    ],
                    items: Users
                }
            };
        },
        methods: {
            addNewUser() {
                this.$data.isNew = true;
            }
        },
        computed: {
            logo() {
                return (this.$data.user.logo === null) ? '/images/question_mark.svg' : this.$data.user.logo ;
            }
        },
        created() {
            var myRequest = new Request('/graphql?query=query {getRoles{id, name}}', requestInit);
            return fetch(myRequest)
                .then(res => res.json())
                .then(json => { console.log(json) })
                .catch(err => this.$store.commit('Snackbar', {color: 'error', text: 'An error occurred while setting up your profile. Kindly try again.', show: true}));
        }
    };
</script>
