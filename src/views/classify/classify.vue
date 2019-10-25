<template>
  <div class="classify">
      <div class="class-header">
          <input type="text" placeholder="搜索">
      </div>
      <div class="class-content">
          <div class="classify-menu">
            <ul>
                <li @click="all()">所有分类</li>
                <li @click="jump(item)" v-for="(item,index) in news" :key="index">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="classify-list">
            <ul>
                <router-link :to="'/classitem/'+ v.id" tag="li" v-for="(v,i) in one" :key="i">
                    <img :src="v.icon" alt="">
                    <p>{{v.name}}</p>
                    <!-- <router-link tag="p" :to="'/classity/'+ v.id">{{ v.name }}</router-link> -->
                </router-link>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
// import ClassifyItem from '../../components/classify/classify-item'  //引入子组件

import Classify from '../../services/classify'    //引入接口JS文件
let _classify = new Classify()    //实例化接口文件

export default {
  components: {
    
  },
  data () {
    return {
      list:[],
      news:[],
      newList:[],
      one:[]
    }
  },
  created() {
    _classify.ClassiftAll().then(res => {
            // console.log(res)
            let { data } = res.data
            this.list = data
            this.one = data

            this.news = this.list.filter((v)=>{
                return !v.type.includes(2)
            })
            this.newList = this.list.filter((v)=>{
                return v.type.includes(2)
            })
            // console.log(this.news)
        })
  },
  methods: {
        jump(item){
            this.one = this.newList.filter((v)=>{
                return v.type.includes(item.type)
            })
        },
        all(){
            this.one = this.list.filter((v)=>{
                return v.type.includes(2)
            })
        }
  }
}
</script>

<style>

</style>