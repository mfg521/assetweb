<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">
    <!--头部-->
    <login-header></login-header>

    <div class="ivu-layout-content" style="height: 92%">
      <div style="height: 100%">
        <div class="homeOne">
          <div class="homeHeader">
            Chine Petroleun Engineering -Dubai I.T Asset Tracker
          </div>
        </div>
        <div class="homeTwo" v-for=" (assetHomeD,index) in assetHomeData  " :key="index">
          <a>
            <div style="height: 22%" @click="homeClick(index)">
              <div class="computer" style="float: left">
                <i v-if="index===0" class="iconfont icon-zhuji ic-home"></i>
                <i v-else-if="index===1" class="iconfont icon-computer ic-home"></i>
                <i v-else-if="index===2" class="iconfont icon-laptop ic-home"></i>
                <i v-else="index===3" class="iconfont icon-telephone2 ic-home"></i>
              </div>

              <div class="cpuCount" style="float: left;margin-top: 10%;">
                <div class="cpe" style="font-size: 1.2rem">
                  {{assetTypes[index]}}
                </div>
                <div class="count" style="font-size: 1.2rem">
                  {{assetHomeD.assetTotal}}
                </div>
              </div>
            </div>
          </a>

          <!--model型号-->
          <div style="height: 46%;border: 1px solid black;margin-left: 2%;margin-right: 2%">
            <div style="font-size: 1rem;text-align: center;height: 30%">
              SUMMARIZATION OF EQUIPMENT
            </div>
            <div style="margin-top:-2%;height: 68%">
              <a>
                <div v-for="(assetHomeModelVo,indexs) in assetHomeD.assetHomeModelVos" :key="indexs"
                     style="height: 20%;margin-top: 5%"
                     @click="searchByAssetInfo(index,assetHomeModelVo.computerModel)">
                  {{assetHomeModelVo.computerModel}}:{{assetHomeModelVo.computerModelCount}}
                </div>
              </a>
            </div>
          </div>
          <!--状态Status-->
          <div style="height: 30%;border: 1px solid black;margin-left: 2%;margin-right: 2%">
            <div style="font-size: 1rem;text-align: left;height: 30%;line-height: 250%;margin-left: 2%">
              STATUS:
            </div>
            <div class="" style="margin-top:-2%;height: 70%">
              <a>
                <div v-for="(assetHomeStatusVos,indexss) in assetHomeD.assetHomeStatusVo" :key="indexss"
                     style="height: 30%;" @click="searchStatus(index,assetHomeStatusVos.assetStatus)">
                  <i v-if="indexss===2" class="iconfont  icon-wrong icon-status" style="font-size: 20px"></i>
                  <i v-else-if="indexss===1" class="iconfont  icon-shiyongzhong icon-status"
                     style="font-size: 20px"></i>
                  <i v-else class="iconfont  icon-kucun icon-status" style="font-size: 20px"></i>
                  :&nbsp;{{assetHomeStatusVos.assetStatusCount}}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import loginHeader from '../../components/LoginHeader/loginHeader'
  import {mapActions, mapState} from 'vuex'

  export default {
    data() {
      return {
        assetTypes: ["CPU", "MONI", "LAP", "PHONE"]

      }
    },
    components: {
      loginHeader
    },
    mounted() {
      this.getHomeData()

    },
    methods: {
      ...mapActions(['getHomeData']),

      homeClick(index) {
        this.$router.push({
          path: '/assetmanager/buildingtwo',
          name: 'abceefg',
          params: {
            assetType: index + 1
          },
        })
      },
      searchByAssetInfo(index, computerModel) {
        this.$router.push({
          path: '/assetmanager/buildingtwo',
          name: 'abceefg',
          params: {
            assetType: index + 1,
            computerModel:computerModel
          },
        })
      },
      searchStatus(index, assetStatus) {
        this.$router.push({
          path: '/assetmanager/buildingtwo',
          name: 'abceefg',
          params: {
            assetType: index + 1,
            assetStatus:assetStatus
          },
        })
      }

    },
    computed: {
      ...mapState(['assetHomeData'])
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeOne {
    text-align: center;
    font-size: 1rem;
    border: 3px solid black;
    height: 10%;
    line-height: 300%;
    margin 2%
  }

  .homeTwo {
    width 22.5%
    color black
    text-align: center;
    font-size: 1rem;
    border: 3px solid black;
    height: 84%;
    margin-left: 2%;
    float left
  }

  .ic-home {
    padding-left 2%
    font-size 4rem
  }

  .homeHeader {
    height 100%
    text-align center
    font-size: 1.5rem;
  }

  .computer {
    text-align center
    width: 50%
  }

  .icon-wrong {
    color red
  }

  .icon-shiyongzhong {
    color black
  }

  .icon-kucun {
    color black
  }

</style>
