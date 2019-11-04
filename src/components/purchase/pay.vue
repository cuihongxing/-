<template>
  <div>
     <div class="pay-return">
         <van-icon name="arrow-left" @click="retu" />
         <span>确认付款</span>
         <p> </p>
     </div>
     <div v-for="(item,index) of this.$store.state.order" :key="index" class="pay-header">
         <van-icon name="gold-coin-o" />
         <div>
            <p>商品总额：<span>￥{{item.amountReal}}</span></p>
            <p>订单号：{{item.orderNumber}}</p>
         </div>
         
         
     </div>
  </div>
</template>

<script>
import Pay from '../../services/classify'
let _pay = new Pay()

export default {
    created() {

        // let obj = {
        //      token:this.$route.params.token,
        //      id:this.$route.params.id
        // }
        // _pay.Paydetail(obj).then((res)=>{
        //     console.log(res)
        // })
    },
    methods: {
        retu(){
            // window.location.href=document.referrer;
            this.$router.push('/shop')
        }
    },
}
</script>

<style>

</style>