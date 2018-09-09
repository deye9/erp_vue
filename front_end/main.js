import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';
import 'font-awesome/css/font-awesome.css';
import './theme/default.css';
//import './theme/default.styl';
import VeeValidate from 'vee-validate';
import colors from 'vuetify/es5/util/colors';
import Truncate from 'lodash.truncate';
import VueResource from 'vue-resource';

Vue.config.devtools = true;
Vue.config.productionTip = false;

// Global filters
Vue.filter('truncate', Truncate);
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
Vue.http.headers.common['Access-Control-Request-Method'] = '*';
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://erp.dev';
Vue.http.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('id_token');
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');

// Bootstrap application components
export default Vue;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
});
