<template>
  <div>
    <div class="purchase-header">
      <van-icon name="arrow-left" @click="fanhui" />
      <p>确认订单</p>
      <p></p>
    </div>
    <div class="purchase-site">
      <div class="purchase-site-content">
        <i class="el-icon-location-outline"></i>
        <div class="purchase-site-content-1">
          <span>{{list1.linkMan}}</span>
          <span>{{list1.mobile}}</span>
          <p>{{list1.provinceStr}} {{list1.cityStr}} {{list1.address}}</p>
        </div>
      </div>
      <div class="purchase-site-content-div">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="purchase-commodity">
      <p class="purchase-commodity-p">
        <span>商品类表</span>
      </p>
      <div class="purchase-commodity-content">
        <ul>
          <li v-for="(item,index) of list" :key="index">
            <div>
              <img :src="item.img" alt />
              <div>
                <p>{{item.name}}</p>
                <p>{{item.newName.name}}</p>
              </div>
            </div>
            <div class="purchase-commodity-content-div">
              <p>￥{{item.price}}</p>
              <p>x{{item.numb}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="purchase-way">
      <div class="purchase-way-header">
        <p>配送方式</p>
        <p>快递</p>
      </div>
      <div class="purchase-way-footer">
        <p>备注</p>
        <input type="text" placeholder="如需备注请输入" />
      </div>
    </div>
    <div class="purchase-money">
      <p>商品金额</p>
      <p>￥{{allPri}}</p>
    </div>
    <div class="purchase-footer">
      <p></p>
      <div>
        <p>合计：￥{{allPri}}</p>
        <p @click="tijiao">提交订单</p>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from "../../services/site";
let _detail = new Detail();

export default {
  data() {
    return {
      list1: {},
      newList: []
    };
  },
  created() {
    let token = this.$route.params.token;
    _detail.moren(token).then(res => {
      let { data } = res.data;
      this.list1 = data;
      // console.log(this.list1)
    });
    // this.newList = this.$store.state.guess.map(v=>{
    //     v.checked
    // })
  },
  computed: {
    list() {
      return this.$store.state.guess.map(item => {
        if (item.sta === true) {
          return item;
        }
      });
    },
    allPri() {
      return this.$store.getters.allPri;
    }
  },
  methods: {
    fanhui() {
      history.back(-1);
    },
    tijiao() {
      this.list.forEach(item => {
        // console.log(item);
        let obj1=[{
            "goodsId":item.id,
            "number":item.numb,
            "propertyChildIds":`${item.newName.propertyId}:${item.newName.id}`,
            "logisticsType":0
        }]
        let obj = {
          token: this.$store.state.local,
          goodsJsonStr:JSON.stringify(obj1)
        };
        // console.log(obj1)
        // console.log(obj);
        _detail.establish(obj).then(res => {
            //   console.log(res);
            this.$store.commit('shuju',res.data.data)
            this.$router.push({
                name:'pay',
                params:{
                    // token:this.$store.state.local,
                    
                }
            })
        });
      });

    }
  }
};
</script>

<style>
</style>