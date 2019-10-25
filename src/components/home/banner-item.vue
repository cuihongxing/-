<template>
  <div>
      
       <img :src="itemBanner.picUrl" alt="">
        
  </div>
</template>

<script>

export default {

  props:['itemBanner'],   //接受数据
  data () {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
