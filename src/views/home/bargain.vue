<template>
  <div>
      <router-link to="/bargain" tag="div" class="kanjia-">
            <p>全民砍价</p>
            <p>＞</p>
      </router-link>
      <BargainItem class="barain" v-for="(item,index) in barain" :key="index" :newBarain="item" v-if="item.stores == 100"></BargainItem>
  </div>
</template>

<script>
import BargainItem from '../../components/home/bargain-item'

import Barain from '../../services/barain' //引入接口
const _barain = new Barain  //实例化

export default {
    components: {
        BargainItem
    },
    data () {
        return {
            barain:[]
        }
    },
    created () {
        _barain.barain().then(res=>{
            let { data } = res.data
            this.barain = data.goodsMap
        })
    }
}
</script>

<style>

</style>