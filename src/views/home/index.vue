<template>
  <h1>home</h1>
  <el-date-picker
    v-model="value"
    type="date"
    placeholder="Pick a day"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
</script>

<style></style>
