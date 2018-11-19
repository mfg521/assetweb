<template>
  <div data-v-22ea91aa="" class="login-con ivu-card" style="position: absolute;background-color: #8c8c8c">
    <div class="ivu-card-head"><p><i class="ivu-icon ivu-icon-log-in"></i>
      welcome login in
    </p></div> <!---->
    <div class="ivu-card-body">
      <div class="login_content">
        <form @submit.prevent="login">
          <div class="on">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="loginUser.userName">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="loginUser.password">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="loginUser.password">
                <div class="switch_button off" :class="showPwd ? 'on' :'off' " @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right:showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="loginUser.captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
                     @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">Login</button>
        </form>
        <a href="javascript:;" class="about_us">About US</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {userLogin} from '../../api/user'
  export default {
    data() {
      return {
        loginUser:{
          userName: '',
          password: '',
          captcha:'',
        },

        showPwd:false,   //是否显示密码

      }
    },
    methods: {
       async login() {
        const userVo=this.loginUser
        const result=await userLogin( userVo)
        console.log(result)
         if(result.code===0){
           this.$router.replace('/home')
           const user=result.data
           this.$store.dispatch('recordUser',user)
           this.$store.dispatch('getHomeData')
         }
      },

      getCaptcha(){
        //要求每次指定的src要不一样才能重新获取图片验证码
        this.$refs.captcha.src='http://localhost:4000/captcha?time='+Date.now()
      },
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .ivu-card-head p {
    font-size 18px
  }
  .login-con {
    position absolute
    right 40%
    top 50%
    transform translateY(-60%)
    width 400px
    background-color #8c8c8c
  }

  .login_content
    > form
      > div
        display none
        &.on
          display block
        input
          width 100%
          height 100%
          padding-left 10px
          box-sizing border-box
          border 1px solid #ddd
          border-radius 4px
          outline 0
          font 400 14px Arial
          &:focus
            border 1px solid #02a774
        .login_message
          position relative
          margin-top 16px
          height 48px
          font-size 14px
          background #fff
          .get_verification
            position absolute
            top 50%
            right 10px
            transform translateY(-50%)
            border 0
            color #ccc
            font-size 14px
            background transparent
            &.right_phone
              color: black
        .login_verification
          position relative
          margin-top 16px
          height 48px
          font-size 14px
          background #fff
          .switch_button
            font-size 12px
            border 1px solid #ddd
            border-radius 8px
            transition background-color .3s, border-color .3s
            padding 0 6px
            width 30px
            height 16px
            line-height 16px
            color #fff
            position absolute
            top 50%
            right 10px
            transform translateY(-50%)
            &.off
              background #fff
              .switch_text
                float right
                color #ddd
            &.on
              background #02a774
            > .switch_circle
              //transform translateX(27px)
              position absolute
              top -1px
              left -1px
              width 16px
              height 16px
              border 1px solid #ddd
              border-radius 50%
              background #fff
              box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
              transition transform .3s
              &.right
                transform translateX(20px)
        .login_hint
          margin-top 12px
          color #999
          font-size 14px
          line-height 20px
          > a
            color #02a774
      .login_submit
        display block
        width 100%
        height 42px
        margin-top 30px
        border-radius 4px
        background #4cd96f
        color #fff
        text-align center
        font-size 16px
        line-height 42px
        border 0
    .about_us
      display block
      font-size 12px
      margin-top 20px
      text-align center
      color #999
</style>
