<template>
  <div id="app" style="height: 100%">

    <div class="main ivu-layout ivu-layout-has-sider" style="height: 100%;">
      <LeftLayoutSider v-show="$route.meta.showLayoutSider"/>
      <router-view/>

    </div>
  </div>

</template>

<script>
  import LeftLayoutSider from "./components/LeftLayoutSider/leftLayoutSider.vue";

  export default {
    components:{
      LeftLayoutSider
    }
  }

</script>

<style>
  *{
    font-size: 0.6rem;
  }
</style>
