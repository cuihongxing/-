import HTTP from '../utils/http'

const _http = new HTTP() 
    
class  Detail{  //名称随便起


    detail(token){   //方法名
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/user/shipping-address/list',
                data: {
                    token:token
                }
            }
        )
    }


     //address地址
    address(payload) {
        return _http.request({
        type: 'post',
        url: 'https://api.it120.cc/small4/user/shipping-address/list',
        data: {
            token: payload
        }
        })
    }
    //省市区
    sheng(){
        return _http.request({
          type: 'post',
          url: 'https://api.it120.cc/common/region/province'
        })
    }
    shi(id){
        return _http.request({
          type: 'post',
          url: 'https://api.it120.cc/common/region/child',
          data: {
            pid: id
          }
        })
      }
      //添加收货地址
      addAddress (obj) {
        return _http.request({
          type: 'post',
          url: 'https://api.it120.cc/small4/user/shipping-address/add',
          data: {
            address: obj.address,
            cityId: obj.cityId,
            code: obj.code,
            linkMan: obj.linkMan,
            mobile: obj.mobile,
            provinceId: obj.provinceId,
            token: obj.token
          }
        })
      }
      //默认的收货地址
      moren(token){
        return _http.request({
          type: 'post',
          url: 'https://api.it120.cc/small4/user/shipping-address/default',
          data: {
            token:token
          }
        })
      }
      //创建订单
      establish(obj){
        return _http.request({
          type: 'post',
          url: 'https://api.it120.cc/small4/order/create',
          data: {
                token:obj.token,
                goodsJsonStr:obj.goodsJsonStr
          }
        })
      }
      
    
}
export default Detail