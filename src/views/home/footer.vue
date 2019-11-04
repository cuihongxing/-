<template>
  <div class="footer">
      <div>
        <router-link to="/" active-class="active" exact>
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </router-link>
        <router-link to="/classify" active-class="active">
          <i class="el-icon-s-order"></i>
          <p>分类</p>
        </router-link>
        <router-link to="/shop" active-class="active">
          <i class="el-icon-shopping-cart-full"></i>
          <span style="color:red">{{this.$store.state.guess.length}}</span>
          <p>购物车</p>
        </router-link>
        <router-link to="/me" active-class="active">
          <i class="el-icon-s-custom"></i>
          <p>个人</p>
        </router-link> 
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index:-1
    }
  },
    computed: {
      jj(){
        return this.$store.state.guess.numb
      }
    },
}
</script>

<style>

</style>