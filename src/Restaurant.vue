<template>
    <div id="restaurant">
      <ol>
        <li v-for="(restaurante, index) in restaurantes">
          {{ restaurante.id }} - {{ restaurante.nombre}} - {{ restaurante.direccion}}
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

</style>