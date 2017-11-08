import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Restaurant from './Restaurant.vue'
import Top from './Top.vue'
import Contact from './Contact.vue'

Vue.use(VueRouter);

const routes = [
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
