<template>
  <div id="app">
    <img src="./assets/logo.png" width="100">
    <h1>{{ msg }}</h1>
    <!--
    <home></home>
    <restaurant></restaurant>
    <top></top>
    <contact></contact>
    -->
    
    
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/restaurant-add">Agregar</router-link></li>
      <li><router-link to="/restaurants">Restaurantes</router-link></li>
      <li><router-link :to="{name:  'top', params: {id: 16}}">Destacados</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>      
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Esto es la App',
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
