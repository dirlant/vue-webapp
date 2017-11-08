<template>
    <div id="restaurant">
      <ol>
        <li v-for="restaurante in restaurantes">
          {{ restaurante.id }} - {{ restaurante.nombre}}
          <p>
            <router-link :to="{name: 'restaurant-detail', params: {id: restaurante.id }}">ver </router-link>
              &nbsp;&nbsp;
            <router-link :to="{name: 'restaurant-edit', params: {id: restaurante.id }}">editar </router-link>
          </p>
          <div v-if="borrar != restaurante.id">
            <a  v-on:click="deleteRestaurant(restaurante.id)"> eliminar </a>            
          </div>
          <div v-else>
            <span>¿Esta seguro que desea eliminarlo?</span>
            <p>
              <button v-on:click="noConfirm()"> cancelar </button>  
              <button v-on:click="confirm(restaurante.id)"> confirmar </button>            
            </p>
          </div>
          
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
      borrar: null,
      
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
    },
    deleteRestaurant(id){
      this.borrar = id;
    },
    confirm(id){
      axios.get('http://localhost/keySystems/rest/api-rest/restaurantes-api.php/delete-restaurante/'+ id)
        .then((res) => {        
          console.log(res);
          this.getRestaurant();      
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
    noConfirm(){
      this.borrar = null;
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