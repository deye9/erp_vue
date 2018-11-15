<template>
    <v-item-group>
        <v-container grid-list-md fluid>
            <v-layout wrap>
                <v-flex xs12 md2>
                    <v-item>
                        <v-card xs12 md4 slot-scope="{ active, toggle }" class="d-flex align-center" dark height="200">
                        </v-card>
                    </v-item>
                </v-flex>
                <v-flex xs12 md4>
                    <v-item>
                        <v-card xs12 md4 slot-scope="{ active, toggle }" class="d-flex align-center" dark height="200">
                        </v-card>
                    </v-item>
                </v-flex>
                <v-flex xs12 md6>
                    <v-item>
                        <v-card xs12 md4 slot-scope="{ active, toggle }" class="d-flex align-center" dark height="200">
                        </v-card>
                    </v-item>
                </v-flex>
            </v-layout>
        </v-container>
  </v-item-group>
  <!-- <v-item-group>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex
          v-for="n in 3"
          :key="n"
          xs12
          md4
        >
          <v-item>
            <v-card
              slot-scope="{ active, toggle }"
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click.native="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 text-xs-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group> -->
</template>

<script>
    import VWidget from '../components/VWidget';
    export default {
        components: {
            VWidget
        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        }
    };
</script>
