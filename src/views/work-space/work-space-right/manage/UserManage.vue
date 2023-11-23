<script setup>
// tableData
import {formatTime} from "@/utils/format";

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    width: '8%',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: '15%',
    slots: {
      customRender: 'avatar',
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '20%',
  },
  {
    title: '用户权限',
    dataIndex: 'right',
    width: '15%',
  },
  {
    title: '操作',
    key: 'action',
    width: '22%',
    slots: {
      customRender: 'operation',
    },
  },
]

const tableData = []

for (let i = 0; i < 7; i++) {
  tableData.push({
    key: i.toString(),
    name: `Andrew ${i}`,
    avatar: '@/assets/img/白子.jpg',
    createTime: formatTime(new Date().toString()),
    right: `管理员`,
    action: 'name',
  })
}
</script>

<template>
  <div class="user-manage">
    <div class="user-list">
      <div class="user-list-header" >
        <div v-for="col in columns" :style="{width: col.width}">{{ col.title}}</div>
      </div>
      <div class="user-list-column"
            v-for="data in tableData">
        <div class="user-list-column-item"
            v-for="col in columns" :style="{width: col.width}">
          <div class="user-list-column-item-img"
              v-if="col.dataIndex==='avatar'">
            <img :src="data[col.dataIndex]" alt="呜呜，没有图片">
          </div>
          <div class="actions" v-else-if="col.key==='action'">
            <div class="action">编辑</div>
            <div class="action">启用</div>
            <div class="action">删除</div>
          </div>
          <div v-else>
            {{ data[col.dataIndex]}}
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/UserManage";
</style>
