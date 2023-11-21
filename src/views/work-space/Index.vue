<!--
*@author andrew
*@date 2023/11/10 11:08
-->
<script setup>
import {RouterView} from "vue-router";

</script>

<template>
<div class="work-space">
  <div class="router-menu">
    一级菜单
  </div>
  <div class="work-space-right">
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </RouterView>
  </div>
</div>
</template>

<style lang="less" scoped>
.work-space{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  .router-menu{
    width: 15%;
    background-color: var(--bkg-clr);
  }
  .work-space-right{
    width: 85%;
    background-color: var(--light-bgk-clr);
  }
}


</style>
