<!--
*@author andrew
*@date 2023/11/21 22:56
-->
<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
console.log(router)
</script>

<template>
<div class="second-router-menu">
  二级菜单
</div>
<div class="operating-space">

</div>
</template>
<style lang="less" scoped>
.second-router-menu{
  width: 100%;
  height: 20%;
}
.operating-space{
  width: 100%;
  height: 80%;
  background-color: var(--bkg-clr);
}
</style>
