<template>
  <el-icon
    v-if="$store.state.isCollapse"
    @click="handleCollapse"
    style="font-size:24px;"
  >
    <Expand />
  </el-icon>
  <el-icon
    v-else
    @click="handleCollapse"
    style="font-size:24px;"
  >
    <Fold />
  </el-icon>
</template>

<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from '@/store'

const store = useStore()

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped></style>
