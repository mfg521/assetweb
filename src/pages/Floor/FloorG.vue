<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">
    <!--头部-->
    <login-header></login-header>

    <div class="ivu-layout-content" style="height: 92%">
      <div style="height: 100%">

        <div class="floorG" v-show="changeIsShow" :class="{'meng ': changeIsShow}" style="height: 0%">
          <a><div class="one_gfloor" @click="clickOnes(101)" @mouseover=""></div></a>
          <a><div class="two_gfloor" @click="clickOnes(102)"></div></a>
          <a><div class="three_gfloor" @click="clickOnes(103)"></div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import LoginHeader from '../../components/LoginHeader/loginHeader'
  import {reqRoomInfoByFloor} from "../../api/room";

  export default {

    data() {
      return {}
    },
    methods: {
      async clickOnes(roomNum) {
        this.$store.dispatch('getRoomInfo',roomNum)
        this.$store.dispatch('getEmployee', {roomNum})
        this.$store.dispatch('changeToFalse')

        //通过楼层号找到对应的房间号，为的是显示头table 601 602 603这些按钮
        const result = await reqRoomInfoByFloor({floor: 1})
        this.$store.dispatch('commitRoom', {room: result})

        this.$router.push({
          name: 'room',
        })


      }
    },

    //初始化执行，相关的属性发生改变
    computed: {
      ...mapState(['room', 'changeIsShow']),
    },

    components: {
      LoginHeader
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .floorG {

    width: 100%
    padding-bottom 80%
    background: url("/dist/static/images/floor/GFloor.jpg") no-repeat
    background-size: 100% //背景图片所占夫级的百分比
    position: relative
    text-align: center
    height 0Px
  }

  div.floorG div {
    border 2px solid #000000
    margin-right -1px

  }

  div.floorG div:hover {
    border 2px solid blue
    background-color rgba(150, 150, 91, 0.51)

  }

  .one_gfloor {
    width: 70%
    padding-bottom 48% //这个是宽度的百分比
    height 0px
    background-color rgba(75, 70, 91, 0.51)
    float left
    flex 1 1 auto
  }

  .two_gfloor {
    width: 41.9%
    padding-bottom 28% //这个是宽度的百分比
    height 0px
    background-color rgba(150, 70, 50, 0.51)
    clear both
    float left
  }

  .three_gfloor {
    width: 58.1%
    padding-bottom 28% //这个是宽度的百分比
    height 0px
    background-color rgba(200, 0, 50, 0.51)
    float left
  }
</style>
