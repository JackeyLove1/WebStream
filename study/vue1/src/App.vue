<template>
  <!--div class="h-screen flex items-center justify-center">
    <ul class="flex flex-row space-x-6 text-2xl pagination">
      <li><a href="#"><<</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#" class="border border-solid px-2 py-1 bg-green-600 rounded-lg">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">>></a></li>
    </ul>
  </div-->

  <!--div class="flex flex-col items-center justify-center h-screen">
    <div class="w-3/4 h-1/3 border border-black border-solid">
      header
    </div>
    <div class="w-3/4 h-2/3 border border-black border-solid flex flex-row">
      <div class="w-1/3 h-full border border-black border-solid">
        menu
      </div>
      <div>
      </div>
    </div>
  </div-->
  <!--button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
    按钮
  </button-->
  <div class="bg-white flex flex-row sticky top-0 z-10">
    <ul class="relative flex overflow-x-auto p-1 text-lg text-zinc-600">
      <li
          v-for="item in data"
          :key="item.id"
          class="shrink-0 px-5 py-1 rounded-lg hover:bg-zinc-600 hover:text-white"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>

  <div class="flex flex-col">
    <div>
      <button class="bg-green-200" @click="count++">
        Add
      </button>
      <div>
        Count1: {{ count }}
      </div>
    </div>
    <div>
      <button class="bg-purple-800" @click="state.count++">
        Add
      </button>
      <div>
        Counter2: {{ state.count }}
      </div>
    </div>

    <div class="text-xl mt-2 ml-2">
      <span>
        {{ publishedBooksMessage }}
      </span>
    </div>

    <div class="static" :class="classObject">
      Dynamic Class
    </div>

    <div>
      <div :style="styleObject">
        Dynamic Color
      </div>
      <button @click="changColor" class="border border-solid border-black">
        Change Color
      </button>
    </div>

    <div>
      <button @click="awesome = !awesome" class="btn">Toggle</button>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh on!</h1>
    </div>

    <div>
      <p> Message is : {{ message }}</p>
      <input v-model="message" placeholder="edit me"/>
    </div>

    <div>
      <div>Selected: {{ selected }}</div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option> A</option>
        <option> B</option>
        <option> C</option>
      </select>
    </div>

    <div>
      Mouse position is at: {{ x }}, {{ y }}
    </div>

    <div class="border-solid border border-black px-2 py-2">
      <router-link to="/">Go To Home</router-link>
    </div>
    <div class="border-solid border border-black px-2 py-2">
      <router-link to="/about">Go To About</router-link>
    </div>
    <router-view></router-view>
  </div>

  <div>
    <Popup></Popup>
  </div>

  <div>
    <Telephone></Telephone>
  </div>

  <div>
    <PopWindow >
      <button></button>
    </PopWindow>
  </div>
</template>

<script setup lang="ts">

import {ref, reactive, computed, onMounted, onUnmounted} from 'vue';
import Popup from "@/components/popup.vue";
import Telephone from "@/components/telephone.vue";
import PopWindow from "@/components/PopWindow.vue";

const propOpen = ref(false)

const x = ref(0)
const y = ref(0)

function update(event: any) {
  x.value = event.pageX;
  y.value = event.pageY;
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

const message = ref('');

const selected = ref('');

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})

const changColor = () => {
  styleObject.color = styleObject.color === 'red' ? 'green' : 'red';
}

const classObject = reactive({
  active: true,
  'text-danger': true,
  'text-xl': true,
})

const count = ref(0)
const state = reactive({count: 0})

const checkedNames = ref([])

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

interface Item {
  id: number
  name: string
}

const data = ref<Item[]>([
  {
    id: 1,
    name: "全部",
  },
  {
    id: 2,
    name: "UI/UX",
  },
  {
    id: 3,
    name: "平面",
  },
  {
    id: 4,
    name: "漫画",
  },
  {
    id: 5,
    name: "全部",
  },
  {
    id: 6,
    name: "UI/UX",
  },
  {
    id: 7,
    name: "平面",
  },
  {
    id: 8,
    name: "漫画",
  },
])

const useRem = () => {
  const MAX_FONT_SIZE = 40;
  document.addEventListener('DOMContentLoaded', () => {
    // get html label
    let html = document.querySelector('html')
    // calculate font size
    if (html) {
      let fontSize = window.innerWidth / 10;
      fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
      html.style.fontSize = fontSize + 'px'
    }
  })
}

const awesome = ref(false)

</script>

<style scoped>
.btn {
  @apply border-black border border-solid px-2 py-2 mt-2
}
</style>
