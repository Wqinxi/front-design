<!--
*@author andrew
*@date 2023/11/10 11:08
-->
<script setup>
import {RouterView} from "vue-router";
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()

const items = ref([
  {id:0, icon:'', type: '加油区', url:'/refuel-area'},
  {id:1, icon:'', type: '卸油区', url: '/unload-area'},
  {id:2, icon:'', type: '后台管理', url: '/manage'},
  {id:3, icon:'', type: '安全措施', url:'/secure'}
])

</script>

<template>
<div class="work-space">
  <div class="router-menu">
    <ul>
      <li
        v-for="item in items" :key="item.id"
        :class="['list', item.type===route.meta.type?'active':'']"
        @click="$router.push(item.url)"
      >
        <RouterLink :to="item.url">
          <span class="icon">
          <i :class="item.icon"></i>
        </span>
          <span class="text">
          {{ item.type }}
        </span>
        </RouterLink>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
  <div class="work-space-right">
    <RouterView v-slot="{ Component }" >
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
  background-color: var(--light-bkg-clr);
  .router-menu{
    position: relative;
    width: 8%;
    height: 100%;
    background: var(--bkg-clr);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    ul{
      li{
        position: relative;
        list-style: none;
        width: 6rem;
        height: 6rem;
        z-index: 1;
        .router-link{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          text-align: center;
          font-weight: 500;
          .icon{
            position: relative;
            display: block;
            line-height: 75px;
            font-size: 1.5em;
            text-align: center;
            transition: 0.5s;
            color: #fff
          }
        }
      }// li
      .router-link-active a .icon {
        color: var(--active-clr);
        transform: translateY(-32px);
      }// active li
    } // ul
  }// router-menu
  .work-space-right{
    position: absolute;
    width: 88%;
    height: 100%;
    right: 0;
    background-color: var(--light-bkg-clr);
  }
}


</style>
