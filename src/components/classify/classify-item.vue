<template>
  <div>
      <div class="classify-item-header">
          <router-link to="/classify">
              <i class="el-icon-arrow-left"></i>
          </router-link>
          <p>分类商城</p>
          <p></p>
      </div>
      <div class="classify-item-item">
          <ul>
              <router-link :to="{ path:'/detail',query:{ id:item.id } }" tag="li" v-for="(item,index) of news" :key="index">
                    <img :src="item.pic" alt="">
                    <p>{{item.name}}</p>
                    <p>{{item.name}}</p>
                    <div>
                        <span>￥ {{item.minPrice}}</span>
                        <span>已售{{item.numberOrders}}</span>
                    </div>
                    
              </router-link>
          </ul>
      </div>
  </div>
</template>

<script>


import Classify from '../../services/classify'    //引入接口JS文件
let _classify = new Classify()    //实例化接口文件

export default {
    
    data () {
        return {
            list:[],
            news:[],
            userInfo:{}
        }
    },
    created() {
        _classify.ClassiftList().then(res => {
                // console.log(res)
                let { data } = res.data
                this.list = data

                 let { id } = this.$route.params
                // console.log(id)
                this.news = this.list.filter((v)=>{
                    return v.categoryId == id
                })
                // console.log(this.news)
        })
   },
}
</script>

<style>

</style>