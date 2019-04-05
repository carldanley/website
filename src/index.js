// external dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFlask, faTags } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Vue from 'vue';

// internal dependencies
import App from '@/App';
import router from '@/router';
import store from '@/state';

// add the css for highlightJS
import 'highlight.js/styles/androidstudio.css';

// add the font awesome icons
library.add(faFlask, faTwitter, faTags);

// register components
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
