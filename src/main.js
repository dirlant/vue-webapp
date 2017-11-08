import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Restaurant from './Restaurant.vue'
import Top from './Top.vue'
import Contact from './Contact.vue'
import RestaurantDetail from './RestaurantDetail.vue'
import RestaurantAdd from './RestaurantAdd.vue'
import RestaurantEdit from './RestaurantEdit.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/top/:id', name:'top' , component: Top},
  {path: '/restaurant-add/', name:'restaurant-add' , component: RestaurantAdd},
  {path: '/restaurant-edit/:id', name:'restaurant-edit' , component: RestaurantEdit},
  {path: '/restaurant-detail/:id', name:'restaurant-detail' , component: RestaurantDetail},
  {path: '/restaurants' , component: Restaurant},
  {path: '/contact' , component: Contact},
  {path: '/home' , component: Home},
  {path: '/' , component: Home},
];

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.component('home', Home);
Vue.component('restaurant', Restaurant);
Vue.component('top', Top);
Vue.component('contact', Contact);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
