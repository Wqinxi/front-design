<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterView v-slot="{ Component }"></RouterView>
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
</template>
 
<style scoped>

</style>
