<script setup lang="ts">
const year: number = new Date().getFullYear();
</script>

<template>
  <footer class="pt pb">
    <div class="page">&copy; {{ year }}, xxx, All right reserved.</div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--footer-bg);
  color: var(--font-reverse);
}
</style>