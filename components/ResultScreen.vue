<template>
  <div class="w-full min-h-screen bg-black flex flex-col justify-center items-center text-white">
    <h1 class="text-8xl font-bold">✨ Congratulations ✨</h1>
    <p class="text-4xl">Time: {{ timer }} seconds</p>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
