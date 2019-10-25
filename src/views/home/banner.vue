<template>
  <div>
      <el-carousel height="3.8rem">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
            <BannerItem class="banner"  :item-banner="item" ></BannerItem>
        </el-carousel-item>
      </el-carousel>
      <div class="nav">
        <ul>
            <router-link to="/sign" tag="li">
              <i class="el-icon-date"></i>
               <p>签到</p>
            </router-link>
            <router-link to="/gift" tag="li">
              <i class="el-icon-present"></i>
               <p>礼券</p>
            </router-link>
            <router-link to="/bargain" tag="li">
              <i class="el-icon-s-goods"></i>
               <p>砍价</p>
            </router-link>
            <router-link to="/sele" tag="li">
              <i class="el-icon-edit-outline"></i>
               <p>专栏</p>
            </router-link>
        </ul>
      </div>
      <div class="kong"></div>
  </div>
</template>

<script>

import BannerItem from '../../components/home/banner-item'

import Banner from '../../services/banner' //引入接口
const _banner = new Banner() //实例化

export default {
    components: {
        BannerItem
    },
    data () {
        return {
            banner:[]
        }
    },
    created() {
        _banner.list().then(res=>{
            // console.log(res)
            let { data } = res.data
            this.banner = data
        })
    },
    
}
</script>

<style>

</style>