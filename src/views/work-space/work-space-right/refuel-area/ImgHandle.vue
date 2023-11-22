<template>
  <div>
    <el-button type="primary" class="button upload-button">
      上传检测图片
      <input
        type="file"
        accept="image/*"
        class="file-input"
      />
    </el-button>
    <el-button type="primary" danger class="button">
      清除已检测缓存
    </el-button>
    <p class="img-tip">
      说明：图片处理功能，需要上传一张图片，然后点击检测按钮，等待结果检出；若重复检测相同图片，则直接显示上次检测结果。
    </p>

    <div style="display: flex">
      <div class="img-view" :style="{ backgroundImage: `url(${sourceImg})` }">
        <div :class="{ scan: isScanning }"></div>
      </div>
      <div
        class="img-view"
        :style="{ backgroundImage: `url(${identifiedImg})` }"
        style="margin-left: 30px"
      ></div>
    </div>
    <div class="scan"></div>
  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()
const sourceImg = ref('')
const identifiedImg = ref('')
const isScanning = ref(false)

</script>

<style lang="less" scoped>
.img {
  &-buttons {
    margin-top: 4px;
  }
  &-tip {
    font-size: 14px;
    color: #ddd;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  &-view {
    flex: 1 0 400px;
    min-height: 64vh;
    border-radius: 8px;
    background-color: rgba(41, 44, 50, 1);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
.upload-button {
  margin-right: 24px;
}

.file-input {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
}

.scan {
  position: relative;
  background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #3b87f7 211%);
  height: 16%;
  animation: radar-beam 3s infinite ease-in-out;
}

@keyframes radar-beam {
  0% {
    top: -6%;
  }
  100% {
    top: 84%;
  }
}
</style>
