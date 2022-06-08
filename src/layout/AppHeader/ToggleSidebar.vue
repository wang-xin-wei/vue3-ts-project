<template>
  <svg-icon
    v-if="$store.state.isCollapse"
    @click="handleCollapse"
    name="shrink"
    size="1.5em"
  />
  <svg-icon
    v-else
    @click="handleCollapse"
    name="launch"
    size="1.5em"
  />
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped>
.svg-icon {
  cursor: pointer;
}
</style>
