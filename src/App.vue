<template>
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

<style>
html, body, #app {
  @apply w-full h-full overflow-hidden;
}
</style>

<script setup>
console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
