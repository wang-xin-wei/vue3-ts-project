<template>
  <el-form
    ref="loginForm"
    :model="userForm"
    class="loginForm sign-in-form"
  >
    <div class="login_title">
      登录
    </div>
    <el-form-item
      prop="username"
    >
      <el-input
        size="large"
        v-model="userForm.username"
        placeholder="用户名"
        :prefix-icon="UserFilled"
        class="login_form_input"
      />
    </el-form-item>
    <el-form-item
      prop="password"
    >
      <el-input
        size="large"
        v-model="userForm.password"
        placeholder="密码"
        type="password"
        :prefix-icon="Lock"
        class="login_form_input"
      />
    </el-form-item>

    <div style="width:100%;display: flex;justify-content: center;">
      <el-button
        type="primary"
        class="submit-btn"
        size="large"
        round
      >
        登录
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UserFilled, Lock } from '@element-plus/icons-vue'
const userForm = ref({
  username: '',
  password: ''
})
</script>
<style lang="scss" scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  min-height: 300px;
  ::v-deep .el-input__wrapper {
    border-radius: 30px !important;
  }
  ::v-deep .el-input--large {
    font-size: 18px !important;
  }
}

.submit-btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}
.login_title {
  font-weight: 600;
  line-height: 2;
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

</style>
