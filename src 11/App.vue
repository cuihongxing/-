<template>
  <div>
    
    <router-view/>
    
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from './views/footer'

export default {
  
  data () {
    return {
      
    }
  },
  components: {
      
      Footer
  }

}
</script>

<style>

</style>
