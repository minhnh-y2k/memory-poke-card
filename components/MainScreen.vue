36 lines (33 sloc)  1.22 KB

<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-black text-white text-center p-2">
    <h1 class="text-6xl uppercase font-bold m-0">Memory Poke Card</h1>
    <p class="text-3xl">Select mode to start game</p>
    <div class="mt-8 flex">
      <button @click="onStart(4, 4)"
        class="flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
        <span class="text-3xl">4x4</span>
      </button>
      <button @click="onStart(4, 8)"
        class="flex flex-col justify-center items-center w-28 h-28 rounded-3xl border-2 m-4 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
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
  </div>
</template>

<script>
export default {
  emits: ['onStarts'],

  methods: {
    onStart(rows, cols) {
      this.$emit('onStarts', { rows, cols });
    }
  }
}
</script>

<style lang="scss" scoped></style>
