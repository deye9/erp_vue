<template>
  <div id="page-steppers">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-stepper v-model="step">
            <v-stepper-header>
                <v-stepper-step step="1" :complete="step > 1">
                    Company Details
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" :complete="step > 2">
                    Theme Settings
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">
                    Official Documents
                </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <label for="companyname" class="col-4 col-form-label"> Company Name <i style="color:red;">*</i> </label>
                            <div class="col-8">
                                <input id="companyname" name="companyname" v-model="registration.companyname" placeholder="Company Name" class="form-control" required="required" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="catchphase" class="col-4 col-form-label"> Catch Phase </label>
                            <div class="col-8">
                                <input id="catchphase" name="catchphase" v-model="registration.catchphase" placeholder="Catch Phase" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-4 col-form-label"> Official Email <i style="color:red;">*</i> </label>
                            <div class="col-8">
                                <input id="email" name="email" placeholder="Email" v-model="registration.email" class="form-control" required="required" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="website" class="col-4 col-form-label"> Website </label>
                            <div class="col-8">
                                <input id="website" name="website" placeholder="Website" v-model="registration.website" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="publicinfo" class="col-4 col-form-label"> Public Info </label>
                            <div class="col-8">
                                <textarea id="publicinfo" placeholder="Public Info" name="publicinfo" v-model="registration.publicinfo" cols="40" rows="4" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="LogoUpload" class="col-4 col-form-label"> Logo </label>
                            <div class="col-8 input-group mb-3 upload-wrapper">
                                <div class="input-group-prepend">
                                    <div class="float-left previewImg">
                                        <img :src="logo" class="img-responsive center-block" alt="Logo holder" style="width:36px;height:36px;" id="imgPreview" name="imgPreview">
                                    </div>
                                    &nbsp;&nbsp;
                                    <span class="input-group-text">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                </div>
                                <input type="text" id="fake_input" class="form-control form-style-fake" placeholder="Choose your Logo" readonly>
                                <input type="file" v-on:change="onLogoChange" class="form-control" accept="image/*" id="LogoUpload" name="LogoUpload">

                                <div class="float-right">
                                    <button class="btn btn-success btn-block" @click="upload">Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <theme-settings v-on:ColorOptions="getColorOptions"></theme-settings>
                <v-btn color="primary" @click.native="step = 1"> Previous </v-btn>
                <v-btn color="primary" @click.native="step = 3"> Continue </v-btn>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="primary" @click.native="step = 2"> Previous</v-btn>
                <v-btn color="primary" @click="submit">Save</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        <br/>
        Debug: {{metadata}}

        <br />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    import gql from 'graphql-tag';
    import VWidget from '../components/VWidget';
    import ThemeSettings from '../components/ThemeSettings';
    export default {
        apollo: {
            // Query with parameters
            registration() {
                return {
                    query: gql`query getCompanyProfile($details: String!) { registration(key: $details) { id, value }}`,
                    variables() {
                        return {
                            details: "Company Profile",
                        }
                    },
                    update(data) {
                        this.$data.id = data.registration.id;
                        return JSON.parse(data.registration.value)
                    },
                    error(error) {
                        this.$store.commit('Snackbar', {color: 'red', text: 'We\'ve got an error!\n' + error, show: true});
                    },
                }
            },
        },
        components: {
            VWidget,
            ThemeSettings
        },
        data: () => ({
            id: 0,
            step: 1,
            registration: {
                logo: null,
                email: null,
                website: null,
                logourl: null,
                publicinfo: null,
                catchphase: null,
                companyname: null,
                theme: {
                    themeColor: null,
                    sideBarOption: null,
                },
            }
        }),
        computed:  {
            logo() {
                return '/images/question_mark.svg';
            },
            tenant() {
                return this.$store.state.tenant;
            }
        },
        methods:{
            // Triggered when `ColorOptions` event is emitted by the child.
            getColorOptions (value) {
                this.registration.theme.themeColor = value.themeColor;
                this.registration.theme.sideBarOption = value.sideBarOption;
            },
            onLogoChange(e) {
                var Rlogo = this.$data.registration;
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                var file = files[0];
                var allowed_mimeTypes = "image/";
                var file_type = file.type.split('/')[0] + "/";
                if (allowed_mimeTypes.toLowerCase().indexOf(file_type) === -1)
                {
                    this.$store.commit('Snackbar', {color: 'red', text: 'Only Image file formats are allowed.', show: true});
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function(event) {
                    var logo = document.getElementById('imgPreview');
                    logo.style.width = '36px';
                    logo.style.height = '36px';
                    logo.src = event.target.result;
                    Rlogo.logo = event.target.result;
                }.bind(Rlogo);
            },
            upload() {
                if (this.$data.registration.logo !== null)
                {
                    axios.post('/api/base64upload', {image: this.$data.registration.logo})
                        .then(response => {
                            if (response.data.success) {
                                this.registration.logourl = response.data.filename;
                                this.$store.commit('updatetenant', this.$data.registration);
                                this.$data.registration.logo = null;
                                this.$store.commit('Snackbar', {color: 'blue', text: response.data.success, show: true});
                            }
                        }
                    );
                } else {
                    this.$store.commit('Snackbar', {color: 'red', text: 'Kindly select a valid image to upload.', show: true});
                }
            },
            submit() {
                // mutation { updateMetadata(input: {id: "14", key: "Company Profile"}) { id, key, value }}
                // We save the user input in case of an error
                const newTag = this.newTag;

                // We clear it early to give the UI a snappy feel
                this.newTag = '';

                // Call to the graphql mutation
                this.$apollo.mutate({
                    // Mutation Query
                    mutation: gql`mutation($label: CreateMetadataInput!) { createMetadata(input: $label) { id, key, value } }`,
                    // Parameters
                    variables: {
                        label: {key: "Company Profile", value: JSON.stringify(this.$data.registration)}
                    },
                    // // Update the cache with the result
                    // // The query will be updated with the optimistic response and then with the real result of the mutation
                    // update: (store, { data: { newTag } }) => {
                    //     // Read the data from our cache for this query.
                    //     const data = store.readQuery({ query: TAGS_QUERY })
                    //     // Add our tag from the mutation to the end
                    //     data.tags.push(newTag)
                    //     // Write our data back to the cache.
                    //     store.writeQuery({ query: TAGS_QUERY, data })
                    // },

                    // Optimistic UI
                    // Will be treated as a 'fake' result as soon as the request is made so that the UI can react quickly and the user be happy
                    optimisticResponse: {
                        __typename: 'Mutation',
                        createMetadata: {
                            id: 1,
                            key: 'Company Profile',
                            value: '',
                            __typename: 'Registration',
                        },
                    },
                }).then((data) => {
                    this.$store.commit('Snackbar', {color: 'blue', text: 'Profile has been successfully setup.', show: true});
                }).catch((error) => {
                    this.$store.commit('Snackbar', {color: 'blue', text: 'An error occurred while setting up your profile. Kindly try again.', show: true});
                    // We restore the initial user input
                    this.newTag = newTag
                });
            //   if (this.$refs.form.validate()) {
            //     this.$store.commit('Snackbar', {color: 'red', text: 'Data is valid.', show: true});
            //   }
            }
        },
    };
</script>

<style lang="stylus" scoped>
    .btn {
        line-height: 1.7;
    }

    .form-style-fake {
        top:0px;
        position:relative;
        height: calc(2.35rem + 4px);
    }

    .upload-wrapper {
        margin-top: 20px;
        overflow: hidden;
        position: relative;
    }

    .upload-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
</style>
