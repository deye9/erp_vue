<template>
  <div id="page-steppers">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group row">
                        <label for="companyname" class="col-4 col-form-label"> Company Name <i style="color:red;">*</i> </label>
                        <div class="col-8">
                            <input id="companyname" name="companyname" placeholder="Company Name" class="form-control" required="required" type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="catchphase" class="col-4 col-form-label"> Catch Phase </label>
                        <div class="col-8">
                            <input id="catchphase" name="catchphase" placeholder="Catch Phase" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-4 col-form-label"> Official Email <i style="color:red;">*</i> </label>
                        <div class="col-8">
                            <input id="email" name="email" placeholder="Email" class="form-control" required="required" type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="website" class="col-4 col-form-label"> Website </label>
                        <div class="col-8">
                            <input id="website" name="website" placeholder="Website" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="publicinfo" class="col-4 col-form-label"> Public Info </label>
                        <div class="col-8">
                            <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="publicinfo" class="col-4 col-form-label"> Logo </label>
                        <div class="col-8 input-group input-group-lg upload-wrapper">
                            <div class="input-group-prepend">
                                <div class="float-left previewImg">
                                    <img class="img-responsive center-block" id="imgPreview" src="/images/question_mark.svg" alt="Logo holder" style="width:36px;height:36px;" />
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="input-group-text">
                                    <i class="fas fa-upload"></i>
                                </span>
                            </div>
                            <input type="text" id="fake_input" class="form-control form-style-fake" style="width:60%;" placeholder="Choose your Logo" readonly>
                            <input type="file" id="LogoUpload" name="LogoUpload" accept="image/*" />
                        </div>
                    </div>
                </div>
            </div>
            <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
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
  data () {
    return {
      step: 1,
      e13: 1,
    };
  },
  computed: {
  },
  methods: {
  }
};

    $(document).ready(function() {
        // FileList object
        var files = "";

        $("#LogoUpload").change(function(evt) {
            var file = evt.target.files[0];
            var allowed_mimeTypes = "image/";
            var file_type = file.type.split('/')[0] + "/";
            if (allowed_mimeTypes.toLowerCase().indexOf(file_type) === -1)
            {
                alert("Only Image file formats are allowed.");
                $("#LogoUpload").val("");
                return false;
            }

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(event) {
                $('#imgPreview').attr('src', event.target.result);
                $('#imgPreview').attr('width', '36px');
                $('#imgPreview').attr('height', '36px');
            };
        });
    });
</script>

<style lang="stylus" scoped>
    .form-style-fake{position:relative;top:0px;width:90%;}

    .upload-wrapper {
        margin-top: 20px;
        overflow: hidden;
        position: relative;
    }

    .btn-upload {
        border: 2px solid gray;
        color: gray;
        background-color: white;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: bold;
        width: 100%;
    }

    .upload-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
</style>
