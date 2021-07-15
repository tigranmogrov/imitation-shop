import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/index.scss";

import dateFilter from '@/filters/roundingPrice';

Vue.filter('roundingPrice', dateFilter);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
