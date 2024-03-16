<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-content">
          <slot name="content">
            default content
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
          </slot>
          <button @click="$emit('close')" class="btn">
            OK
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    require: true,
  }
})

</script>

<style scoped>
.modal-mask{
  @apply fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-700 transition-opacity duration-300 ease-in-out
}

.modal-container{
  @apply flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-10 py-6 text-xl space-y-2
}

.modal-header {
  @apply mt-0
}

.modal-content{
  @apply mt-0
}

.modal-footer{
  @apply mt-0 justify-between
}

.btn{
  @apply border border-solid border-gray-600 text-sm bg-gray-100 hover:bg-gray-300 rounded-lg px-2 py-1 mb-1 mr-1
}

.modal-enter-from{
  @apply opacity-0 duration-300
}

.modal-leave-to {
  @apply opacity-0 duration-300
}

</style>
