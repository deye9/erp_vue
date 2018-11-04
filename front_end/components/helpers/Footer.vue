<template>
    <div>
        <v-pagination v-model="page" :length="paginationLength" circle :total-visible="totalVisible" v-show="displayPagination"></v-pagination>

        <v-btn :color="saveClass" dark @click="addRecord" v-show="displaySave">
            {{saveName}}
            <v-icon dark right>{{saveIcon}}</v-icon>
        </v-btn>

        <v-btn :color="deleteClass" dark @click="deleteRecord" v-show="displayDelete">
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
            saveName: {
                type: String,
                default: 'Register'
            },
            saveIcon: {
                type: String,
                default: 'check_circle'
            },
            saveClass: {
                type: String,
                default: 'primary'
            },
            deferSave: {
                type: Boolean,
                default: false
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
            deferDelete: {
                type: Boolean,
                default: false
            },
            clearName: {
                type: String,
                default: 'Clear'
            },
            clearIcon: {
                type: String,
                default: 'remove_circle'
            },
            deferClear: {
                type: Boolean,
                default: false
            },
            dataset: {
                type: Object,
                default: null
            },
            totalVisible: {
                default: 7,
                type: Number
            },
            displaySave: {
                type: Boolean,
                default: false
            },
            displayDelete: {
                type: Boolean,
                default: false
            },
            displayClear: {
                type: Boolean,
                default: false
            },
            displayPagination: {
                type: Boolean,
                default: false
            },
            paginationLength: {
                default: 0,
                type: Number
            },
        },
        methods: {
            clearForm() {
                if (this.deferClear) {
                    this.$emit('clearDeferred');
                } else {
                    for (var key in this.dataset) {
                        this.dataset[key] = null;
                    }
                }
            },
            addRecord() {
                if (this.deferSave) {
                    this.$emit('saveDeferred');
                } else {
                    // for (var key in this.dataset) {
                    //     if (key !== 'currency')
                    //     {
                    //         this.dataset[key] = null;
                    //     } else {
                    //         this.dataset.currency = { name: 'Nigerian Naira', symbol: '₦' };
                    //     }
                    // }
                }
            },
            deleteRecord() {
                if (this.deferDelete) {
                    this.$emit('deleteDeferred');
                } else {
                    // for (var key in this.dataset) {
                    //     if (key !== 'currency')
                    //     {
                    //         this.dataset[key] = null;
                    //     } else {
                    //         this.dataset.currency = { name: 'Nigerian Naira', symbol: '₦' };
                    //     }
                    // }
                }
            }
        }
    }
</script>
