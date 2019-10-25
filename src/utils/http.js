

import Axios from 'axios'
import Qs from 'qs'

class HTTP {
    request(params){
        return new Promise((resolve,reject)=>{

            Axios({
                method:params.type || 'get',
                url:params.url,
                data:Qs.stringify(params.data)
            })
            .then(res => {
                // console.log(res)
                resolve(res)
            })

        })
        
    }
}

export default HTTP