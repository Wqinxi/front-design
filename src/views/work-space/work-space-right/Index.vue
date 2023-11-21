<!--
*@author andrew
*@date 2023/11/21 22:56
-->
<script setup>
import {RouterView, useRoute, useRouter} from "vue-router";
import {toRefs} from "vue";

const props = defineProps({
  routes:Array
})
const {routes} = toRefs(props)
console.log(routes)
</script>

<template>
<div class="second-router-menu">
  <div class="route-change">
    <el-button v-for="route in routes">
      {{ route.title }}
    </el-button>
  </div>
  <div class="admin-info">
    用户信息
  </div>
</div>
<div class="operating-space">
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </RouterView>
</div>
</template>
<style lang="less" scoped>
.second-router-menu{
  width: 100%;
  height: 20%;
  margin-top: 3%;
  display: flex;
  flex-flow: row;
  .route-change{
    flex: 0 0 60%;
    display: flex;
    flex-flow: row;
    justify-content: left;
    .el-button {
      font-size: 1.2rem;
      color: #000;
      width:40%;
      height: 15%;
      padding: 5%;
      background-color: #fff;
      --el-button-hover-bg-color: var(--bkg-clr);
      --el-button-hover-text-color: rgb(157,186,220);
      --el-button-hover-border-color: rgb(157,186,220);
      border-radius: 25px;
    }
  }
  .admin-info{
    flex: 0 0 40%;

  }
}
.operating-space{
  width: 100%;
  height: 80%;
  background-color: var(--bkg-clr);
}
</style>
