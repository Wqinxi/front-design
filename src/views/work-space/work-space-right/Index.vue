<!--
*@author andrew
*@date 2023/11/21 22:56
-->
<script setup>
import {RouterView, useRoute} from "vue-router";
import generateRoutes from "@/assets/js/generateRoutes";

const route = useRoute()
const routes = generateRoutes(route.meta.type)

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
  height: 15%;
  display: flex;
  flex-flow: row;
  .route-change{
    flex: 0 0 60%;
    display: flex;
    flex-flow: row;
    justify-content: left;
    align-items: center;
    .el-button {
      font-size: 1.2rem;
      color: #000;
      width:30%;
      height: 15%;
      padding: 4%;
      background-color: #fff;
      --el-button-hover-bg-color: var(--bkg-clr);
      --el-button-hover-text-color: #000;
      --el-button-hover-border-color: #000;
      --el-button-active-border-color: #000;

      border-radius: 40px;
    }
  }
  .admin-info{
    position: absolute;
    right: 0;
    flex: 0 0 40%;

  }
}
.operating-space{
  width: 100%;
  height: 85%;
}
</style>
