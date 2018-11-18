<template>
    <v-container grid-list-md fluid>
        <v-layout align-center>
            <v-card sm4 md4 :height="getHeight" style="overflow: scroll;">
                <v-navigation-drawer permanent :height="getHeight">
                    <v-toolbar flat dense>
                        <v-list>
                            <v-list-tile>
                            <v-list-tile-title class="title">
                                Metadata Keys
                            </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-toolbar>

                    <v-list dense class="pt-0">
                        <template v-for="(key, index) in keys">
                            <v-list-tile :key="key.key" avatar ripple @click="GetValues(index)">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ key.key }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                    <v-divider></v-divider>

                    <v-toolbar flat style="position:fixed; bottom: 10px;">
                        <v-text-field label="Metadata key" v-model="newMeta" clearable></v-text-field>
                        <v-btn flat @click="saveMetadata" icon>
                            <v-icon color="blue">save</v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-navigation-drawer>
            </v-card>

            <div class="sm8 md8">
                <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
                    <v-item sm8 md8 v-for="n in length" :key="n">
                        <div slot-scope="{ active, toggle }">
                            <v-btn :input-value="active" icon @click="toggle">
                                <v-icon>mdi-record</v-icon>
                            </v-btn>
                        </div>
                    </v-item>
                </v-item-group>

                <v-flex>
                    <v-window v-model="window" class="elevation-1" vertical dark>
                    <v-window-item v-for="n in length" :key="n">
                        <v-card flat>
                            <v-card-text>
                                <v-layout align-center mb-3>
                                    <v-avatar color="grey" class="mr-3"></v-avatar>
                                    <strong class="title">Title {{ n }}</strong>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon>mdi-account</v-icon>
                                    </v-btn>
                                </v-layout>

                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    </v-window>
                </v-flex>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    var requestInit = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    };
    import VWidget from '../components/VWidget';
    export default {
        components: {
            VWidget
        },
        data: () => ({
            keys: [],
            length: 3,
            window: 0,
            newMeta: null,
            selected: null,
            currentValue: [],
        }),
        computed: {
            getHeight() {
                return screen.height - 350 + 'px';
            },
            async fetchKeys() {
                var myRequest = new Request("/graphql?query=query getall {getKeys{key}}", requestInit);
                return await fetch(myRequest)
                    .then(res => res.json())
                    .then(json => (this.keys = json.data.getKeys))
                    .catch(err => this.$store.commit('Snackbar', {color: 'blue', text: 'An error occurred while setting up your profile. Kindly try again.', show: true}));
            }
        },
        methods: {
            async GetValues(index) {
                this.$data.selected = this.keys[index].key;
                var myRequest = new Request('/graphql?query=query filter {filterbykey(key: "' + this.$data.selected + '"){id, value}}', requestInit);
                return await fetch(myRequest)
                    .then(res => res.json())
                    .then(json => { this.currentValue = json.data.filterbykey; this.length = this.currentValue.length;})
                    .catch(err => this.$store.commit('Snackbar', {color: 'error', text: 'An error occurred while setting up your profile. Kindly try again.', show: true}));
            },
            async saveMetadata() {
                if (this.$data.newMeta !== '' && this.$data.newMeta !== null) {
                    return await fetch('/graphql',
                    {
                        method: 'POST',
                        headers: { 'Accept': 'application/json', 'content-type': 'application/json' },
                        body: '{"query":"mutation { createMetadata(input: {key: \\"' + this.newMeta + '\\", value:\\"{\\\\\\"\\\\\\":\\\\\\"\\\\\\"}\\"}) { key }}"}'
                    })
                    .then(res => res.json())
                    .then(json => {
                        this.$data.keys.push(json.data.createMetadata);
                        this.$data.newMeta = null;
                    })
                    .catch(err => this.$store.commit('Snackbar', {color: 'blue', text: 'An error occurred while setting up your profile. Kindly try again.', show: true}));
                } else {
                    this.$store.commit('Snackbar', {color: 'red', text: 'Invalid Metadata supplied for Registration.', show: true});
                }
            }
        },
        created() {
            this.fetchKeys();
        }
    };
</script>
