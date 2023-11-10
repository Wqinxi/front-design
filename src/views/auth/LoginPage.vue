<script setup lang="ts">
import { useLoginStore } from "@/stores/auth.ts";
const loginStore = useLoginStore()

</script>

<template>
  <el-aside class="left-container">
    <img src="../../assets/img/白子.jpg" >
  </el-aside>
  <el-main class="right-container">
    <div class="form-container">
      <div class="pageTitle">登录</div>
      <el-form :model="loginStore.form" label-position="top">
        <el-form-item label="用户名Username">
          <el-input
              v-model="loginStore.form.username"
              placeholder="Please input username"/>
        </el-form-item>
        <el-form-item label="密码Password">
          <el-input
              v-model="loginStore.form.password"
              type="password"
              placeholder="Please input password"
              show-password />
        </el-form-item>
        <RouterLink to="/auth/retrieve-password">
          忘记密码
        </RouterLink>
      </el-form>
      <div class="formBottom">
        <el-button>登录</el-button>
        <br>
        <RouterLink to="/auth/register">
          还没有账号? 注册
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
    margin-top: 20%;
    font-size: medium;
    .pageTitle{
      font-size: larger;
      margin-bottom: 10%;
    }
    .el-form{
      .el-form-item__label{
        color: rgb(157,186,220);
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

.formBottom{
  margin-top: 22%;
  margin-left: 15%;
  font-size: small;
  .el-button{
    color: #fff;
    width:80%;
    height: 15%;
    background-color: rgb(157,186,220);
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
