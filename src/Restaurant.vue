<template>
    <div id="restaurant">
      <ol>
        <li v-for="(restaurante, index) in restaurantes">
          {{ restaurante.id }} - {{ restaurante.nombre}}
          <p>
            <router-link :to="{name: 'restaurant', params: {id: restaurante.id }}">ver </router-link>
            <router-link :to="{name: 'edit-restaurant', params: {id: restaurante.id }}">editar </router-link>
          </p>
        </li>
      </ol>
    </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'restaurant',
  data () {
    return {
      texto: 'Esto es la RESTAURANT',
      restaurantes: null,
    }
  },
  mounted(){
    this.getRestaurant();
  },
  methods: {
    getRestaurant(){
      axios.get('http://localhost/keySystems/rest/api-rest/restaurantes-api.php/restaurantes')
        .then((res) => {        
          this.restaurantes = res.data.data;              
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss">
  #restaurant{
    padding: 5px;
    li{
      margin-top: 10px;
      width: 30%;
      height: 120px;
      border: 1px solid #000;
      border-radius: 5px;
      backgroung: #eee;
      padding: 20px;
      overflow: hidden;
    }

  }
</style>