<template>
  <div class="app-title">
    <span> {{ defaultSettings.title }} </span>
  </div>
</template>

<script setup lang="ts">
import { defaultSettings } from '@/settings'

</script>

<style scoped>
.app-title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
}
</style>
