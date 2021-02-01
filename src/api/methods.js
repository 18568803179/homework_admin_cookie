import { request } from './axios';

//登录
export const Login = (params = '') => request('post', `/manage/user/login.do?username=${params.username}&&password=${params.password}`, params);

// 商品管理：
export const getShop = (params) => request('get', `/manage/product/list.do?pageNum=${params.num}`)

//搜索
export const Search = (params) => request('get', `/manage/product/search.do?listType=search&pageNum=1&${params.condition}=${params.value}`)

//修改状态
export const updateStatus = (params) => request('get', `/manage/product/set_sale_status.do?productId=${params.id}&status=${params.status}`)

//图片上传
export const imgUpload = (params) => request('post', '/manage/product/upload.do', params);

//添加商品
export const saveShop = (params) => {
  let {categoryId,name,subtitle,subImages,detail,price,stock,status}=params
  request('get', `/manage/product/save.do?categoryId=${categoryId}&name=${name}&subtitle=${subtitle}&subImages=${subImages}&price=${price}&stock=${stock}&status=1`)
}
// 品类管理：
export const getCateGory = (params=0) => request('get', `/manage/category/get_category.do?categoryId=${params}`)

//订单管理
export const getOrder = (params) => request('get', `manage/order/list.do?pageNum=${params.pageNum}`)


//组件内使用方法
// import {Login} from '@/api/methods.js'




