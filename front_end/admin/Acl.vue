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
                <v-alert outline color="success" icon="check_circle" :value="true">
                    This is a success alert.
                </v-alert>
                <v-alert outline color="info" icon="info" :value="true">
                    This is an info alert.
                </v-alert>
                <v-alert outline color="warning" icon="priority_high" :value="true">
                    This is a warning alert.
                </v-alert>
                <v-alert outline color="error" icon="warning" :value="true">
                    This is a error alert.
                </v-alert>
                </div>
            </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    import VWidget from "../components/VWidget";
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
