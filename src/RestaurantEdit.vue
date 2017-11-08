<template>
    <div>
      <h3>{{ texto }} - {{ id }}</h3>
      <form v-on:submit.prevent="saveRestaurant()">
        <p>
          <label> Nombre: </label>
          <input type="text" v-model="restaurante.nombre"><br>
        </p>
        <p>
          <label>Direccion:</label>
          <input type="text" v-model="restaurante.direccion">
        </p>
        <p>
          <label>Descripción:</label>
          <input type="text" v-model="restaurante.descripcion">
        </p>
        <p>
          <label> Precio: </label>
          <select v-model="restaurante.precio">
            <option value="">Elije una opcion</option>
            <option value="bajo">bajo</option>
            <option value="normal">normal</option>
            <option value="alto">alto</option>
          </select>
        </p>
        <input type="submit" value="Guardar">
      </form>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'edit-restaurant',
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
      texto: 'Editando restaurante',
      id: null,
      restaurante : {
        nombre: 'nombre',
        direccion: 'direccion',
        descripcion: 'descripcion',
        precio: 'normal',
        imagen: '',
      }
    }
  },
  methods: {
    saveRestaurant(){
      console.log(this.restaurante);
      var id = this.id;
      var params = "json=" + JSON.stringify(this.restaurante);      
      axios.post('http://localhost/keySystems/rest/api-rest/restaurantes-api.php/update-restaurante/' + id, params)
      .then((res) => {        
        if(res.data.status == 'success'){
          this.$router.push('/restaurant-detail/'+ id);
        }    
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