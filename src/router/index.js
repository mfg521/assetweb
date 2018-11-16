import Vue from 'vue'
import Router from 'vue-router'
import FloorG from '../pages/Floor/FloorG'
import Floor3 from '../pages/Floor/Floor3'
import Floor5 from '../pages/Floor/Floor5'
import Floor6 from '../pages/Floor/Floor6'
import Room621 from '../pages/rooms/6FloorRooms/Room'
import assetManagerBuildingOne from '../pages/assetManger/BuildingOne/BuildOne'
import assetManagerBuildingTwo from '../pages/assetManger/BuildingOne/BuildTwo'
import ArecordManagerBuildingOne from '../pages/ARecordManger/BuildingOne/BuildOne'
import login from '../pages/Login/login'
import home from '../pages/home/home'
import EmpManager from '../pages/EmployeeManager/BuildingTwo/BuildTwoE'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login',
    },
    {
      path:'/login',
      component:login

    },

    {
      path:'/home',
      component:home,
      name:'home',
      meta:{
        showLayoutSider:true
      }

    },

    {
      path:'/buildingone/gfloor',
      component:FloorG,
      meta:{
        showLayoutSider:true
      }

    },

    {
      path:'/buildingo/3floor',
      component:Floor3,
      meta:{
        showLayoutSider:true
      }

    },
    {
      path:'/buildingo/5floor',
      component:Floor5,
      meta:{
        showLayoutSider:true
      }

    },
    {
      path: '/buildingo/6floor',
      component: Floor6,
      meta: {
        showLayoutSider: true
      }
    },
    {
      path:'/buildingo/6floor/room',
      component:Room621,
      name:'room',
      meta:{
        showLayoutSider:true
      }

    },{
      path:'/assetm/buildingone',
      component:assetManagerBuildingOne,
      meta:{
        showLayoutSider:true
      }

    },{
      path:'/assetm/buildingtwo',
      component:assetManagerBuildingTwo,
      name:'abceefg',
      meta:{
        showLayoutSider:true
      }

    }, {
      path: '/arecordm/buildingone',
      component: ArecordManagerBuildingOne,
      name:'arecord',
      meta: {
        showLayoutSider: true
      }

    }, {
      path: '/employeem/buildingtwo',
      component: EmpManager,
      name:'arecord',
      meta: {
        showLayoutSider: true
      }

    }
  ]
})
