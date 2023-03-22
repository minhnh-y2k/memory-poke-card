<template>
  <div class="screen">
    <h1>Memory Poke Card</h1>
    <p>Select mode to start game</p>
    <div class="modes">
      <button @click="onStart(4, 4)">
        <span class="text-3xl">4x4</span>
      </button>
      <button @click="onStart(4, 8)">
        <span class="text-3xl">4x8</span>
      </button>
      <button @click="onStart(5, 10)" class="hidden xl:block">
        <span class="text-3xl">5x10</span>
      </button>
      <button @click="onStart(6, 12)" class="hidden xl:block">
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

<style lang="scss" scoped>
.screen {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  text-align: center;
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    line-height: 1;
  }
  p {
    font-size: 2rem;
  }
  .modes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    button {
      background-color: black;
      color: white;
      font-size: 2rem;
      text-transform: uppercase;
      border: 2px solid white;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      width: 6rem;
      height: 6rem;
      margin: 1rem;
      border-radius: 1.5rem;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
}
</style>