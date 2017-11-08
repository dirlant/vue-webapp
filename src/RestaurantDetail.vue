<template>
    <div>
      {{ texto }} - {{ id }} - {{ restaurante }}   
      <p v-for="(value, key) in restaurante">
        {{  key }} - {{ value }}
      </p>   
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'restaurant-detail',
  mounted(){
    this.id = this.$route.params.id;
    axios.get('http://localhost/keySystems/rest/api-rest/restaurantes-api.php/restaurante/'+ this.id)
      .then((res) => {        
        this.restaurante = res.data.data;              
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data () {
    return {
      texto: 'Esto es el DETALLE DEL RESTAURANTE',
      id: null,
      restaurante: null,
    }
  },
  methods: {
      
  }
}
</script>

<style lang="scss">

</style>