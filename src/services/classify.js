
import HTTP from '../utils/http'

const _http = new HTTP() 
    
class Classify {  //名称随便起
    ClassiftAll(){
        return _http.request(
            {
                url: 'https://api.it120.cc/small4/shop/goods/category/all'
            }
        )
    }

    ClassiftList(){
        return _http.request(
            {
                url: 'https://api.it120.cc/small4/shop/goods/list'
            }
        )
    }

    ClassiftDetail(DetailId){
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/shop/goods/detail',
                data: {
                    id:DetailId
                }
            }
        )
    }

    //商品评价接口
    ClassiftReputation(DetailId){
        // console.log(DetailId)
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/shop/goods/reputation',
                data: {
                    goodsId:DetailId
                }
            }
        )
    }

    //选择规则尺寸
    // ClassiftPrice(){
    //     // console.log(DetailId)
    //     return _http.request(
    //         {
    //             type: 'post',
    //             url: 'https://api.it120.cc/small4/shop/goods/price',
    //             data: {
                    
    //             }
    //         }
    //     )
    // }

    //商品订单详情
    Paydetail(obj){
        // console.log(DetailId)
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/order/detail',
                data: {
                    token:obj.token,
                    id:obj.id
                }
            }
        )
    }

    
}
export default Classify