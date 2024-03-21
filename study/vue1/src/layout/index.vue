<script setup lang="ts">
import HeaderVue from '@/layout/components/header/index.vue'
import MainVue from './components/main.vue'
import FloatingVue from './components/floating.vue'


</script>

<template>
  <div class="h-screen">
    <header-vue class="h-header"></header-vue>
    <main-vue class="h-main"></main-vue>
    <floating-vue></floating-vue>
  </div>
</template>

<style scoped>

</style>