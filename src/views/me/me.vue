<template>
  <div class="user">
      <div class="user-info">
          <div class="user-info-avatar">
            <i class="el-icon-user-solid"></i>
          </div>
          <div class="user-info-detail">
              <router-link to="/login" tag="p">点击登录</router-link>
              <p>积分：0</p>
          </div>
      </div>
      <div class="user-notice">
          <i class="el-icon-message-solid"></i>
          <span>新上线更稳定的付费快递查询接口</span>
      </div>
      <div class="user-my-orders">
        <div class="user-my-orders-header">
          <div>
            <i class="el-icon-tickets"></i>
            <span>我的订单</span>
          </div>
          <div>
              <i class="el-icon-arrow-right"></i>
          </div>  
        </div>
        <hr>
        <div class="user-my-orders-actions">
          <ul>
            <li>
              <i class="el-icon-wallet"></i>
              <p>待付款</p>
            </li>
            <li>
              <i class="el-icon-shopping-bag-2"></i>
              <p>待发货</p>
            </li>
            <li>
              <i class="el-icon-picture"></i>
              <p>待收货</p>
            </li>
            <li>
              <i class="el-icon-chat-line-square"></i>
              <p>待评价</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-actions">
          <ul>
              <li>
                  <i class="el-icon-coin"></i>
                  <p>我的余额</p>
              </li>
              <li>
                  <i class="el-icon-ice-cream-round"></i>
                  <p>我的砍价</p>
              </li>
              <li>
                  <i class="el-icon-s-ticket"></i>
                  <p>我的礼券</p>
              </li>
              <li>
                  <i class="el-icon-star-on"></i>
                  <p>我的收藏</p>
              </li>
              <li>
                  <i class="el-icon-map-location"></i>
                  <p>我的地址</p>
              </li>
              <li>
                  <i class="el-icon-headset"></i>
                  <p>联系客服</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>