<template>
  <div>
      <div class="sele-item-header">
          <router-link to="/sele">
              <i class="el-icon-arrow-left"></i>
          </router-link>
          <p>专栏详情</p>
          <p></p>
      </div>
      <div class="sele-content">
          <p class="sele-content-p">{{list.title}}</p>
          <img :src="list.pic" alt="">
          <div v-html="list.content" class="sele-content-item"></div>
      </div>
  </div>
</template>

<script>

import Sele from '../../services/sele'  //引入接口
let _sele = new Sele()

export default {
    data() {
        return {
            list:{}
        }
    },
    created() {
        let { id } = this.$route.params

        _sele.SeleList(id).then(res => {
            console.log(res)
            let { data } = res.data
            this.list = data
        })
    },
}
</script>

<style>

</style>