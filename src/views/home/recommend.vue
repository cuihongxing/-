<template>
  <div>
      <div class="kanjia-">
          <p>人气推荐</p>
            <p>＞</p>
      </div>
      <div class="recomm">
          <Recommend v-for="(item,index) in list" :key="index" :list="item" v-if="item.recommendStatusStr=='推荐'"></Recommend>
      </div>
  </div>
</template>

<script>
import Recommend from '../../components/home/recommend-item'

import Recm from '../../services/recommend'
let _recommend = new Recm()

export default {
    components: {
        Recommend
    },
    data() {
        return {
            list:[]
        }
    },
    created () {
        _recommend.list().then(res =>{
            // console.log(res)
            let { data } = res.data
            this.list = data.goodsMap
        })
    }
}
</script>

<style>

</style>