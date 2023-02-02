import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
//import HomeComponent from './components/HomeComponent.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  //{ path: "/", name: 'home', component: HomeComponent },
  
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
