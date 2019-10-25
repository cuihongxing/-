<template>
  <div>
      <div class="sele-item-header">
          <router-link to="/">
              <i class="el-icon-arrow-left"></i>
          </router-link>
          <h4>严选专栏</h4>
          <p></p>
      </div>
      <div class="sele-item-img">
          <router-link :to="{ name:'special',params:{ id:item.id } }" tag="div" v-for="(item,index) of list" :key="index">
              <img :src="item.pic" alt="">
              <div class="sele-item-title">
                  <p>{{item.title}}</p>
                  <p>{{item.descript}}</p>
                  <p>查看详情</p>
              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
import Sele from '../../services/sele'  //引入接口
let _sele = new Sele()

export default {
    components: {
        
    },
    data () {
        return {
            list:[]
        }
    },
    created () {
        _sele.newSele().then(res => {
            // console.log(res)
            let { data } = res.data
            this.list = data
        })
    }
}
</script>

<style>

</style>