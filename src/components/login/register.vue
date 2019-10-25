<template>
  <div class="register">
      <div class="register-header">
          <p>新用户注册</p>
          <p>很高心您将成为商城的会员（注册只需一步）</p>
      </div>
      <div class="register-content">
          <div class="register-input">
              <input type="text" v-model="userName" @blur="checkUsername" placeholder="手机号码">
              <i class="el-icon-mobile-phone"></i>
          </div>
          <div class="register-input">
              <input type="password" v-model="password" @blur="checkPassword" ref="pass" placeholder="密码">
              <van-icon name="closed-eye" v-show="!isShow"  @click="xian"/>
              <van-icon name="eye-o" v-show="isShow" @click="xian"/>
          </div>
          <div class="register-input">
              <input type="password" v-model="newPass" @blur="checkPassword1" ref="pass1" placeholder="确认密码">
              <van-icon name="closed-eye" v-show="!isShow1"  @click="xian1"/>
              <van-icon name="eye-o" v-show="isShow1" @click="xian1"/>
          </div>
          <div class="register-input">
              <input type="text" placeholder="用户名">
              <van-icon name="manager-o" />
          </div>
          <div class="register-img">
              <input type="text" v-model="tuXing" placeholder="图形验证码">
              <img :src="`https://api.it120.cc/small4/verification/pic/get?key=${this.dj}`" alt="" @click="huan">
              <!-- <span v-html="newPic.response"></span> -->
          </div>
          <div class="register-code">
              <input type="text" v-model="code" placeholder="验证码">
              <button @click="btn">获取验证码</button>
          </div>
          <div class="register-button">
              <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="register">立即注册</van-button>
          </div>
          <div class="register-footer">
              <span>已有账号</span>
              <router-link to="/login">立即去登陆</router-link>
          </div>
      </div>
  </div>
</template>

<script>

import Register from '../../services/login'
let _register = new Register()

export default {
  data () {
    return {
      isShow:false,
      isShow1:false,
      newPic:'',  //图案接受
      userName:'',  //用户名
      password:'',   //密码
      newPass:'',   //确认密码
      tuXing:'',    //图形密码
      usernameMsg:"",   // 用户名的错误提示
      pass:'',   //密码错误提示
      passs:'', //确认密码提示
      title:'',
      dj: new Date().getTime(),
      code:''
    }
  },
  methods: {
    //点击图案变换以及密码显示
    xian(){
      this.isShow = !this.isShow
      if(this.isShow){
        this.$refs.pass.setAttribute("type","text")
      }else{
        this.$refs.pass.setAttribute("type","password")
      }
    },
    //点击图案变换以及密码显示
    xian1(){
      this.isShow1 = !this.isShow1
      if(this.isShow1){
        this.$refs.pass1.setAttribute("type","text")
      }else{
        this.$refs.pass1.setAttribute("type","password")
      }
    },
    //手机号的效验
    checkUsername(){
      if(!(/^1[3456789]\d{9}$/.test(this.userName))){ 
          this.usernameMsg="手机号输入错误"; 
          alert(this.usernameMsg) 
          return false; 
      }
    },
    //密码效验
    checkPassword(){
      if(this.password.length<3){
          this.pass = "密码最少三位"
          alert(this.pass)
          return false
      }
    },
    //确认密码效验
    checkPassword1(){
      if(this.newPass != this.password){
          this.passs = "密码不一样"
          alert(this.passs)
          return false
      }
    },
    //点击图片变换
    huan(){
      this.dj = new Date().getTime()
    },
    //点击获取验证码
    btn(){
      // let sj = new Date().getTime()
      let obj = {
          mobile:this.userName,
          key:this.dj,
          picCode:this.tuXing
      }
      _register.RegisterGet(obj).then((res)=>{
        console.log(res)
          
      })
    },
    //点击注册
    register(){
        let newObj = {
          mobile:this.userName,
          pwd:this.password,
          code:this.code
        }
         _register.Register(newObj).then((res)=>{
          console.log(res.data.code)
            if(res.data.code == 0 || res.data.code == 10000){
              this.$router.push("/login")
            }else{
              alert(注册失败)
            }
        })
    }
  },
  created() {

      // this.title = new Date().getTime()

     
      
  },
  
}
</script>

<style>

</style>