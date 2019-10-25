<template>
  <div class="box">
      <div class="banner">
        <el-carousel height="3.8rem">
          <el-carousel-item v-for="(item,index) in banner" :key="index">
            <img :src="item.picUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="nav">
        <ul>
            <li>
              <i class="el-icon-date"></i>
               <p>签到</p>
            </li>
            <li>
              <i class="el-icon-present"></i>
               <p>礼券</p>
            </li>
            <li>
              <i class="el-icon-s-goods"></i>
               <p>砍价</p>
            </li>
            <li>
              <i class="el-icon-edit-outline"></i>
               <p>专栏</p>
            </li>
        </ul>
      </div>
      <div class="kong"></div>
      <div class="kanjia">
          <div class="kanjia-">
            <p>全民砍价</p>
            <p>＞</p>
          </div>
          <ul>
              <li v-for="(item,index) of list" :key="index" v-if="item.stores == 100">
                  <img :src="item.pic" alt="">
                  <div class="kanjia-xx">
                    <p>{{item.name}}</p>
                    <p>{{item.characteristic}}</p>
                    <p>
                        <span>￥{{item.minPrice}}.00</span>
                        <span>￥{{item.originalPrice}}.00</span>
                        <span>{{item.stores}}件</span>
                    </p>
                    <p>
                        <span>低价</span>
                        <span>原价</span>
                        <span>限量</span>
                    </p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>



export default {
  
  data () {
    return {
      banner:[],
      list:[]
    }
  },
  created () {
    this.$axios.get('https://api.it120.cc/small4/banner/list').then((res)=>{
      // console.log(res)
      this.banner = res.data.data
    })
    this.$axios.get('https://api.it120.cc/small4/shop/goods/kanjia/list').then((res)=>{
      console.log(res)
      this.list = res.data.data.goodsMap
    })
  }
}
</script>



