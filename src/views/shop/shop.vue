<template>
  <div class="shop">
      <div class="shop-item">
          <div class="shop-item-header">
              购物车
          </div>
          <div class="shop-item-img" v-if="this.$store.state.guess.length==0">
              <img src="../../assets/img/444.jpg" alt="">
              <p>购物车暂无东西，添加点什么吧</p>
          </div>
          <div class="shop-item-box">
              <div v-for="(v,i) of jj" :key="i" class="shop-item-content">
                    <div>
                        <input type="checkbox" @click="changeChecked(v)" :checked="v.sta">
                    </div>
                    <div>
                        <img :src="v.img" alt="">
                    </div>
                    <div class="shop-item-name">
                        <p>{{v.name}}</p>
                        <span>{{v.newName.name}}</span>
                        <span>{{v.userName.name}}</span>
                        <div>
                            <span>￥{{v.price}}</span>
                            <button class="shop-item-button" @click="jian1(i)">-</button>
                            <span>{{v.numb}}</span>
                            <button @click="jia(i)">+</button>
                        </div>
                        
                    </div>
                    <div class="shop-item-x" @click="del(i)">
                        <van-icon name="cross" />
                    </div>
                </div>
            </div>
           <div class="shop-item-footer" v-if="!this.$store.state.guess.length==0">
                <input type="checkbox" @click="selectAll" :checked="isSelectAll">
                    <!-- <p></p> -->
                <span>合计：￥{{allPri}}</span>
                <span @click="xiadan">下单</span>
            </div>

          </div>
      <div class="shop-item-guess">
          <div class="shop-item-guess-header">猜你喜欢</div>
          <div class="shop-item-guess-content">
              <ul>
                  <li v-for="(item,index) of newList" :key="index">
                      <img :src="item.pic" alt="">
                      <p>{{item.name}}</p>
                      <p>{{item.name}}</p>
                      <div>
                          <span>￥{{item.minPrice}}</span>
                          <span>已售{{item.numberOrders}}</span>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>

import Local from '../../local/local'
import List from '../../services/classify'
const _list = new List()
export default {
    data() {
        return {
            list:[],
            newList:[],
            shuju:[],
            xxx:[],
            aaa:'',
            morendizhi:[]
        }
    },
    created() {
        _list.ClassiftList().then((res)=>{
            let { data } = res.data
            this.list = data
            let num = Math.floor(Math.random()*this.list.length)
            if(num > 4){
                this.newList = this.list.splice((num-4),4)
            }else{
                this.newList = this.list.splice(num,4)
            }
        })
        // this.xxx = Local.get('list')
        
    },
    computed: {
        //获取的数据
       jj(){
           return this.$store.state.guess
       },
        //获取的
       isSelectAll(){
            if(this.$store.state.guess.length == 0){
                return false
            } 
            return !this.$store.state.guess.find(item => !item.sta)
        },
        //获取的总价
        allPri(){
            return this.$store.getters.allPri
        },
    },
    watch: {
        jj:{
            handler(){
                Local.set('list',this.jj)
            }
        },
        deep:true
    },
    methods: {
        jia(i){
            // this.$store.commit('jia')
            console.log(i)
            this.$store.commit('jia1',i)
        },
        jian1(i){
            this.$store.commit('jian1',i)
    
        },
        del(i){
            // console.log(i)
            this.$store.commit('del',i)
            
        },
        // 全选按钮
        // quan(e){
        //     // console.log( "我是全选按钮",e.target.checked)
        //     this.$store.state.guess.forEach((item,index)=>{
        //         // console.log(item.sta)
        //       item.sta=e.target.checked
        //     })
        // },

        //单选按钮
        changeChecked(v){
            // console.log(v)
            v.sta = !v.sta
        },
        //全选按钮
        selectAll(){
            if(this.isSelectAll){
                this.$store.state.guess.forEach(v => v.sta=false)
            }else{
                this.$store.state.guess.forEach(v => v.sta=true)
            }
            // console.log(this.isSelectAll)
        },
        xiadan(){
            
           this.$store.state.guess.map(item=>{
               if(item.sta===false){
                   alert("请选则物品")
               }else{
                   this.$router.push({
                    name:"purchase",params:{
                    token: this.$store.state.local}
                })
               }
           })

        }   
    },
    
}
</script>

<style>

</style>