<!--
*@author andrew
*@date 2023/11/10 10:52
-->
<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <el-container direction="horizontal" class="login-container">
    <RouterView></RouterView>
  </el-container>

</template>

<style>
.login-container{
  display: flex;

  position: absolute;
  width: 50%;
  height: 70%;
  margin-left: 25%;
  margin-top: 8%;
  border-radius: 20px;
}
</style>
