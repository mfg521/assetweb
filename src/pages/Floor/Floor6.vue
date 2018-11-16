<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">
    <!--头部-->
    <login-header></login-header>

    <div class="ivu-layout-content" style="height: 92%">
      <div style="height: 100%">

        <div class="floorsix" v-show="changeIsShow" :class="{'meng ': changeIsShow}" style="height: 0%">
          <a><div class="one_six" @click="clickOnes(621)" @mouseover=""></div></a>
          <a><div class="two_six" @click="clickOnes(625)"></div></a>
          <a><div class="three_six" @click="clickOnes(628)"></div></a>
          <a><div class="four_six" @click="clickOnes(630)"></div></a>
          <a><div class="five_six" @click="clickOnes(635)"></div></a>

          <a><div class="seven_six" @click="clickOnes(619)"></div></a>
          <a><div class="eight_six" @click="clickOnes(612)"></div></a>
          <a><div class="ten_six" @click="clickOnes(605)"></div></a>
          <a><div class="eleven_six" @click="clickOnes(601)"></div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import LoginHeader from '../../components/LoginHeader/loginHeader'

  export default {

    data() {
      return {}
    },
    methods: {
      clickOnes(roomNum) {
        // this.$store.dispatch('commitRoom', {room: result})


        this.$store.dispatch('getRoomInfo',roomNum)
        this.$store.dispatch('getEmployee', {roomNum})
        this.$store.dispatch('changeToFalse')

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

  .floorsix {

    width: 100%
    padding-bottom 50%
    background: url("../Floor/images/6thFloor.jpg") no-repeat
    background-size: 100% //背景图片所占夫级的百分比
    position: relative
    text-align: center
    height 0Px
  }

  div.floorsix div {
    border 2px solid #000000
    margin-right -1px

  }

  div.floorsix div:hover {
    border 2px solid blue
    background-color rgba(150, 150, 91, 0.51)

  }

  .one_six {
    width: 28%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(75, 70, 91, 0.51)
    float left
    flex 1 1 auto
  }

  .two_six {
    width: 14%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(30, 20, 91, 0.51)
    float left
  }

  .three_six {
    width: 16%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(150, 70, 50, 0.51)
    float left
  }

  .four_six {
    width: 14%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(200, 0, 50, 0.51)
    float left
  }

  .five_six {
    width: 28%
    padding-bottom 13% //这个是宽度的百分比
    height 0px
    background-color rgba(10, 100, 91, 0.51)
    float left
  }

  //下部分

  .seven_six {
    position: absolute;
    top: 63.5%
    width: 20%
    padding-bottom: 15%
    background-color rgba(75, 70, 91, 0.51)
    float left
    height 0px
  }

  .eight_six {
    position: absolute;
    top: 59.5%
    left: 20%
    width: 22%
    padding-bottom: 17%
    background-color rgba(30, 20, 91, 0.51)
    float left
    height 0px
  }

  .ten_six {
    position: absolute;
    top: 59.5%
    left: 57%
    width: 23%
    padding-bottom: 17%
    background-color rgba(200, 0, 50, 0.51)
    float left
    height 0px
  }

  .eleven_six {
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
