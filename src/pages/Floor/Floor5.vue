<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">
    <!--头部-->
    <login-header></login-header>

    <div class="ivu-layout-content" style="height: 92%">
      <div style="height: 100%">

        <div class="floorfive" v-show="changeIsShow" :class="{'meng ': changeIsShow}" style="height: 0%">
          <a><div class="one_five" @click="clickOnes(621)" @mouseover=""></div></a>
          <a><div class="two_five" @click="clickOnes(625)"></div></a>
          <a><div class="three_five" @click="clickOnes(628)"></div></a>
          <a><div class="four_five" @click="clickOnes(630)"></div></a>
          <a><div class="five_five" @click="clickOnes(635)"></div></a>

          <a><div class="seven_five" @click="clickOnes(619)"></div></a>
          <a><div class="eight_five" @click="clickOnes(612)"></div></a>
          <a><div class="ten_five" @click="clickOnes(605)"></div></a>
          <a><div class="eleven_five" @click="clickOnes(601)"></div></a>
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
        const result = await reqRoomInfoByFloor({floor: 5})
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

  .floorfive {

    width: 100%
    padding-bottom 50%
    background: url("/dist/static/images/floor/5thFloor.png") no-repeat
    background-size: 100% //背景图片所占夫级的百分比
    position: relative
    text-align: center
    height 0Px
  }

  div.floorfive div {
    border 2px solid #000000
    margin-right -1px

  }

  div.floorfive div:hover {
    border 2px solid blue
    background-color rgba(150, 150, 91, 0.51)

  }

  .one_five {
    width: 28%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(75, 70, 91, 0.51)
    float left
    flex 1 1 auto
  }

  .two_five {
    width: 14%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(30, 20, 91, 0.51)
    float left
  }

  .three_five {
    width: 16%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(150, 70, 50, 0.51)
    float left
  }

  .four_five {
    width: 14%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(200, 0, 50, 0.51)
    float left
  }

  .five_five {
    width: 28%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(10, 100, 91, 0.51)
    float left
  }

  //下部分

  .seven_five {
    position: absolute;
    top: 63.5%
    width: 20%
    padding-bottom: 15%
    background-color rgba(75, 70, 91, 0.51)
    float left
    height 0px
  }

  .eight_five {
    position: absolute;
    top: 59.5%
    left: 20%
    width: 22%
    padding-bottom: 17%
    background-color rgba(30, 20, 91, 0.51)
    float left
    height 0px
  }

  .ten_five {
    position: absolute;
    top: 59.5%
    left: 57%
    width: 23%
    padding-bottom: 17%
    background-color rgba(200, 0, 50, 0.51)
    float left
    height 0px
  }

  .eleven_five {
    position: absolute;
    top: 63.5%
    left 80%
    width: 20%
    padding-bottom: 15%
    background-color rgba(10, 100, 91, 0.51)
    float left
    height 0px
  }


</style>
