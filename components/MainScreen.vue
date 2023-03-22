36 lines (33 sloc)  1.22 KB

<template>
  <div class="container relative min-w-full min-h-screen flex flex-col justify-center items-center text-white text-center p-2">
    <h1 class="text-7xl md:text-9xl uppercase font-bold m-0 md:mb-20">Memory Poke Card</h1>
    <p class="text-3xl">Select mode to start game</p>
    <div class="mt-8 flex">
      <button @click="onStart(4, 3)"
        class="md:hidden flex flex-col justify-center items-center w-24 h-24 rounded-3xl border-2 m-2 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">4x3</span>
      </button>
      <button @click="onStart(6, 4)"
        class="md:hidden flex flex-col justify-center items-center w-24 h-24 rounded-3xl border-2 m-2 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">6x4</span>
      </button>
      <button @click="onStart(7, 4)"
        class="md:hidden flex flex-col justify-center items-center w-24 h-24 rounded-3xl border-2 m-2 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">7x4</span>
      </button>
      <button @click="onStart(4, 4)"
        class="hidden md:flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">4x4</span>
      </button>
      <button @click="onStart(6, 5)"
        class="hidden xl:hidden md:flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">6x5</span>
      </button>
      <button @click="onStart(8, 6)"
        class="hidden xl:hidden md:flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">8x6</span>
      </button>
      <button @click="onStart(4, 8)"
        class="hidden xl:flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">4x8</span>
      </button>
      <button @click="onStart(5, 10)"
        class="hidden xl:flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">5x10</span>
      </button>
      <button @click="onStart(6, 12)"
        class="hidden xl:flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">6x12</span>
      </button>
    </div>
    <p class="fixed bottom-4 left-0 right-0 text-2xl">This game owned by
      <a class="text-cyan-400 font-bold hover:text-purple-600 underline" target="_blank" href="https://github.com/minhnh-y2k">Nguyen Hoai Minh</a>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    onStart(rows, cols) {
      this.$emit('onStarts', { rows, cols });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/bg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: scroll;
  background-size: cover;
}
</style>
