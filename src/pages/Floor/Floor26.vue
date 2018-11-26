<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">
    <!--头部-->
    <login-header></login-header>

    <div class="ivu-layout-content" style="height: 92%">
      <div style="height: 100%">

        <div class="floor2six" v-show="changeIsShow" :class="{'meng ': changeIsShow}" style="height: 0%">
          <a><div class="one_2six" id="one_2six"  @click="clickOnes(2601)" @mouseover="changeSame(2601)" @mouseout="changeEnd(2601)" style="border-bottom: none"></div></a>
          <a><div class="two_2six" @click="clickOnes(2602)"></div></a>
          <a><div class="three_2six" id="three_2six" @click="clickOnes(2603)"
                  @mouseover="changeSame(2603)" @mouseout="changeEnd(2603)" style="border-bottom: none"></div></a>
          <a><div class="seven_2six" id="seven_2six" @click="clickOnes(2601)"
                  @mouseover="changeSame(2601)" @mouseout="changeEnd(2601)" style="border-top: none"></div></a>
          <a><div class="eight_2six" @click="clickOnes(2604)"></div></a>
          <a><div class="ten_2six" @click="clickOnes(2605)"></div></a>
          <a><div class="eleven_2six" id="eleven_2six" @click="clickOnes(2603)"
                  @mouseover="changeSame(2603)" @mouseout="changeEnd(2603)" style="border-top: none"></div></a>
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
        const result = await reqRoomInfoByFloor({floor: 26})
        this.$store.dispatch('commitRoom', {room: result})

        this.$router.push({
          name: 'room',
        })
      },
      changeSame(roomNum){
        if(roomNum===2601) {
          document.getElementById('seven_2six').style.backgroundColor = "rgba(150, 150, 91, 0.51)";
          document.getElementById('one_2six').style.backgroundColor = "rgba(150, 150, 91, 0.51)";
        }else {
          document.getElementById('three_2six').style.backgroundColor = "rgba(150, 150, 91, 0.51)";
          document.getElementById('eleven_2six').style.backgroundColor = "rgba(150, 150, 91, 0.51)";

        }
      },
      changeEnd(roomNum){
        if(roomNum===2601) {
          document.getElementById('seven_2six').style.backgroundColor = "rgba(75, 70, 91, 0.51)";
          document.getElementById('one_2six').style.backgroundColor = "rgba(75, 70, 91, 0.51)";
        }else {
          document.getElementById('three_2six').style.backgroundColor = "rgba(150, 70, 50, 0.51)";
          document.getElementById('eleven_2six').style.backgroundColor = "rgba(150, 70, 50, 0.51)";

        }
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

  .floor2six {

    width: 100%
    padding-bottom 50%
    background: url("/dist/static/images/floor/26Floor.jpg") no-repeat
    background-size: 100% //背景图片所占夫级的百分比
    position: relative
    text-align: center
    height 0Px
  }

  div.floor2six div {
    border 2px solid #000000
    margin-right -2px
    margin-bottom -2px

  }

  div.floor2six div:hover {
    border 2px solid blue
    background-color rgba(150, 150, 91, 0.51)

  }

  .one_2six {
    width: 37.5%
    padding-bottom 33% //这个是宽度的百分比
    height 0px
    background-color rgba(75, 70, 91, 0.51)
    float left
    flex 1 1 auto
  }

  .two_2six {
    width: 25.5%
    padding-bottom 15% //这个是宽度的百分比
    height 0px
    background-color rgba(30, 20, 91, 0.51)
    float left
  }

  .three_2six {
    width: 37%
    padding-bottom 33% //这个是宽度的百分比
    height 0px
    background-color rgba(150, 70, 50, 0.51)
    float left
    border-bottom white 2px solid
  }

  //下部分

  .seven_2six {
    position: absolute;
    top: 66.4%
    width: 25%
    padding-bottom: 13.2%
    background-color rgba(75, 70, 91, 0.51)
    float left
    height 0px
  }

  .eight_2six {
    position: absolute;
    top: 66%
    left: 25%
    width: 26.2%
    padding-bottom: 13.2%
    background-color rgba(30, 20, 91, 0.51)
    float left
    height 0px
  }

  .ten_2six {
    position: absolute;
    top: 66%
    left: 51.2%
    width: 24%
    padding-bottom: 13.2%
    background-color rgba(200, 0, 50, 0.51)
    float left
    height 0px
  }

  .eleven_2six {
    position: absolute;
    top: 66.4%
    left 75.2%
    width: 24.5%
    padding-bottom: 13.2%
    background-color rgba(150, 70, 50, 0.51)
    float left
    height 0px
    border-top  white solid 2px
  }


</style>
