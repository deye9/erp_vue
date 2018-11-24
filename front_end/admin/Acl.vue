<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12 md12>
            <v-widget title="Roles">
                <div slot="widget-content" style="max-height:150px; overflow:auto;">
                    <v-list two-line v-for="(role, index) in userRoles" :key="role.id">
                        <v-list-tile @click="toggle(index)">
                            <v-list-tile-action>
                                <v-checkbox></v-checkbox>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ role.name.toUpperCase() }}
                                </v-list-tile-title>
                                <v-list-tile-sub-title> Created On: {{ role.created_at }}. </v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                            <v-list-tile-action-text>{{role.userCount}} user(s)</v-list-tile-action-text>
                                <v-icon v-if="role.userCount < 0" color="red lighten-1">
                                    delete
                                </v-icon>

                                <v-icon v-else color="yellow darken-2">
                                    edit
                                </v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider></v-divider>
                    </v-list>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="roleName" placeholder="Enter Role Name" aria-label="Enter Role Name" aria-describedby="role-button">
                        <div class="input-group-append">
                            <button type="button" class="btn primary" id="role-button" @click="addRole" style="color:white;">Add Role</button>
                        </div>
                    </div>
                </div>
            </v-widget>
        </v-flex>
        <!-- <v-flex sm12 md6 sm6>
            <v-widget title="Permissions">
                <div slot="widget-header-action">
                    <v-btn fab dark small color="indigo" @click="setPermissions" :loading="loading">
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
        <v-flex lg12>
            <v-widget title="Users">
                <div slot="widget-header-action">
                    <v-btn fab dark small color="indigo" @click="registerUsers" :loading="loading">
                        <v-icon>add</v-icon>
                    </v-btn>
                </div>
                <div slot="widget-content">
                    <v-flex lg12>
                        <v-card>
                            <v-toolbar card color="white">
                            <v-text-field
                            flat
                            solo
                            prepend-icon="search"
                            placeholder="Type something"
                            v-model="search"
                            hide-details
                            class="hidden-sm-and-down"
                            ></v-text-field>
                            <v-btn icon>
                                <v-icon>filter_list</v-icon>
                            </v-btn>
                            </v-toolbar>
                            <v-divider></v-divider>
                            <v-card-text class="pa-0">
                            <v-data-table
                                :headers="complex.headers"
                                :search="search"
                                :items="complex.items"
                                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                                class="elevation-1"
                                item-key="name"
                                select-all
                                v-model="complex.selected">
                                <template slot="items" slot-scope="props">
                                <td>
                                <v-checkbox
                                    primary
                                    hide-details
                                    v-model="props.selected"
                                ></v-checkbox>
                                </td>
                                <td>
                                    <v-avatar size="32">
                                    <img :src="props.item.avatar" alt="">
                                    </v-avatar>
                                </td>
                                <td>{{ props.item.name }}</td>
                                <td>{{ props.item.email }}</td>
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
        </v-flex> -->
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
        data() {
            return {
                userRoles: [],
                roleName: null,
                selectedRoles: [],
            };
        },
        computed: {},
        methods: {
            async addRole() {
                if (this.$data.roleName !== null) {
                    return await fetch('/graphql',
                    {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json; charset=utf-8",
                            "Authorization": 'Token ' + sessionStorage.getItem('id_token')
                        },
                        body: '{"query":"mutation { createRole(input: {name: \\\"' + this.$data.roleName + '\\\"}) { id, created_at }}"}'
                    })
                        .then(res => res.json())
                        .then(json => {
                            this.$data.userRoles.push({
                                id: json.data.createRole.id,
                                userInRole: false,
                                name: this.$data.roleName,
                                created_at: json.data.createRole.created_at
                            });
                            this.$data.roleName = null;
                        })
                        .catch(err => this.$store.commit('Snackbar', {color: 'error', text: err, show: true}));
                } else {
                    this.$store.commit('Snackbar', {color: 'error', text: 'Role name cannot be empty.', show: true});
                }
            },
            toggle (index) {
                // const i = this.selected.indexOf(index)

                // if (i > -1) {
                //     this.selected.splice(i, 1)
                // } else {
                //     this.selected.push(index)
                // }
            }
        },
        created() {
            var myRequest = new Request('/graphql?query=query {getUserRoles{id, name, userCount, created_at}}', requestInit);
            return fetch(myRequest)
                .then(res => res.json())
                .then(json => this.$data.userRoles = json.data.getUserRoles)
                .catch(err => this.$store.commit('Snackbar', {color: 'error', text: 'An error occurred while setting up your profile. Kindly try again.', show: true}));

            // Issue a get command to get the roles and associated permissions.
            // query {acl{id,name,permissions{id,name,title,group,icon,component}}}

            // query acl {
            //   acl {
            //   	id
            //     name
            //     created_at
            //     updated_at
            //     permissions {
            //       id
            //       name
            //       title
            //       group
            //       icon
            //     }
            //   }
            // }
        }
    };
</script>
