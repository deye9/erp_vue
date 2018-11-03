<template>
    <div id="page-alerts">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg12>
                    <v-widget title="Branch Offices...">
                        <div slot="widget-header-action">
                            <v-btn fab dark small color="primary" @click="clearForm">
                                <v-icon>add</v-icon>
                            </v-btn>
                        </div>
                        <div slot="widget-content">
                            <v-layout wrap justify-space-around align-center class="ma-0">
                                <v-form ref="form" lazy-validation>
                                    <v-layout row wrap>
                                        <v-flex sm6 lg6>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <v-chip label>https://{{tenant.companyname}}_</v-chip>
                                                </div>
                                                <v-text-field :suffix="setDomain" label="Url" v-model="branch.branchCode" v-validate="'required'" data-vv-name="branchUrl" :error-messages="errors.collect('branchUrl')" required></v-text-field>
                                            </div>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-text-field label="Branch Name" v-model="branch.branchName" v-validate="'required'" data-vv-name="branchName" :error-messages="errors.collect('branchName')" required></v-text-field>
                                        </v-flex>

                                        <v-flex sm6 lg6>
                                            <!-- <v-combobox label="Parent Office" autocomplete :loading="loading" chips required :rules="[() => select.length > 0 || 'You must choose at least one']"
                                            :search-input.sync="search" :items="Currencies" v-model="ReportsTo" :error-messages="['Please select an option']" item-text="country" item-value="abbr"></v-combobox> -->
                                            <v-combobox label="Parent Office" autocomplete required :items="currencies" item-text="name" item-value="symbol" v-model="branch.ReportsTo"></v-combobox>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-combobox label="Currency"  autocomplete required :items="currencies" v-model="branch.currency" item-text="name" item-value="symbol"></v-combobox>
                                        </v-flex>

                                        <v-flex sm6 lg6>
                                            <v-text-field label="Email" v-validate="'required|email'" data-vv-name="email" :error-messages="errors.collect('email')" v-model="branch.email" required></v-text-field>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-text-field label="Phone" name="Phone" placeholder="+(###) ###-####-####" v-validate="'required'" data-vv-name="phone" :error-messages="errors.collect('phone')" v-model="branch.phone" return-masked-value mask="+(###) ###-####-####" required></v-text-field>
                                        </v-flex>

                                        <v-flex sm6 lg6>
                                            <v-text-field label="Country" v-validate="'required'" data-vv-name="country" :error-messages="errors.collect('country')" v-model="branch.country" required></v-text-field>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-text-field label="State" v-validate="'required'" data-vv-name="state" :error-messages="errors.collect('state')" v-model="branch.state" required></v-text-field>
                                        </v-flex>

                                        <v-flex sm6 lg6>
                                            <v-menu ref="startTime" :close-on-content-click="false" v-model="startTimeMenu" transition="scale-transition" offset-y full-width :nudge-bottom="-24" max-width="290px" :return-value.sync="branch.startTime">
                                            <v-text-field slot="activator" label="Resumption Time" v-model="branch.startTime" append-icon="access_time" readonly v-validate="'required'" data-vv-name="startTime" :error-messages="errors.collect('startTime')" required></v-text-field>
                                            <v-time-picker v-model="branch.startTime">
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="startTimeMenu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.startTime.save(branch.startTime)">OK</v-btn>
                                            </v-time-picker>
                                            </v-menu>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-menu ref="endTime" lazy :close-on-content-click="false" v-model="endTimeMenu" transition="scale-transition" offset-y full-width :nudge-bottom="-24" max-width="290px" :return-value.sync="branch.endTime">
                                            <v-text-field slot="activator" label="Closing Time" v-model="branch.endTime" append-icon="access_time" readonly v-validate="'required'" data-vv-name="endTime" :error-messages="errors.collect('endTime')" required></v-text-field>
                                            <v-time-picker v-model="branch.endTime" >
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="endTimeMenu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.endTime.save(branch.endTime)">OK</v-btn>
                                            </v-time-picker>
                                            </v-menu>
                                        </v-flex>
                                        </v-layout>
                                    </v-form>
                            </v-layout>
                        </div>
                        <div slot="widget-footer-action" class="float-right">
                            <v-pagination v-model="page" :length="paginationLength" circle total-visible="7"></v-pagination>
                            <v-btn color="primary" dark>
                                Register
                                <v-icon dark right>check_circle</v-icon>
                            </v-btn>
                            <v-btn color="error" dark>
                                Delete
                                <v-icon dark right>delete</v-icon>
                            </v-btn>
                            <v-btn dark @click="clearForm">
                                Cancel
                                <v-icon right>remove_circle</v-icon>
                            </v-btn>
                        </div>
                    </v-widget>
                </v-flex>
            </v-layout>
        </v-container>
<br />{{branch}}
    </div>
</template>

<script>
    import Currencies  from '../api/currencies';
    import VWidget from '../components/VWidget';

    export default {
        components: {
            VWidget
        },
        data: () => ({
            page: 1,
            branch: {
                phone: null,
                email: null,
                state: null,
                country: null,
                endTime: null,
                currency: null,
                officeID: null,
                ReportsTo: null,
                startTime: null,
                branchUrl: null,
                branchName: null,
            },
            modal: false,
            endTimeMenu: false,
            paginationLength: 0,
            startTimeMenu: false,
            currencies: Currencies,
        }),
        computed:  {
            tenant() {
                return this.$store.state.tenant
            },
            setDomain() {
                var str = window.location.hostname.split(".");
                return '.' + str.splice(1,2).join(".");
            },
        },
        methods: {
            closeDialog() {
                this.$parent.isActive = false;
            },
            clearForm() {
                alert(12);
            }
        },
    };
</script>
