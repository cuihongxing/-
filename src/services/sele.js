import HTTP from '../utils/http'

const _http = new HTTP() 
    
class Sele {  //名称随便起
    newSele(){   //方法名
        return _http.request(
            {
                url: 'https://api.it120.cc/small4/cms/news/list',
            }
        )
    }

    SeleList(SeleId){
        return _http.request(
            {
                // type:'post',
                url: `https://api.it120.cc/small4/cms/news/detail?id=${SeleId}`,
                // data: {
                //     id: SeleId
                // }
            }
        )
    }
}
export default Sele