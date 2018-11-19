/*
通过mutation间接更新state的多个方法的对象
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

import {reqRoomInfo} from '../api/room'
import {reqEmpInfo} from "../api/employee";
import {reqAssetHomeData} from '../api/asset'

export default {
  async getEmployee({commit}, {roomNum}) {
    //send  ajax request
    const result = await reqEmpInfo({roomNum})
    {
      // commit mutation
      const employee = result.data
      commit(RECEIVE_EMPLOYEE, {employee})
    }

  },

  async getRoomInfo({commit}, roomNum) {
    //send  ajax request
    const result = await reqRoomInfo(roomNum)
    {
      // commit mutation
      const roominfo = result.data
      commit(RECEIVE_ROOMINFO, {roominfo})
    }

  },

  commitRoom({commit}, {room}) {
    commit(RECEIVE_ROOM, {room})
  },

  changeIsShow({commit}) {
    commit(RECEIVE_CHANG)
  },

  changeToFalse({commit}) {
    commit(REC_CHTOFALSE)
  },

  //同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  //异步获取首页数据
  async getHomeData({commit}) {
    const assetHomeDatas = await reqAssetHomeData()
    const assetHomeData = assetHomeDatas.data
    commit(RECEIVE_HOME_DATA, {assetHomeData})


  },

}
