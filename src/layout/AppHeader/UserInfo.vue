<template>
  <el-dropdown trigger="click">
    <div class="avatar-wrapper">
      <img
        :src="$store.state.userInfo?.avatar || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
        class="user-avatar"
      >
      <el-icon class="user-avatar-right-icon">
        <CaretBottom />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleUserInfo">
          个人中心
        </el-dropdown-item>
        <el-dropdown-item @click="handleLogou">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { CaretBottom } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { store } from '@/store'

import { logout } from '@/api/user'

const router = useRouter()

const handleLogou = () => {
  ElMessageBox.confirm('确认退出登录吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    const res = await logout()
    if (res.code === 200) {
      // 清空用户信息以及存储在浏览器中的数据
      store.commit('setUserInfo', null)
      // 提示退出成功
      ElMessage({
        type: 'success',
        message: res.msg
      })

      // 跳转到登录页
      router.push({
        name: 'login'
      })
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
}

const handleUserInfo = () => {
  // userInfo 跳转到个人中心页面
}

</script>

<style lang="scss" scoped>
.avatar-wrapper {
  margin-top: 5px;
  position: relative;
  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .user-avatar-right-icon {
    cursor: pointer;
    position: absolute;
    right: -15px;
    top: 25px;
    font-size: 12px;
  }
}
</style>
