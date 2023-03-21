<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-black text-white text-center">
    <h1 class="text-7xl uppercase font-bold m-0">Memory Poke Card</h1>
    <p class="text-3xl">Select mode to start game</p>
    <div class="modes mt-8 grid grid-cols-2 md:grid-cols-4">
      <button @click="onStart(4, 4)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">4x4</span>
        <span class="text-xl">Easy</span>
      </button>
      <button @click="onStart(6, 6)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">6x6</span>
        <span class="text-xl">Normal</span>
      </button>
      <button @click="onStart(8, 8)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">8x8</span>
        <span class="text-xl">Hard</span>
      </button>
      <button @click="onStart(10, 10)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">10x10</span>
        <span class="text-xl">Super Hard</span>
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
    },
  },
}
</script>

<style scoped></style>