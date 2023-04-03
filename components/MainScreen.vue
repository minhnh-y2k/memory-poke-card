<template>
  <div
    class="container relative flex min-h-screen min-w-full flex-col items-center justify-center p-2 text-center text-white">
    <h1 class="m-0 text-7xl font-bold uppercase md:mb-20 md:text-9xl">
      Memory Poke Card
    </h1>
    <p class="text-3xl">Select mode to start game</p>
    <div class="mt-8 flex">
      <button @click="onStart(2, 2)"
        class="m-4 flex h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
        <span class="text-3xl">2x2</span>
      </button>

      <button @click="onStart(4, 3)"
        class="m-2 flex h-24 w-24 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:hidden">
        <span class="text-3xl">4x3</span>
      </button>
      <button @click="onStart(6, 4)"
        class="m-2 flex h-24 w-24 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:hidden">
        <span class="text-3xl">6x4</span>
      </button>
      <button @click="onStart(7, 4)"
        class="m-2 flex h-24 w-24 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:hidden">
        <span class="text-3xl">7x4</span>
      </button>
      <button @click="onStart(4, 4)"
        class="m-4 hidden h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:flex">
        <span class="text-3xl">4x4</span>
      </button>
      <button @click="onStart(6, 5)"
        class="m-4 hidden h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:flex xl:hidden">
        <span class="text-3xl">6x5</span>
      </button>
      <button @click="onStart(8, 6)"
        class="m-4 hidden h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black md:flex xl:hidden">
        <span class="text-3xl">8x6</span>
      </button>
      <button @click="onStart(4, 8)"
        class="m-4 hidden h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black xl:flex">
        <span class="text-3xl">4x8</span>
      </button>
      <button @click="onStart(5, 10)"
        class="m-4 hidden h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black xl:flex">
        <span class="text-3xl">5x10</span>
      </button>
      <button @click="onStart(6, 12)"
        class="m-4 hidden h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black xl:flex">
        <span class="text-3xl">6x12</span>
      </button>
    </div>
    <p class="fixed bottom-4 left-0 right-0 text-2xl">
      This game owned by
      <a class="font-bold text-cyan-400 underline hover:text-purple-600" target="_blank"
        href="https://github.com/minhnh-y2k">Nguyen Hoai Minh</a>
    </p>
  </div>
</template>

<!-- <script>
export default {
  methods: {
    onStart(rows, cols) {
      this.$emit('onStarts', { rows, cols });
    }
  }
}
</script> -->
<script setup>
const emit = defineEmits(["onStarts"]);

const onStart = (rows, cols) => {
  emit("onStarts", { rows, cols });
};
</script>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/bg.png");
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: scroll;
  background-size: cover;
}
</style>
