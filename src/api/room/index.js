/*

 */
import ajax from '../ajax'
const BASE_URL='http://172.30.1.83:8001'
// const BASE_URL='http://127.0.0.1:8001'
// const BASE_URL='/api'


//1、
export const reqRoomInfo=(roomNum)=>ajax(BASE_URL+"/room/roomInfo",roomNum,"POST")

//2、根据楼层号码获取每个楼层的room信息
export const  reqRoomInfoByFloor=({floor})=>ajax(BASE_URL+"/room/listroom",{floor},'POST')

