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
                    <span>￥{{list.minPrice}}</span>
                    <del>￥{{list.originalPrice}}.00</del>
                </div>
                <div>已售{{list.numberSells}}</div>
            </div>
        </div>
      </div>
    
      <div class="class-rule" @click="xianshi">
          <span>选择规则</span>
          <van-icon name="arrow" />
      </div>
      <div class="class-guess" v-show="on">
          <div class="guess-header">
              <div class="guess-header-item">
                  <img :src="list.pic" alt="">
                    <div class="guess-header-name">
                        <p>{{list.name}}</p>
                        <p>￥{{list.minPrice}}</p>
                    </div>
              </div>
              <div class="guess-header-x" @click="yincang">
                  <van-icon name="cross" />
              </div>
          </div>
          
          <div class="guess-content">
              <p>{{zong.properties[one].name}}</p>
              <ul>
                  <li :class="active==index?'aaa':''" @click="att(item,index)" v-for="(item,index) of zong.properties[one].childsCurGoods" :key="index">
                      <span>{{item.name}}</span>
                  </li>
              </ul>
              
              <div class="guess-content-div" v-if="zong.properties[oneo]">
                  <p>{{zong.properties[oneo].name}}</p>
                  <span :class="active1==i?'aaa':''" v-for="(v,i) of zong.properties[oneo].childsCurGoods" @click="att1(v,i)" :key="i">{{v.name}}</span>
              </div>
          </div>
          <div class="guess-footer" @click="add">加入购物车</div>
      </div>  
      

      <div>
          <div class="classify-init">
              <ul>
                  <li @click="jiesao">商品介绍</li>
                  <li @click="pingjia">商品评价</li>
              </ul>
          </div>
          <div class="classify-detail-content" v-show="isShow" v-html="ListHtml">
              
          </div>
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
      <slot name="ss" >
          <footer class="classify-footer">
          <ul>
              <li><van-icon name="service-o" /></li>
              <router-link to="/shop" tag="li"><van-icon name="shopping-cart-o" /><span>{{this.$store.state.guess.length}}</span></router-link>
              <li><van-icon name="star-o" /></li>
              <li>立即购买</li>
              <li @click="xianshi">加入购物车</li>
          </ul>
      </footer>
      </slot>
          
      
  </div>
</template>

<script>

// import Guess from '../../components/guess/guess'

import Classify from '../../services/classify'    //引入接口JS文件
let _classify = new Classify()    //实例化接口文件
import Local from '../../local/local'

export default {
    computed: {
        jj(){
            return this.$store.state.guess.numb
        }
    },
    data () {
        return {
            list:[],
            banner:[],
            ListHtml:{},
            isShow:true,
            newList:[],
            zong:[],
            on:false,
            one:0,
            oneo:1,
            shuju:[],
            img:'',
            name:'',
            price:'',
            newName:'',
            userName:[],
            numb:'',
            id:'',
            active:-1,
            active1:-1,
            sta:true
        }
    },
    created() {
        let { id } = this.$route.query
        _classify.ClassiftDetail(id).then(res => {
               let { data } = res.data
               this.banner = data.pics
                this.list = data.basicInfo
                this.ListHtml = res.data.data.content
                this.zong = res.data.data
                this.img = data.basicInfo.pic
                this.name = data.basicInfo.name
                this.price = data.basicInfo.minPrice
                this.numb = data.basicInfo.vetStatus
                this.id = data.basicInfo.id
               console.log(this.list)
        })

        _classify.ClassiftReputation(id).then(res => {
               let { data } = res.data
                this.newList = data
                // console.log(this.newList)
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
        },
        xianshi(){
            this.on = true
        },
        yincang(){
            this.on = false
        },
        //点击加入购物车
        att(v,i){
            this.newName = v
            this.active = i
        },
        att1(v,i){
            this.userName = v
            // console.log(this.userName)
            this.active1 = i
        },
        add(){
            if(this.newName==''){
                alert("不能为空")
            }else{
                let obj = {
                    img:this.img,
                    name:this.name,
                    price:this.price,
                    numb:this.numb,
                    newName:this.newName,
                    userName:this.userName,
                    id: this.id,
                    sta:this.sta
                }
                this.on = false
                this.$store.commit('add',obj)
            }
            // console.log(this.shuju)
            
        },
    }
}
</script>

<style>

</style>