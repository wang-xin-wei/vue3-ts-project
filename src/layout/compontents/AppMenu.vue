<template>
  <el-menu
    active-text-color="#fff"
    background-color="#001529"
    class="el-menu-vertical-demo"
    default-active="/"
    unique-opened
    text-color="#a6adb4"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/promission">
      <template #title>
        <el-icon><UserFilled /></el-icon>
        <span>管理员</span>
      </template>
      <el-menu-item index="/promission/list">
        管理员管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        订单管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/category">
      <template #title>
        <el-icon><Operation /></el-icon>
        <span>分类</span>
      </template>
      <el-menu-item index="/category/list">
        分类管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/menu">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>菜单</span>
      </template>
      <el-menu-item index="/menu/list">
        菜单管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/role">
      <template #title>
        <el-icon><User /></el-icon>
        <span>角色</span>
      </template>
      <el-menu-item index="/role/list">
        角色管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/goods">
      <template #title>
        <el-icon><Goods /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/goods/list">
        商品管理
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { HomeFilled, UserFilled, Document, Menu, User, Goods, Operation } from '@element-plus/icons-vue'

</script>

<style scoped>
/* 去除el-menu的右边框 使其和el-aside的视觉效果一致 */
.el-menu {
  border: none !important;
}

/* 设置展开后的宽度 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}

/* 解决 el-menu 折叠时动画不完整 menu中的文字无法隐藏的问题 */
.el-menu--collapse .el-submenu__title span {
  display: none;
}

.el-menu--collapse .el-submenu__title .el-submenu__icon_arrow {
  display: none;
}
</style>
