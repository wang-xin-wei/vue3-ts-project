<template>
  <h1>home</h1>
</template>

<script lang="ts" setup>
import { userInfo } from '@/api/user'

const params = {
  id: '1'
}
userInfo(params).then((res) => {
  console.log(res)
})

</script>

<style></style>
