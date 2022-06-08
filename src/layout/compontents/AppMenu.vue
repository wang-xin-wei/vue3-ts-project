<template>
  <!-- <AppTitle /> -->
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
      <svg-icon
        name="home"
        color="#fff"
      />
      <span class="svg-icon-title">首页</span>
    </el-menu-item>
    <el-sub-menu index="/promission">
      <template #title>
        <svg-icon
          name="admin"
          color="#fff"
        />
        <span class="svg-icon-title">管理员</span>
      </template>
      <el-menu-item index="/promission/list">
        管理员管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <svg-icon
          name="order"
          color="#fff"
        />
        <span class="svg-icon-title">订单</span>
      </template>
      <el-menu-item index="/order/list">
        订单管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/category">
      <template #title>
        <svg-icon
          name="category"
          color="#fff"
        />
        <span class="svg-icon-title">分类</span>
      </template>
      <el-menu-item index="/category/list">
        分类管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/menu">
      <template #title>
        <svg-icon
          name="menu"
          color="#fff"
        />
        <span class="svg-icon-title">菜单</span>
      </template>
      <el-menu-item index="/menu/list">
        菜单管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/role">
      <template #title>
        <svg-icon
          name="role"
          color="#fff"
        />
        <span class="svg-icon-title">角色</span>
      </template>
      <el-menu-item index="/role/list">
        角色管理
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/goods">
      <template #title>
        <svg-icon
          name="goods"
          color="#fff"
        />
        <span class="svg-icon-title">商品</span>
      </template>
      <el-menu-item index="/goods/list">
        商品管理
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
// import AppTitle from '../AppHeader/AppTitle.vue'
</script>

<style scoped lang="scss">
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

.el-menu.el-menu--collapse .svg-icon-title {
  margin-left: 0 !important;
}

.el-menu .svg-icon-title {
  margin-left: 15px !important;
}
</style>
