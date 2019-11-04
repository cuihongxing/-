<template>
  <div>
      
      <div class="bargain-header">
          <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
          <p>砍价列表</p>
          <p></p>
      </div>
      
      <ul class="bargain-nav">
          <router-link :to="{ path:'/xxx',query:{ id:item.id } }" tag="li" v-for="(item,index) of list" :key="index">
              <div>
                  <img :src="item.pic" alt="">
              </div>
              <div class="bargain-div">
                  <p>{{item.name}}</p>
                  <p>{{item.characteristic}}</p>
                  <div class="bargain-div-1">
                        <div>
                            <p>￥{{item.minPrice}}.00</p>
                            <p>低价</p>
                        </div>
                        <div>
                            <p>￥{{item.originalPrice}}.00</p>
                            <p>原价</p>
                        </div>
                        <div>
                            <p>{{item.stores}}件</p>
                            <p>限量</p>
                        </div>
                  </div>
                  
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>

import Bargain from '../../services/barain'
const _bar = new Bargain()

export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        _bar.barain().then(res => {
            console.log(res)
            let { data } = res.data
            this.list = data.goodsMap
        })
    },
}
</script>

<style>

</style>