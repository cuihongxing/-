<template>
  <div> 
      <div class="bgcl"></div>
      <router-link to="/sele" class="kanjia-">
            <p>精选专题</p>
            <p>＞</p>
      </router-link>
      <div class="sele">
          <SeleItem v-for="(item,index) in list" :key="index" :list1="item"  ></SeleItem>
      </div>
      <div class="bgc"></div>
  </div>
</template>

<script>
import SeleItem from '../../components/home/sele-item'

import Sele from '../../services/sele'  //引入接口
let _sele = new Sele()

export default {
    components: {
        SeleItem
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
.kanjia-{
    text-decoration: none;
    color: #000
}
</style>