import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import ProductComponent from './components/ProductComponent.vue';
import AboutComponent from './components/AboutComponent.vue'
import CartComponent from './components/CartComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import Vuex from "vuex"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    produitData: [],
    Macart: [],
    
  },
  mutations: {
    ListProduit(state) {
      axios.get("https://fakestoreapi.com/products").then(
          function (response) {
              state.produitData = response.data;
              //console.log(response.data);
          }.bind(this)
      );

  },
  AjoutCart(state,{pro}) {
      state.Macart.push(pro);
      console.log(pro);

  }
  }
})


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
  store,
  el: '#app',
  render: h => h(App)
})
