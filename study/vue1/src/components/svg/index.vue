<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  color: {
    type: String,
  },
  fillClass: {
    type: String,
  }
})

const symbolId = computed(() => `#icon-${props.name}`)

</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClass" :fill="color"></use>
  </svg>
</template>

<style scoped>

</style>