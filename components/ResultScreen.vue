<template>
  <div class="w-full min-h-screen bg-black flex flex-col justify-center items-center text-white">
    <h1 class="text-7xl md:text-8xl font-bold">Congratulations</h1>
    <p class="text-4xl">Time: {{ formatTime(timer) }}</p>
    <button @click="onStartAgain"
      class="text-3xl p-3 mt-10 border-2 rounded-xl transition-all duration-300 hover:bg-white hover:text-black">
      Start Again
    </button>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  emits: ['onStartAgain'],

  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    formatTime(time) {
      return moment(time).format('mm:ss');
    },

    onStartAgain() {
      this.$emit('onStartAgain');
    },
  }
}
</script>

<style lang="scss" scoped></style>
