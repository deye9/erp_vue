<template>
    <div id="page-alerts">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg12>
                    <v-widget title="Branch Offices...">
                        <div slot="widget-content">
                            <v-layout wrap justify-space-around align-center class="ma-0">
                                <v-form v-model="valid" ref="form" lazy-validation>
                                    <v-layout row wrap>
                                        <v-flex lg12 sm12>
                                            <v-text-field label="Title" name="title" placeholder="Enter Title" v-model="title"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-menu
                                            class="pr-2"
                                            ref="statDate"
                                            lazy
                                            :close-on-content-click="false"
                                            v-model="startDateMenu"
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            :nudge-bottom="-22"
                                            max-width="290px"
                                            :return-value.sync="startDate"
                                            >
                                            <v-text-field
                                                slot="activator"
                                                label="Start Date"
                                                v-model="startDate"
                                                append-icon="event"
                                                readonly
                                            ></v-text-field>
                                            <v-date-picker v-model="startDate" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="startDateMenu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.statDate.save(startDate)">OK</v-btn>
                                            </v-date-picker>
                                            </v-menu>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-menu
                                            ref="startTime"
                                            lazy
                                            :close-on-content-click="false"
                                            v-model="startTimeMenu"
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            :nudge-bottom="-24"
                                            max-width="290px"
                                            :return-value.sync="startTime"
                                            >
                                            <v-text-field
                                                slot="activator"
                                                label="Start Time"
                                                v-model="startTime"
                                                append-icon="access_time"
                                                readonly
                                            ></v-text-field>
                                            <v-time-picker v-model="startTime">
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="startTimeMenu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.startTime.save(startTime)">OK</v-btn>
                                            </v-time-picker>
                                            </v-menu>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-menu
                                            ref="endDate"
                                            lazy
                                            class="pr-2"
                                            :close-on-content-click="false"
                                            v-model="endDateMenu"
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            :nudge-bottom="-22"
                                            min-width="290px"
                                            :return-value.sync="endDate"
                                            >
                                            <v-text-field
                                                slot="activator"
                                                label="End Date"
                                                v-model="endDate"
                                                append-icon="event"
                                                readonly
                                            ></v-text-field>
                                            <v-date-picker v-model="endDate" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="endDateMenu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.endDate.save(endDate)">OK</v-btn>
                                            </v-date-picker>
                                            </v-menu>
                                        </v-flex>
                                        <v-flex sm6 lg6>
                                            <v-menu
                                            ref="endTime"
                                            lazy
                                            :close-on-content-click="false"
                                            v-model="endTimeMenu"
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            :nudge-bottom="-24"
                                            max-width="290px"
                                            :return-value.sync="endTime"
                                            >
                                            <v-text-field
                                                slot="activator"
                                                label="End Time"
                                                v-model="endTime"
                                                append-icon="access_time"
                                                readonly
                                            ></v-text-field>
                                            <v-time-picker v-model="endTime" >
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="endTimeMenu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.endTime.save(endTime)">OK</v-btn>
                                            </v-time-picker>
                                            </v-menu>
                                        </v-flex>
                                        <v-flex lg12 sm12>
                                            <v-text-field textarea label="Description">

                                            </v-text-field>
                                        </v-flex>
                                        <v-spacer></v-spacer>
                                        </v-layout>
                                    </v-form>
                            </v-layout>
                        </div>
                    </v-widget>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import VWidget from '../components/VWidget';
    export default {
    components: {
        VWidget
    },
    data: () => ({
        messages: [
        {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'John Leider',
            title: 'Welcome to Vuetify.js!',
            excerpt: 'Thank you for joining our community...'
        },
        {
            color: 'red',
            icon: 'people',
            name: 'Social',
            new: 1,
            total: 3,
            title: 'Twitter'
        },
        {
            color: 'teal',
            icon: 'local_offer',
            name: 'Promos',
            new: 2,
            total: 4,
            title: 'Shop your way',
            exceprt: 'New deals available, Join Today'
        }
        ],
        slider: 56,
        tile: false,
        lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
    }),
    computed: {
        avatarSize () {
        return `${this.slider}px`;
        }
    },
    methods: {
    }
    };
</script>
