<template>
  <svg-icon
    @click="toggleFullScreen"
    :name="isFullscreen ? 'fullscreen' : 'exit-fullscreen'"
    size="1.5em"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isFullscreen = ref(true)

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    isFullscreen.value = false
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      isFullscreen.value = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
