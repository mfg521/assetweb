/*

 */
import ajax from '../ajax'
const BASE_URL='http://172.30.1.83:8001'
// const BASE_URL='http://127.0.0.1:8001'
// const BASE_URL='/api'


//1、登陆接口
export const userLogin=(userVo)=>ajax(BASE_URL+"/user/login",userVo,"POST")

