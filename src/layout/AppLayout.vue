<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppMenu from './compontents/AppMenu.vue'
import AppHeader from './AppHeader/headerIndex.vue'

</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  width: auto;
  background-color: $globalBackgroundColor;
}
.el-main {
  padding: 20px;
}
.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
