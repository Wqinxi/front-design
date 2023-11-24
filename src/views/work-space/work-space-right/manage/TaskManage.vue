<script setup>


// pagination
import {computed, ref} from "vue";

const totalPage = ref(20)
const currentPage = ref(5)
const pageSize = ref(7)
const skipPageNumber = ref(1)
const pageList = computed(()=>{
  const halfPageSize = Math.floor(pageSize.value/2)
  const list = []
  if(totalPage.value <= pageSize.value){
    for(let i = 1;i<=totalPage.value;++i){
      list.push(i)
    }
  }else if (currentPage.value >= 1+halfPageSize && currentPage.value <= totalPage.value - halfPageSize){
    for(let i = -halfPageSize;i<=halfPageSize;++i){
      list.push(currentPage.value + i)
    }
  }else if (currentPage.value < 1+halfPageSize){
    for(let i = 1;i<= pageSize.value;++i){
      list.push(i)
    }
  }else if (currentPage.value > totalPage.value - halfPageSize){
    for(let i = 1 + totalPage.value-pageSize.value;i<= totalPage.value;++i){
      list.push(i)
    }
  }
  return list
})
</script>

<template>
  <div class="manage">
    <div class="task-list">
      <div class="task-list-item">
        <span class="task-list-block">Task</span>
        <div style="margin-left: 23px; margin-right: 40px; width: 340px">
          <div class="task-list-title">一个任务名称</div>
          <div class="task-list-desc">
            一段假想的简介，这是一段比较长的简介。
          </div>
        </div>
        <div style="width: 42px">
          <div class="task-list-owner">Owner</div>
          <div class="task-list-owner">曲丽丽</div>
        </div>
        <div style="margin-left: 39px; margin-right: 40px; width: 117px">
          <div class="task-list-startTime">开始时间</div>
          <div class="task-list-startTime">2016-06-16 14:30</div>
        </div>
        <a-progress
            style="width: 160px; margin-right: 50px"
            :percent="50"
        />

        <span style="padding-right: 2px">
              <a-tag color="success">正在上传</a-tag>
            </span>
      </div>


    </div>
    <div class="pagination">
      <div class="pagination-bar">
        <el-icon class="arrow" size="2rem"
                 @click="--currentPage"
        ><Back></Back></el-icon>
        <div :class="['pagination-bar-button', currentPage===page?'active':'']"
             v-for="page in pageList"
             @click="currentPage=page"
        >
          {{page}}
        </div>
        <el-icon class="arrow" size="2rem"
                 @click="++currentPage"
        ><Right></Right></el-icon>
      </div>
      <div class="page-skipper">
        跳至 <input
          @keyup.enter="currentPage=skipPageNumber"
          v-model.number="skipPageNumber"/> 页
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/Manage";
@import "@/assets/css/TaskManage";
</style>
