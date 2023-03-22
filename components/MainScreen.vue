<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-black text-white text-center">
    <h1 class="text-7xl uppercase font-bold m-0">Memory Poke Card</h1>
    <p class="text-3xl">Select mode to start game</p>
    <div class="modes mt-8 flex">
      <button @click="onStart(4, 4)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">4x4</span>
      </button>
      <button @click="onStart(4, 6)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">4x8</span>
      </button>
      <button @click="onStart(5, 10)"
        class="hidden xl:flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">5x10</span>
      </button>
      <button @click="onStart(6, 12)"
        class="hidden xl:flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
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

<style scoped></style>