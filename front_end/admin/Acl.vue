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

                            <div px5 my4>
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
                                        <button class="btn move-left primary" fab dark small>
                                            <span class="fas fa-chevron-left"></span>
                                        </button>

                                        <button class="btn move-right primary" fab dark small>
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
                                            <!-- <ul class="list-group available_users" style="max-height: 250px; overflow-y: scroll;">

                                            </ul> -->
                                            <v-list dense expand style="max-height: 250px; overflow-y: scroll;">
                                                <template v-for="(item, i) in menus">
                                                    <!--group with subitems-->
                                                    <v-list-group v-if="item.items" :key="item.name" :group="item.group" :prepend-icon="item.icon" no-action="no-action">
                                                        <v-list-tile slot="activator" ripple="ripple">
                                                            <v-list-tile-content>
                                                                <v-list-tile-title>
                                                                    {{ item.title }}
                                                                </v-list-tile-title>
                                                            </v-list-tile-content>
                                                        </v-list-tile>
                                                        <template v-for="(subItem, i) in item.items">
                                                            <!--sub group-->
                                                            <v-list-group v-if="subItem.items" :key="subItem.name" :group="subItem.group" sub-group="sub-group">
                                                                <v-list-tile slot="activator" ripple="ripple">
                                                                    <v-list-tile-content>
                                                                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                                                    </v-list-tile-content>
                                                                </v-list-tile>
                                                                <v-list-tile v-for="(grand, i) in subItem.children" :key="i" :to="genChildTarget(item, grand)" :href="grand.href" ripple="ripple">
                                                                    <v-list-tile-content>
                                                                        <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                                                                    </v-list-tile-content>
                                                                </v-list-tile>
                                                            </v-list-group>
                                                            <!--child item-->
                                                            <v-list-tile @click.prevent="toggle($event, subItem)" v-else :key="i" :to="genChildTarget(item, subItem)" :href="subItem.href" :disabled="subItem.disabled" :target="subItem.target" ripple="ripple">
                                                                <v-list-tile-action style="margin-top:12px;">
                                                                    <v-checkbox></v-checkbox>
                                                                </v-list-tile-action>
                                                                <v-list-tile-content>
                                                                    <v-list-tile-title><span>{{ subItem.title }}</span></v-list-tile-title>
                                                                </v-list-tile-content>
                                                                <v-list-tile-action v-if="subItem.action">
                                                                    <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                                                                </v-list-tile-action>
                                                            </v-list-tile>
                                                        </template>
                                                    </v-list-group>
                                                    <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
                                                    <v-divider v-else-if="item.divider" :key="i"></v-divider>
                                                    <!--top-level link-->
                                                    <v-list-tile @click.prevent="toggle($event, item)" v-else :to="!item.href ? { name: item.name } : null" :href="item.href" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="item.name">
                                                        <v-list-tile-action style="margin-top:12px;">
                                                            <v-checkbox></v-checkbox>
                                                        </v-list-tile-action>
                                                        <v-list-tile-action v-if="item.icon">
                                                            <v-icon>{{ item.icon }}</v-icon>
                                                        </v-list-tile-action>
                                                        <v-list-tile-content>
                                                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                                        </v-list-tile-content>
                                                        <v-list-tile-action v-if="item.subAction">
                                                            <v-icon class="success--text">{{ item.subAction }}</v-icon>
                                                        </v-list-tile-action>
                                                    </v-list-tile>
                                                </template>
                                            </v-list>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": 'Token ' + sessionStorage.getItem('id_token')
        }
    };
    import menu from '../api/menu';
    import VWidget from '../components/VWidget';

    export default {
        components: {
            VWidget,
        },
        data: () => ({
            menus: menu,
            userRoles: [],
            selectedRole: null,
        }),
        computed: {},
        methods: {
            toggle (_item) {
                console.log(_item);
                event.cancelBubble = true;
                event.preventDefault();
                event.stopPropagation();
                //
                // const i = this.selected.indexOf(index)

                // if (i > -1) {
                //     this.selected.splice(i, 1)
                // } else {
                //     this.selected.push(index)
                // }
            },
            getPermissions() {
                console.log(this.$data.selectedRole);
            },
            genChildTarget (item, subItem) {
                if (subItem.href) return;

                if (subItem.component) {
                    return {
                        name: subItem.component,
                    };
                }
                return { name: `${item.group}/${(subItem.name)}` };
            },
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
