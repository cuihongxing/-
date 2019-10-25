
import HTTP from '../utils/http'

const _http = new HTTP() 
    
class Barain {  //名称随便起
    barain(){
        return _http.request(
            {
                url: 'https://api.it120.cc/small4/shop/goods/kanjia/list'
            }
        )
    }
}
export default Barain