import Vue from 'vue'
import Router from 'vue-router'
import FloorG from '../pages/Floor/FloorG'
import Floor3 from '../pages/Floor/Floor3'
import Floor5 from '../pages/Floor/Floor5'
import Floor6 from '../pages/Floor/Floor6'
import Floor26 from '../pages/Floor/Floor26'
import Room621 from '../pages/rooms/6FloorRooms/Room'
import assetManager from '../pages/assetManger/AssetManager'
import record from '../pages/Record/Record'
import login from '../pages/Login/login'
import home from '../pages/home/home'
import employee from '../pages/EmployeeManager/Employee'




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
      path:'/buildingo/gfloor',
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
      path: '/buildingt/6floor',
      component: Floor26,
      meta: {
        showLayoutSider: true
      }
    },
    {
      path:'/building/room',
      component:Room621,
      name:'room',
      meta:{
        showLayoutSider:true
      }

    },{
      path:'/asset/assetmanager',
      component:assetManager,
      name:'abceefg',
      meta:{
        showLayoutSider:true
      }

    }, {
      path: '/record/record',
      component: record,
      name:'record',
      meta: {
        showLayoutSider: true
      }

    }, {
      path: '/employee/employee',
      component: employee,
      meta: {
        showLayoutSider: true
      }

    }
  ]
})
