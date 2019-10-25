
import HTTP from '../utils/http'

const _http = new HTTP() 
    
class Login {  //名称随便起

    //图形验证码
    // RegisterPic(title){
    //     return _http.request(
    //         {
    //             type: 'post',
    //             url: `https://api.it120.cc/small4/verification/pic/get?id=${title}`,
    //         }
    //     )
    // }
    //短信验证
    RegisterGet(obj){
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/verification/sms/get',
                data: {
                    mobile:obj.mobile,
                    key:obj.key,
                    picCode:obj.picCode
                }
            }
        )
    }

    //点击注册时
    Register(newObj){
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/user/m/register',
                data: {
                    mobile:newObj.mobile,
                    pwd:newObj.pwd,
                    code:newObj.code
                }
            }
        )
    }

    //登录接口
    LoginRe(obj){
        return _http.request(
            {
                type: 'post',
                url: 'https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey',
                data: {
                    mobile:obj.mobile,
                    pwd:obj.pwd
                }
            }
        )
    }

}
export default Login