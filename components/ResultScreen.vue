<template>
  <div class="w-full min-h-screen bg-black flex flex-col justify-center items-center text-white">
    <h1 class="text-6xl font-bold">Congratulations</h1>
    <p class="text-4xl">Time: {{ formatTime(timer) }}</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
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
  },
}
</script>

<style lang="scss" scoped></style>
