import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'
import './pwa/registerServiceWorker'

console.log(VueFeather);

// Stylesheets
import './assets/scss/styles.scss';

// Global components
import VueResizable from 'vue-resizable'
import Scrollbar from './components/utils/Scrollbar'
import FlexBox from './components/utils/FlexBox'
import PerfectScrollbar from 'vue2-perfect-scrollbar'

Vue.config.productionTip = false

Vue.use(PerfectScrollbar)
Vue.use(VueFeather)

Vue.component('Resizable', VueResizable)
Vue.component(Scrollbar.name, Scrollbar)
Vue.component(FlexBox.name, FlexBox)

new Vue({
    router, store,
    render: h => h(App)
}).$mount('#app')
