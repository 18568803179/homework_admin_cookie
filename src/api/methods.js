import { request } from './axios';

//示例
export const Login = (params='') => request('post', '/manage/user/login.do',params);
//组件内使用方法
// import {Login} from '@/api/methods.js'




