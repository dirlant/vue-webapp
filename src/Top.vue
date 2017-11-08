<template>
    <div>
      {{ texto }} - {{ id }}
    </div>
</template>


<script>
export default {
  name: 'top',
  mounted(){
    this.id = this.$route.params.id;
  },
  data () {
    return {
      texto: 'Esto es la TOP',
      id: null,
    }
  }
}
</script>

<style lang="scss">

</style>