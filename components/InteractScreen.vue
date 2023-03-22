<template>
  <div class="screen w-full h-screen bg-black text-white flex justify-center items-center">
    <div class="grid gap-4" :class="`grid-cols-${config.cols}`">
      <Card v-for="(card, index) in config.allCards" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({
        cols: 0,
        allCards: [],
      }),
    },
  },

  methods: {
  },
}
</script>

<style scoped></style>