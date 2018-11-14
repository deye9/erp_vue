<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12 md6 sm6>
          <v-widget title="Roles">
            <div slot="widget-header-action">
                <v-btn fab dark small color="indigo" @click="registerRole" :loading="loading">
                    <v-icon>add</v-icon>
                </v-btn>
            </div>
            <div slot="widget-content">
              <v-alert type="success" :value="true">
                This is a success alert.
              </v-alert>
              <v-alert type="info" :value="true">
                This is a info alert.
              </v-alert>
              <v-alert type="warning" :value="true">
                This is a warning alert.
              </v-alert>
              <v-alert type="error" :value="true">
                This is a error alert.
              </v-alert>
            </div>
          </v-widget>
        </v-flex>
        <v-flex sm12 md6 sm6>
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    import { Items as Users } from '../api/user';
    import VWidget from '../components/VWidget';
    export default {
        components: {
            VWidget
        },
        data() {
            return {
                alert: {
                    showSuccess: true,
                    showError: true,
                    showWarnning: true,
                    showInfo: true
                },
                search: '',
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
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Action',
            value: ''
          },
        ],
        items: Users
      },
      basic: {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
            };
        },
        computed: {
            showReset: function() {
            return (
                (((this.alert.showSuccess === this.alert.showError) ===
                this.alert.showWarnning) ===
                this.alert.showInfo) ===
                false
            );
            }
        },
        methods: {
            registerRole() {
                alert("Register Roles");
            },
            setPermissions() {
                alert("Set Permissions");
            },
            registerUsers() {
                alert("Register Users");
            }
        },
        created() {
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
        },
        mounted() {
            alert('mounted');
        }
    };
</script>
