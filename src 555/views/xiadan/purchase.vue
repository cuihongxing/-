<template>
    <div class="box">
        <div class="purchase">
            <div class="tp">
                <p><i @click="back" class="el-icon-arrow-left"></i></p>
                <p>确认订单</p>
            </div>
            <div class="address">

            </div>
            <div class="ls_container">
                <div>商品列表</div>
                <div class="ls" v-for="(item,index) in purls" :key="index">
                    <img :src="item.info.pic" alt="">
                    <div>
                        <div v-html="item.info.name"></div>
                        <div>
                            <p>规格：{{ item.size }}</p>
                            <p>{{ item.col }}</p>
                        </div>
                    </div>
                    <div>
                        <p>￥{{item.info.minPrice.toFixed(2)}}</p>
                        <p>x{{ item.num }}</p>
                    </div>
                </div>
            </div>
            <div class="Courier">
                <p>配送方式</p>
                <p>快递</p>
            </div>
            <div class="note">
                <p>备注</p>
                <input @focus="focus" @blur="blur" type="text" placeholder="如需备注请输入">
            </div>
            <div :class="long?'line_long':'line'"></div>
            <div class="amount">
                <p>商品金额</p>
                <p>￥{{ allPri }}</p>
            </div>
        </div>
        <div class="fot">
            <p>合计：￥{{ allPri }}</p>
            <button>提交订单</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'purchase',
    data () {
        return {
            purls: [],
            long:true
        }
    },
    created () {
        //console.log(this.$store.state.storeLs)
        this.purls = this.$store.state.storeLs.filter(v => {
            return v.checked
        })
        console.log(this.purls)
    },
    methods: {
        back(){
            history.back()
        },
        focus(){
            this.long = true
        },
        blur(){
            this.long = false
        }
    },
    computed: {
          allPri(){
                return this.$store.getters.allPri
            },
    }
}
</script>

<style lang="scss">
    .box{
        width: 5.6rem;
        .fot{
            width: 100%;
            height: 0.8rem;
            position: fixed;
            left: 0;
            bottom: 0;
            background:#ddd;
            display: flex;
            align-items: center;
            z-index: 1;
            >p{
                color: red;
                width: 70%;
                text-align: right;
                padding-right: 0.2rem;
                font-size: 0.22rem;
            }
            button{
                height: 0.8rem;
                width: 30%;
                font-size: 0.24rem;
                border:none;
                outline: none;
                color: white;
                background: #b7282e;
            }
        }
    }
    .purchase{
        .tp{
            height: 0.6rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            >p{
                &:nth-of-type(1){
                    i{
                        font-size: 0.24rem;
                    }
                }
                &:nth-of-type(2){
                     width: 95%;
                    text-align: center;
                }
            }
        }
        .address{
            height: 1.5rem;
            width: 100%;
        }
        .Courier{
            display: flex;
            height: 0.2rem;
            align-items: center;
            font-size: 0.18rem;
            justify-content: space-between;
            padding: 0.2rem;
            border-bottom: 0.01rem solid #ddd;
        }
        .line{
            width: 0.1rem;
            height: 0.03rem;
            background: white;
            margin: 0 auto;
            transition: all 2s;
        }
        .line_long{
            width: 100%;
            background: red;
            transition: all 2s;
        }
        .note{
            display: flex;
            height: 0.6rem;
            align-items: center;
            text-indent: 0.2rem;
            input{
                width: 80%;
                height: 0.4rem;
                text-indent: 0.2rem;
                font-size: 0.16rem;
                margin-left: 0.5rem;
                border: none;
                outline: none;
            }
        }
        .amount{
            border-top: 0.1rem solid #f0f0f0;
            display: flex;
            padding: 0.2rem;
            justify-content: space-between;
        }
        .ls_container{
            >div{
                &:nth-of-type(1){
                    height: 0.5rem;
                    text-indent: 0.2rem;
                    line-height: 0.5rem;
                    border-top: 0.15rem solid #f0f0f0;
                    border-bottom: 0.01rem solid #ddd;
                    color: darkgray;
                    font-size: 0.16rem;
                }
            }
            .ls{
                height: 1.5rem;
                width: 100%;
                display: flex;
                align-items: center;
                border-bottom: 0.01rem solid #ddd;
                    img{
                        height: 1.2rem;
                        width: 1.2rem;
                    }
                    >div:nth-of-type(1){
                        width: 55%;
                        text-indent: 0.2rem;
                        >div:nth-of-type(1){
                            font-size: 0.18rem;
                        }
                        >div:nth-of-type(2){
                            color: darkgray;
                            font-size: 0.16rem;
                            margin-top: 0.35rem;
                        }
                    }
                    >div:nth-of-type(2){
                        p:nth-of-type(1){
                            font-size: 0.16rem;
                        }
                        p:nth-of-type(2){
                            color: darkgray;
                            margin-top: 0.5rem;
                            font-size: 0.16rem;
                        }
                    }
                }
        }
    }
</style>