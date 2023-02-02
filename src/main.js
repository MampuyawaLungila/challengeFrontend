import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import ProductComponent from './components/ProductComponent.vue';
import AboutComponent from './components/AboutComponent.vue'
import CartComponent from './components/CartComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueRouter);


const routes = [
  { path: "/", name: 'home', component: HomeComponent },
  { path: "/product", name: 'product', component: ProductComponent },
  { path: "/About", name: 'about', component: AboutComponent },
  { path: "/Contact", name: 'contact', component: ContactComponent },
  { path: "/Cart", name: 'Cart', component: CartComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
