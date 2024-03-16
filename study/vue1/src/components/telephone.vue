<script setup lang="ts">
import { ref } from 'vue'
const open = ref(true)

</script>

<template>
  <button class="btn"  @click="open = !open"> Show On Button </button>
<Teleport to="body">
  <div v-if="open" class="modal">
    <p class="text-4xl">Hello from the modal</p>
  </div>
</Teleport>
</template>

<style scoped>
.modal {
  @apply w-max h-10
}

.btn{
  @apply bg-amber-400 w-10 h-10
}
</style>