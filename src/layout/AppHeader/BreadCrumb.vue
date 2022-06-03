<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()

const routes = computed(() => {
  // 获取当前路由的匹配记录并过滤出title
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>

<style lang="scss" scoped></style>
