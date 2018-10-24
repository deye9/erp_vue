<template>
  <div id="page-steppers">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1"> Company Details </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2"> Setup branches </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3"> Official Documents </v-stepper-step>
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
                <p>
                    <button type="button" class="btn btn-primary float-right"> Register New Branch Office. </button>
                </p>
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
        </v-flex>
      </v-layout>
    </v-container>
  <br/>Debug: {{registration}}
  </div>
</template>

<script>
    import VWidget from '../components/VWidget';
    export default {
        components: {
            VWidget
        },
        data: () => ({
            step: 1,
            registration: {
                logo: null,
                email: null,
                website: null,
                publicinfo: null,
                catchphase: null,
                companyname: null,
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
                    alert("Only Image file formats are allowed.");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function(event) {
                    var logo = document.getElementById('imgPreview');
                    logo.style.width = '36px';
                    logo.style.height = '36px';
                    logo.src = event.target.result;
                    Rlogo.logo =  event.target.result;
                }.bind(Rlogo);
            },
            upload() {
                if (this.$data.registration.logo !== null)
                {
                    tenant.logo = this.$data.registration.logo;
                    axios.post('/api/base64upload', {image: this.$data.registration.logo})
                        .then(response => {
                            if (response.data.success) {
                                alert(response.data.success);
                            }
                        }
                    );
                } else {
                    alert('Kindly select a valid image to upload.');
                    // this.snackbar = {
                    //     show: true,
                    //     color: 'green',
                    //     text: 'Kindly select a valid image to upload.'
                    // };
                }
            },
            submit() {
              if (this.$refs.form.validate()) {
                alert('Data is valid');
              }
            }
        }
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
