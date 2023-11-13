<script setup lang="ts">
import { useRegistStore } from "@/stores/auth";
const registStore = useRegistStore()

</script>

<template>
  <el-aside class="left-container">
    <img src="../../assets/img/白子.jpg" >
  </el-aside>
  <el-main class="right-container">
    <div class="form-container">
      <div class="pageTitle">注册</div>
 
      <el-form :model="registStore.form" label-position="top">

        <el-form-item label="工号EMID" class="custom-form-item">
          <el-input
              v-model="registStore.form.EMID"
              placeholder="Please input EMID"
              class="mode"/>
        </el-form-item>

        <el-form-item label="手机号码TEl" class="custom-form-item">
          <el-input
              v-model="registStore.form.TEL"
              placeholder="Please input TEL"/>
        </el-form-item>

        <el-form-item label="用户名Username" class="custom-form-item">
          <el-input
              v-model="registStore.form.username"
              placeholder="Please input username"/>
        </el-form-item>

        <el-form-item label="密码Password" class="custom-form-item">
          <el-input
              v-model="registStore.form.password"
              type="password"
              placeholder="Please input password"
              show-password />
        </el-form-item>

      </el-form>

      <div class="backBottom">
        <el-button class="backButton">返回</el-button>
        <el-button class="registerButton">注册</el-button>
        <br>
        <RouterLink to="/auth/login">
          已经有账号? 登录
        </RouterLink>
      </div>
    </div>
  </el-main>

</template>
<style lang="less">
.left-container {
  position: relative;
  width: 60%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: linear-gradient(to bottom right, rgb(249, 241, 189), rgb(195, 222, 254));
  img{
    width:50%;
    height: 50%;
    margin-left: 15%;
    margin-top: 25%;
  }
}
.right-container{
  position: absolute;
  right: 0px;
  background-color: #fff;
  width: 50%;
  height: 100%;
  border-radius: 20px;

  .form-container{
    margin-top: 8%;
    font-size: medium;
    .pageTitle{
      font-size: larger;
      margin-bottom: 7%;
    }
    .el-form{
      .el-form-item__label{
        font-size: 12px;
        color: rgb(157,186,220);
        margin-bottom: 1px;
      }
      .custom-form-item {
        margin-bottom: 1px;
      }
      .el-input{
        --el-input-border-color: #fff;
        --el-input-hover-border-color: rgb(157,186,220);
        --el-input-focus-border-color: rgb(157,186,220);
      }
      a{
        position: absolute;
        right: 10%;
        color: rgb(157,186,220);
        text-decoration: None;
      }
    }
  }
}// right container

.backBottom{
  margin-top: 25px;
  margin-left: 7%;
  font-size: small;
  .backButton{
    color: #fff;
    width:37%;
    height: 15%;
    background-color: rgb(237, 229, 162);
    --el-button-hover-bg-color: #fff;
    --el-button-hover-text-color:  rgb(237, 229, 162);
    --el-button-hover-border-color:  rgb(237, 229, 162);
    border-radius: 10px;
  }
  .registerButton {
  color: #fff;
  width: 50%;
  height: 15%;
  background-color:  rgb(157,186,220); 
  --el-button-hover-bg-color: #fff;
  --el-button-hover-text-color: rgb(157,186,220);
  --el-button-hover-border-color: rgb(157,186,220); 
  border-radius: 10px;
}
  a{
    position: absolute;
    margin-left: 16%;
    color: rgb(157,186,220);
    text-decoration: None;
  }
}

</style>
