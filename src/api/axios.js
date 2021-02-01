import axios from 'axios';

//引入loading动画
import { Loading } from 'element-ui';

// console.log(env.baseUrl);
const Axios = axios.create({
  baseURL: '/api',
  timeout: 6600,
  withCredentials: true // 允许携带cookie 

});

let loadingInstance = null
// 添加请求拦截器
Axios.interceptors.request.use(config => {
  //加载loading动画
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  // 在发送请求之前做些什么
  // if (localStorage.getItem('token')) {
  //   //设置作者
  //   config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  //   //设置token
  //   // config.headers.token ='Bearer '+ localStorage.getItem('token')
  // }
  return config
}, error =>
  // 对请求错误做些什么
  Promise.reject(error),
);

// 添加响应拦截器
Axios.interceptors.response.use(response => {
  //关闭loading动画
  loadingInstance.close();
  // 对响应数据做点什么
  return response
}
  , error =>
    // 对响应错误做点什么
    Promise.reject(error),
);

export const request = (method, url, params) => {
  if (method === 'get') {
    return Axios.get(url, params);
  }
  return Axios.post(url, params);
};

