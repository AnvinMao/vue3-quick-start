<script setup lang="ts">
import { onMounted } from 'vue';
import screen from './utils/screen';

onMounted(() => screen.addListener());
</script>

<template>
  <RouterView />
</template>
