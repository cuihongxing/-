<template>
  <div>
      <div class="login">
        <div class="login-title">
          <div>账号登录</div>
        </div>
        <div class="login-input">
          <input type="text" v-model="name" placeholder="手机号码">
          <i class="el-icon-mobile-phone"></i>
        </div>
        <div class="login-input">
          <input type="password" v-model="passrow" ref="newPassword" placeholder="密码">
          <van-icon name="closed-eye" v-show="!isShow"  @click="xian"/>
          <van-icon name="eye-o" v-show="isShow" @click="xian"/>
        </div>
          <div class="login-button">
          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="login">登录</van-button>
        </div>
        <div class="login-item">
          <span>忘记密码</span>
          <router-link to="/register">立即注册</router-link>
        </div>
      </div>
      
      
  </div>
</template>

<script>

import Local from '../../local/local'
import Register from '../../services/login'
let _register = new Register()

export default {
  data () {
    return {
      isShow:false,
      name:'',
      passrow:''
    }
  },
  methods: {
    //密码的隐藏与显示
    xian(){
      this.isShow = !this.isShow
      if(this.isShow){
        this.$refs.newPassword.setAttribute("type","text")
      }else{
        this.$refs.newPassword.setAttribute("type","password")
      }
    },
    //登录时
    login(){
      let obg = {
          mobile:this.name,
          pwd:this.passrow
      }
      _register.LoginRe(obg).then((res)=>{
          console.log(res.data.data.token)
            if(res.data.code==0){
              this.$store.commit('login',res.data.data.token)
              this.$router.push('/me')
              Local.set('token',res.data.data.token)
            }else if(res.data.code==600){
              alert("请输入账号密码")
            }
            
        })
    }
  }
}
</script>

<style>

</style>