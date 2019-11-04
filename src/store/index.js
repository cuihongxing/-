import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)
import Local from '../local/local'

const store = new Vuex.Store({
    state: {
        local:'',
        guess:Local.get('list')||[],
        order:[]
        // num:''
    },
    mutations: {
        //
        login(state,val){
            state.local = val
            // console.log(state.local)
        },
        //加入购物车的方法
        add(state,v){
            
            console.log(state.guess)
            let arrls = state.guess.find(item=>item.id===v.id)
            if(arrls){
                arrls.numb += v.numb
            }else{
                state.guess.push(v)
            }
            // let index = state.guess.findIndex((item)=>{
            //     return item.id == v.id 
            // })
            // if(index==-1){
            //     state.guess.push(v)
            // }else{
            //     state.guess.numb++
            // }
            Local.set('list',state.guess)
        },
        jia1(state,i){
            state.guess[i].numb++
        },
        jian1(state,i){
            state.guess[i].numb--
            
        },
        del(state,i){
            state.guess.splice(i,1)
        },
        //
       shuju(state,v){
           console.log(v)
           state.order.push(v)
       }
    },
    getters: {
        zongjia(state){
            let num = 0
            state.guess.map((v)=>{
                num += v.numb*v.price
            })
            return num
        },
        allPri (state) {
            return state.guess.filter(v => v.sta).reduce((pri,v) => {
              return pri + v.price * v.numb
            }, 0)
        }
    }
})

export default store