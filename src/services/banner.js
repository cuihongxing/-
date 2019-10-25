import HTTP from '../utils/http'

const _http = new HTTP() 
    
class Banner {  //名称随便起
    list(){   //方法名
        return _http.request(
            {
                url: 'https://api.it120.cc/small4/banner/list',
            }
        )
    }
}
export default Banner