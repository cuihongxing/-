<template>
  <div>
      <div class="login" v-show="isShow">
          <img src="../../assets/img/111.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:false,
            scroll:0
        }
    },
    mounted () {
          window.addEventListener("scroll",this.homeshowf)
    },
//     methods: {
//         homeshowf(){
//             this.scroll = document.documentElement.scrollTop||document.body.scrollTop;
//             if(this.scroll>=400){
//                 this.isShow=true
//             }else{
//                 this.isShow=false
//             }
//         }
//     },
}
</script>

<style>

</style>