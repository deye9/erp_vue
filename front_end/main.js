import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import axios from 'axios';
import './theme/default.css';
import Vuetify from 'vuetify';
import router from './router';
import VueApollo from "vue-apollo";
//import './theme/default.styl';
import VeeValidate from 'vee-validate';
import Truncate from 'lodash.truncate';
import VueResource from 'vue-resource';
import ApolloClient from "apollo-boost";
import 'font-awesome/css/font-awesome.css';
import colors from 'vuetify/es5/util/colors';

Vue.config.devtools = true;
Vue.config.productionTip = false;

// Global filters
window.axios = axios;
Vue.filter('truncate', Truncate);
Vue.use(Vuex);
Vue.use(VueApollo);
Vue.use(VueResource);
Vue.use(VeeValidate, { fieldsBagName: 'formFields' });
Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.indigo.base, // #E53935
  //   secondary: colors.indigo.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});

Vue.http.options.crossOrigin = true;
// Vue.http.options.root = 'https://erp.dev/';
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://erp.dev';
//Vue.http.headers.common['Accept-Encoding'] = 'gzip';
Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.headers.common['Content-Type'] = 'application/json';
//Vue.http.headers.common['Access-Control-Request-Method'] = '*';
Vue.http.headers.common['Authorization'] = 'Token ' + sessionStorage.getItem('id_token');
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');

// Bootstrap application components
export default Vue;

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        status: '',
        message: '',
        snack: {
            show: false,
            text: '',
            color: '',
        },
        tenant: tenant
    },
    mutations: {
        Snackbar (state, payload) {
            state.snack.show = true;
            state.snack.text = payload.text;
            state.snack.color = payload.color;
        },
        updatetenant (state, payload) {
            state.tenant.logo = payload.logo;
            state.tenant.name = payload.companyname;
        },
        response (state, payload) {
          state.message = payload.message;
          state.status = payload.status.toLowerCase();
          // Automatically Load the notification page whenever called.
          // app.setActiveView('notification');
          //appData.activeview = 'notification';
        }
    }
});

const apolloProvider = new VueApollo({
    defaultClient: new ApolloClient({
        uri: "/graphql"
    }),
    defaultOptions: {
        // apollo options applied to all queries in components
        $query: {
            loadingKey: 'loading',
            fetchPolicy: 'cache-and-network',
        },
    },
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router: router,
    apolloProvider,
    components: { App },
    template: '<App/>',
    apollo: {
        // Apollo specific options
    },
});
