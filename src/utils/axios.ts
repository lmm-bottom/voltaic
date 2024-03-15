import axios from 'axios';
import { showMessage } from "./status";   // 引入状态码文件
import { ElMessage } from 'element-plus'  // 引入el 提示框，这个项目里用什么组件库这里引什么

const instance = axios.create({
    baseURL: `sys/dev`,
    timeout: 3500  //响应时间
})


//http request 拦截器
instance.interceptors.request.use(
    (config) => {
        console.log("请求拦截器");
        let token = localStorage.getItem("token");
        if (token) {
            if (config.headers) {
                config.headers["Authorization"] = token
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//http response 拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);           // 传入响应码，匹配响应码对应信息
            return Promise.reject(response.data);
        } else {
            ElMessage.warning('网络连接异常,请稍后再试!');
        }
    }
);

// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'POST') {
    //设置 url params type 的默认值
    return new Promise((resolve, reject) => {
        let promise
        if (type.toUpperCase() === 'GET') {
            promise = instance({
                url,
                params
            })
        } else if (type.toUpperCase() === 'POST') {
            promise = instance({
                method: 'POST',
                url,
                data: params
            })
        }
        //处理返回
        promise.then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
