<template>
  <div>
      <div class="site-header">
          <router-link to="/me"><van-icon name="arrow-left" /></router-link>
          <p>我的地址</p>
          <router-link to="/siteitem">
            <van-icon name="plus" />
          </router-link>
      </div>
      <div class="site-content">
        <ul>
          <li v-for="(item,index) of list" :key="index">
              <input type="checkbox" @click="moren(item,index)" :checked="item.isDefault">
              <div>
                  <span>{{item.linkMan}}</span>
                  <span>{{item.mobile}}</span>
                  <p>{{item.provinceStr}} {{item.cityStr}} {{item.address}}</p>
              </div>
              <p><i class="el-icon-edit"></i></p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

import Detail from '../../services/site'
let _detail = new Detail()

export default {
  name:'site',
  data () {
    return {
        list:[]
    }
  },
  created() {
    //  let id = this.$route.params.token
      let token = this.$route.params.token
      _detail.detail(token).then((res)=>{
         console.log(res)
         this.list = res.data.data
      })

     let obj = this.$route.params
     _detail.addAddress(obj).then(res => {
        console.log(res.data.data)
        this.list.push(res.data.data)
    })
           
  },
  methods: {
    moren(v,i){
      console.log(v,i)
      v.isDefault = !v.isDefault
      console.log("13",v)
      let token = this.$route.params.token
      this.list.map(item=>{
        if(item.isDefault === true){
          _detail.moren(token).then(res => {
                console.log(res)
          })
        }
      })
      
    }
  },
}
</script>

<style>

</style>