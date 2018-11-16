<template>
  <!--左侧菜单栏-->
  <div class="ivu-layout-sider"
       style="width: 15%;  flex: 0 1 auto; height: 100%">
    <div class="ivu-layout-sider-children">
      <div class="side-menu-wrapper">
        <div class="logo-con"><img src="../../assets/logo.png"/></div>
        <ul class="ivu-menu ivu-menu-dark ivu-menu-vertical" style="width: auto;" v-for="item in items">
          <li class="ivu-menu-submenu">
            <div class="ivu-menu-submenu-title">
              <i class="ivu-icon ivu-icon-clipboard"></i>
              <span @click="showToggle(item)">{{item.name}}</span>
              <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
            </div>
            <ul class="ivu-menu" data-old-padding-top="" data-old-padding-bottom=""
                data-old-overflow="" v-for="subItem in item.subItems" v-show="item.isSubShow">
              <li class="ivu-menu-item" style="padding-left: 43px;" @click="findRoom(subItem.floor)">
                <router-link :to="'/'+item.name.toLowerCase()+'/'+subItem.name.toLowerCase()" replace>
                  <span>{{subItem.name}}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import {reqRoomInfoByFloor} from "../../api";

  export default {
    data() {
      return {
        items: [
          {
            name: 'BuildingO',
            isSubShow: false,

            subItems: [
              {name: 'GFloor', floor: 'G'},
              {name: '3Floor', floor: '3'},
              {name: '5Floor', floor: '5'},
              {name: '6Floor', floor: '6'},
            ]
          },
          {
            name: 'BuildingT',
            isSubShow: false,
            subItems: [
              {name: '6Floor', floor: '26'}
            ]
          }, {
            name: 'Report',
            isSubShow: false,
            subItems: [
              {name: 'BuildingOne'},
              {name: 'BuildingTwo'},
              {name: 'Access Card'}
            ]

          }, {
            name: 'AssetM',
            isSubShow: false,
            subItems: [
              {name: 'BuildingOne'},
              {name: 'BuildingTwo'}
            ]

          }, {
            name: 'ARecordM',
            isSubShow: false,
            subItems: [
              {name: 'BuildingOne'},
              {name: 'BuildingTwo'}
            ]

          }, {
            name: 'EmployeeM',
            isSubShow: false,
            subItems: [
              {name: 'BuildingOne'},
              {name: 'BuildingTwo'}
            ]

          }
        ]
      }
    },
    methods: {
      showToggle: function (item) {
        item.isSubShow = !item.isSubShow;
      },
      async findRoom(floor) {
        const result = await reqRoomInfoByFloor({floor})
        this.$store.dispatch('commitRoom', {room: result})
        this.$store.dispatch('changeIsShow')

      }
    }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
