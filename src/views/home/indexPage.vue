<template>
  <h1>home</h1>
</template>

<script lang="ts" setup>
import { getUserInfo } from '@/api/user'

getUserInfo().then((res) => {
  console.log(res)
})
</script>

<style></style>
