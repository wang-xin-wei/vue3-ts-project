<template>
  <h1>home</h1>
</template>

<script lang="ts" setup>
import { userList } from '@/api/user'

userList().then((res) => {
  console.log(res)
})

</script>

<style></style>
