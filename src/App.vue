<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <!--
    <home></home>
    <restaurant></restaurant>
    <top></top>
    <contact></contact>
    -->
    <router-view></router-view>
    
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/restaurant">Restaurantes</router-link></li>
      <li><router-link :to="{name:  'top', params: {id: 16}}">Destacados</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Esto es la App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
