<template>
    <div>
        <v-pagination v-model="page" :length="paginationLength" :total-visible="totalVisible" @input="onpageChange" dark circle></v-pagination>

        <v-btn :color="saveClass" dark @click="$emit('saveDeferred');" v-show="displaySave">
            {{saveName}}
            <v-icon dark right>{{saveIcon}}</v-icon>
        </v-btn>

        <v-btn :color="deleteClass" dark @click="$emit('deleteDeferred');" v-show="displayDelete">
            {{deleteName}}
            <v-icon dark right>{{deleteIcon}}</v-icon>
        </v-btn>

        <v-btn dark @click="clearForm" v-show="displayClear">
            {{clearName}}
            <v-icon right>{{clearIcon}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    export default {
        props: {
            dataset: {
                type: Object,
                default: null
            },
            saveClass: {
                type: String,
                default: 'primary'
            },
            deleteName: {
                type: String,
                default: 'Delete'
            },
            deleteIcon: {
                type: String,
                default: 'delete'
            },
            deleteClass: {
                type: String,
                default: 'error'
            },
            clearName: {
                type: String,
                default: 'Clear'
            },
            clearIcon: {
                type: String,
                default: 'remove_circle'
            },
            displaySave: {
                type: Boolean,
                default: false
            },
            TotalRecords: {
                default: 0,
                type: Number
            }
        },
        data: () => ({
            page: 1,
            saveIcon: 'save',
            displayClear: false,
            displayDelete: false,
            saveName: 'Add Record'
        }),
        computed: {
            totalVisible() {
                if (this.TotalRecords <= 9) {
                    return this.TotalRecords;
                } else {
                    return 10;
                }
            },
            paginationLength() {
                return this.TotalRecords;
            }
        },
        methods: {
            clearForm() {
                this.$data.page = 1;
                this.$data.saveIcon = "save";
                this.$data.displayClear = false;
                this.$data.displayDelete = false;
                this.$data.saveName = "Add Record";
                if (this.deferClear) {
                    this.$emit('clearDeferred');
                } else {
                    for (var key in this.dataset) {
                        this.dataset[key] = null;
                    }
                }
            },
            onpageChange(pageNos) {
                this.$data.saveIcon = "update";
                this.$data.displayClear = true;
                this.$data.displayDelete = true;
                this.$emit('pageChanged', pageNos);
                this.$data.saveName = "Update Record";
            }
        },
    }
</script>
