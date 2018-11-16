<template>
    <div class="header-con ivu-layout-header" style="height: 8%">
      <div class="header-bar"><a type="text" class="sider-trigger-a" style="float: left;"><i
        class="ivu-icon ivu-icon-navicon-round" style="font-size: 26px;"></i></a>
        <div class="custom-bread-crumb" style="margin-left: 30px; float: left;">
          <div @click="goHome" class="ivu-breadcrumb" style="font-size: 14px;">
            <span>
              <a class="ivu-breadcrumb-item-link">
               home
              </a>
            </span>
          </div>
        </div>
        <div class="custom-content-con" style="display: inline-block;">

          <div class="user-avator-dropdown">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel">
                <a href="javascript:void(0)"><span class="main-user-name">{{userInfo.userName}}</span>
                  <i class="ivu-icon ivu-icon-arrow-down-b" style="font-size: 12px;"></i></a>
                <a href="javascript:void(0)">
                      <span class="ivu-avatar ivu-avatar-circle ivu-avatar-default ivu-avatar-image">
                      <img src="http://p95vygq7v.bkt.clouddn.com/actor.png"></span>
                </a>
              </div>
              <div class="ivu-select-dropdown" style="display: none;">
                <ul class="ivu-dropdown-menu">
                  <li class="ivu-dropdown-item">log out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['userInfo'])
    },

    methods:{
      goHome(){
        this.$router.push({
          path: '/home',
          name: 'home',
          params: {

          },
        })
      }
    }


  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
