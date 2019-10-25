<template>
  <div class="classify-detail">
      <div class="classify-detail-return">
          <i class="el-icon-arrow-left" @click="retu"></i>
      </div>
      <div class="classify-detail-banner">
            <el-carousel height="3.5rem">
                <el-carousel-item v-for="(item,index) in banner" :key="index">
                    <img :src="item.pic" alt="">
                </el-carousel-item>
            </el-carousel>
      </div>
      <div class="classify-detail-list">
        <div class="classify-detail-container">
            <div class="classify-detail-name">{{list.name}}</div>
            <div class="classify-detail-default">
                <div>
                    <span>￥{{list.minPrice}}.00</span>
                    <del>￥{{list.originalPrice}}.00</del>
                </div>
                <div>已售{{list.numberSells}}</div>
            </div>
        </div>
      </div>
      <div>
          <div class="classify-init">
              <ul>
                  <li @click="jiesao">商品介绍</li>
                  <li @click="pingjia">商品评价</li>
              </ul>
          </div>
          <div class="classify-detail-content" v-show="isShow" v-html="ListHtml"></div>
          <div class="pingjia">
              <ul>
                  <li v-for="(item,index) of newList" :key="index">
                      <div>
                          <img :src="item.goods.pic" alt="">
                      </div>
                      <div class="classify-init-title"> 
                          <div>
                              <span>匿名用户</span>
                              <span>{{item.goods.goodReputationStr}}</span>
                                <p>{{item.goods.goodsName}}</p>
                                <p>{{item.goods.property}}</p>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
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
            banner:[],
            ListHtml:{},
            isShow:true,
            newList:[]
        }
    },
    created() {
        let { id } = this.$route.query
        _classify.ClassiftDetail(id).then(res => {
               let { data } = res.data
               this.banner = data.pics
                this.list = data.basicInfo
                this.ListHtml = res.data.data.content
            //    console.log(res)
        })

        _classify.ClassiftReputation(id).then(res => {
               let { data } = res.data
                this.newList = data
                console.log(this.newList)
        })

    },
    methods: {
        retu(){
            history.back()
        },
        pingjia(){
            this.isShow = false
        },
        jiesao(){
            this.isShow = true
        }
    }
}
</script>

<style>

</style>