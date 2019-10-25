<template>
  <div class="footer-active">
      <div>
        <router-link to="/home">
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </router-link>
        <router-link to="/clis">
          <i class="el-icon-s-order"></i>
          <p>分类</p>
        </router-link>
        <router-link to="/cart">
          <i class="el-icon-shopping-cart-full"></i>
          <p>购物车</p>
        </router-link>
        <router-link to="/me">
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
        
      }
    },
}
</script>

<style>

</style>