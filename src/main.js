import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Restaurant from './Restaurant.vue'
import Top from './Top.vue'
import Contact from './Contact.vue'

Vue.component('home', Home);
Vue.component('restaurant', Restaurant);
Vue.component('top', Top);
Vue.component('contact', Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})
