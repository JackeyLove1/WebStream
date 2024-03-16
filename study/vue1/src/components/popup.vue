<script setup lang="ts">
import {ref, watch} from "vue";

const show = ref(false);

</script>

<template>
  <button @click="show = !show" class="btn"> Toggle</button>
  <Transition :duration="550">
    <p v-if="show" class="text-4xl">
      hello
    </p>
  </Transition>
  <Transition>

  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.5s opacity ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.btn {
  @apply border-green-500 border border-solid bg-purple-400 text-white
}
</style>