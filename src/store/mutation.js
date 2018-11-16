/*

 */

import {
  RECEIVE_EMPLOYEE,
  RECEIVE_ROOM,
  RECEIVE_CHANG,
  REC_CHTOFALSE,
  RECEIVE_USER_INFO,
  RECEIVE_HOME_DATA,
  RECEIVE_ROOMINFO
} from "./mutation-types";

export default {
  [RECEIVE_EMPLOYEE](state, {employee}) {
    state.employee = employee
  },
  [RECEIVE_ROOM](state, {room}) {
    state.room = room
  },

  [RECEIVE_ROOMINFO](state, {roominfo}) {
    state.roominfo = roominfo
  },

  [RECEIVE_CHANG](state){
    state.changeIsShow=true
  },
  [REC_CHTOFALSE](state){
    state.changeIsShow=false
  },

  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },

  [RECEIVE_HOME_DATA](state,{assetHomeData}){
    state.assetHomeData=assetHomeData
  }
}
