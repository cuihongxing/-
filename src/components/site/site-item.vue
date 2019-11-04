<template>
  <div class="box">
      <div class="upadress">
            <div class="tp">
                <p><i @click="back" class="el-icon-arrow-left"></i></p>
                <p>新增地址</p>
            </div>
            <div class="box-item">
                <div class="perInfo">
                    <div>联系人</div>
                    <input v-model="user" type="text" placeholder="姓名">
                </div>
                <div class="perInfo">
                    <div>手机号码</div>
                    <input v-model="mobile" type="text" placeholder="11位手机号码">
                </div>
                <div class="perInfo">
                    <div>选择地区</div>
                    <input @focus="getSheng" :value="msg"  type="text" placeholder="请选择 请选择">
                </div>
                <div class="perInfo">
                    <div>详细地址</div>
                    <input v-model="address" type="text" placeholder="街道门牌信息">
                </div>
                <div class="perInfo">
                    <div>邮政编码</div>
                    <input v-model="code" type="text" placeholder="邮政编码">
                </div>
                <button @click="save">保存</button>
                <button>从微信读取</button>
                <button>取消</button>
            </div>
        </div>
        <div class="selectAddress" v-show="selectShow">
            <div class="slts">
                <el-select class="el" @change="changeOpt(val)" v-model="val" placeholder="请选择">
                    <el-option
                    v-for="item in shengs"
                    :key="item.id"
                    :value="item.name">
                    {{ item.name }}
                    </el-option>
                </el-select>
                <el-select class="el" @change="changShi(shiVal)" v-model="shiVal">
                    <el-option
                    v-for="item in shis"
                    :key="item.id"
                    :value="item.name">
                    {{ item.name }}
                    </el-option>
                </el-select>
                <button @click="ok">确定</button>
            </div>
        </div>
  </div>
</template>

<script>

import Detail from '../../services/site'
let _detail = new Detail()

export default {
    data () {
        return {
            selectShow: false,
            value:"",
            shengs: [],
            val: "",
            shiVal: "",
            shis: [],
            id: "",
            shiid: "",
            msg: "请选择 请选择",
            user: '',
            mobile: "",
            address: "",
            code: ""
        }
    },
    methods: {
            back(){
                history.back()
            },
            getSheng(){
                this.selectShow = true
                 _detail.sheng().then(res => {
                    this.shengs = res.data.data
                    console.log(this.shengs)
                })
            },
            ok(){
                this.selectShow = false
                this.msg = this.val + " " + this.shiVal
            },
            save(){
                this.$router.push({
                    name:"site",params:{
                    address: this.address,
                    cityId: this.shiid,
                    code: this.code,
                    linkMan: this.user,
                    mobile: this.mobile,
                    provinceId: this.id,
                    token: this.$store.state.local}
                })
            },
            changeOpt(item){
                this.shengs.forEach(v => {
                    if(v.name == item){
                        this.id = v.id
                    }
                })
                //console.log(this.id)
                 _detail.shi(this.id).then(res => {
                    this.shis = res.data.data
                    //console.log(res.data.data)
                })
            },
            changShi(item){
                console.log(item)
                this.shis.forEach(v => {
                    if(v.name == item){
                        this.shiid = v.id
                    }
                })
                //console.log(this.shis)
                console.log(this.shiid)
            }
        }
}
</script>

<style>

</style>