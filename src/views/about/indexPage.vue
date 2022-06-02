<template>
  <h1 class="title">
    about
  </h1>
</template>

<script lang="ts" setup>
import { userLogin } from '@/api/user'
const data = {
  username: 'admin',
  password: '123456'
}
const user = await userLogin(data)
console.log(user)

</script>

<style lang="scss" scoped>
// scss
.title {
  color: $color;
  font-size: 16px;
}
</style>
