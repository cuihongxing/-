<template>
  <div class="sign">
      <div class="sign-header">
          <router-link to="/">
              <i class="el-icon-arrow-left"></i>
          </router-link>
      </div>
      <div class="sign-content">
          <h4>您可用积分</h4>
          <p>999</p>
      </div>
      <div class="sign-slide"></div>

        <div class="sign-btn">
            <button>签到</button>
        </div>

        <div class="sign-item">
            <div class="sign-item-i">
                <i class="el-icon-shopping-cart-2"></i>
            </div>
            <div>
                <p>消费购物</p>
                <p>购物完成后，确认收货后立返积分</p>
            </div>
            <div>
                <router-link to="/" tag="button" class="sign-item-btn">去购物</router-link>
            </div>
        </div>
        <div class="sign-item">
            <div class="sign-item-i">
                <i class="el-icon-coin"></i>
            </div>
            <div>
                <p>积分兑换</p>
                <p>积分兑好礼，20积分即可兑换礼券</p>
            </div>
            <router-link to="/gift" tag="div">
                <button class="sign-item-btn">去兑换</button>
            </router-link>
        </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>