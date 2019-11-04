<template>
  <div>
      <transition name="fade">
        <router-view/>
      </transition>
      
    
    <Footer></Footer>
    
  </div>
</template>

<script>
import Footer from '@/views/home/footer' 
export default {
    components:{
        Footer
    }
}
</script>

<style>
body{
  margin: 0;
}
/* .fade-enter-active,.v-leave-active {
    transition: all .5s;
  }
  .fade-enter{
    opacity: 0;
    transform: translateX(100%)
  }
  .fade-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position:absolute;
  } */

</style>