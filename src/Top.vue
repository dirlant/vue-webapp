<template>
    <div>
      {{ texto }} - {{ id_top }}
    </div>
</template>


<script>
export default {
  name: 'top',
  mounted(){
    this.id_top = this.$route.params.id;
  },
  data () {
    return {
      texto: 'Esto es la TOP',
      id_top: null,
    }
  }
}
</script>

<style lang="scss">

</style>