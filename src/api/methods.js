import { request } from './axios';

//登录
export const Login = (params = '') => request('post', `/manage/user/login.do?username=${params.username}&&password=${params.password}`, params);

// 商品管理：
export const getShop = (params) => request('get', `/manage/product/list.do?pageNum=${params.num}`)


// 品类管理：
export const getCateGory = (params) => request('get', `/manage/category/get_category.do?categoryId=${params.categoryId}`)

//订单管理
export const getOrder = (params) => request('get', `manage/order/list.do?pageNum=${params.pageNum}`)


//组件内使用方法
// import {Login} from '@/api/methods.js'




