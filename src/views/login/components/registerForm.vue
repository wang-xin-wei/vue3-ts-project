<template>
  <el-form
    ref="registerForm"
    :model="userForm"
    class="registerForm sign-up-form"
  >
    <div class="register_title">
      注册
    </div>
    <el-form-item
      prop="name"
    >
      <el-input
        v-model="userForm.username"
        size="large"
        placeholder="用户名"
      />
    </el-form-item>
    <el-form-item
      prop="password"
    >
      <el-input
        v-model="userForm.password"
        type="password"
        size="large"
        placeholder="密码"
      />
    </el-form-item>
    <el-form-item
      prop="fullname"
    >
      <el-input
        v-model="userForm.fullname"
        type="text"
        size="large"
        placeholder="姓名"
      />
    </el-form-item>

    <el-form-item prop="sex">
      <el-select
        v-model="userForm.sex"
        size="large"
        placeholder="性别"
        style="width:100%;"
      >
        <el-option
          label="男"
          value="男"
        />
        <el-option
          label="女"
          value="女"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      prop="tel"
    >
      <el-input
        v-model="userForm.tel"
        type="text"
        size="large"
        placeholder="手机号"
      />
    </el-form-item>
    <div style="width:100%;display: flex;justify-content: center;">
      <el-button
        type="primary"
        class="submit-btn"
        size="large"
        round
      >
        注册
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const userForm = ref({
  username: '',
  password: '',
  fullname: '',
  sex: '',
  tel: ''
})

</script>
<style lang="scss" scoped>
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  min-height: 300px;
  :deep(.el-input__wrapper) {
    border-radius: 30px !important;
  }
  :deep(.el-input--large) {
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

.register_title {
  font-weight: 600;
  line-height: 2;
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}
</style>
