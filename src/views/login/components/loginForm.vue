<template>
  <el-form
    ref="loginForm"
    :model="userForm"
    :rules="rules"
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
        :loading="isLoading"
        round
        @click="handleSubmit"
      >
        登录
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { ElForm, FormRules, ElMessage } from 'element-plus'
import { userLogin } from '@/api/user'

import { useRouter, useRoute } from 'vue-router'
import { store } from '@/store/index'

const loginForm = ref < InstanceType<typeof ElForm> | null>(null)
const isLoading = ref(false)

const router = useRouter()
const route = useRoute()

// 表单校验规则
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

const userForm = ref<{
  username: string
  password: string
}>({
  username: 'admin',
  password: '123456'
})

// 用户登录
const handleSubmit = async () => {
  const valid = loginForm.value?.validate()
  if (!valid) {
    return false
  }
  // 开启loading
  isLoading.value = true

  // 请求登录接口
  const res = await userLogin(userForm.value).finally(() => {
    isLoading.value = false
  })
  // 存储数据
  store.commit('setUserInfo', res.data)
  // 提示登录成功
  ElMessage({
    showClose: true,
    type: 'success',
    message: res.msg
  })

  // 判断一下 是否需要重定向 如果路由的参数中包含redirect 则跳转到redirect地址 不包含redirect地址则跳转到首页
  let redirect = route.query.redirect || '/'

  // 处理 路由类型的问题
  if (typeof redirect !== 'string') {
    redirect = '/'
  }

  // 跳转路由
  router.replace(redirect)
}

</script>
<style lang="scss" scoped>
/* form */
.loginForm {
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
